"use client";

import { useCallback, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import SkillBadges from "./SkillBadges";

export type ElasticProjectReelProps = {
  /** Camera distance in px. Smaller values exaggerate the depth of the stage. */
  perspective?: number;
  /** Peak swell of a closed slice under the pointer (1 = no swell). */
  magnify?: number;
  /** Extra px a raised slice travels toward the viewer. */
  lift?: number;
  /** Pointer radius in px that the magnification fades across. */
  influence?: number;
  /** Fan angle in deg the outer slices rotate away from the open one. */
  tilt?: number;
  /** How springy the motion feels: 0 is stiff, 1 is loose and slow. */
  elasticity?: number;
  /** Dim veil opacity over the closed slices. */
  dim?: number;
  /** Blur of the closed slice artwork, 0 – 1. */
  blur?: number;
  /** Cast-shadow strength under raised slices. */
  shadow?: number;
  /** Specular rim-light strength along the slice edges. */
  rim?: number;
  /** Share of the reel width taken by the open slice (0.35 – 0.8). */
  openSize?: number;
};

const defaults: Required<ElasticProjectReelProps> = {
  perspective: 1100,
  magnify: 1.22,
  lift: 70,
  influence: 220,
  tilt: 14,
  elasticity: 0.35,
  dim: 0.35,
  blur: 0.28,
  shadow: 0.5,
  rim: 0.18,
  openSize: 0.62,
};

/**
 * A dock of project slices that swell toward the camera and open into a full card.
 *
 * The 3D look is driven by `perspective` (camera distance), `tilt` (fan of the
 * closed slices), `lift` (how far a slice pops forward) and `magnify` +
 * `influence` (pointer-proximity swell). Depth cues are `shadow`, `rim`, `dim`
 * and `blur`; `elasticity` tunes the timing.
 *
 * Example: <ElasticProjectReel perspective={900} tilt={16} lift={90} magnify={1.3} elasticity={0.8} />
 */
export default function ElasticProjectReel({
  perspective = defaults.perspective,
  magnify = defaults.magnify,
  lift = defaults.lift,
  influence = defaults.influence,
  tilt = defaults.tilt,
  elasticity = defaults.elasticity,
  dim = defaults.dim,
  blur = defaults.blur,
  shadow = defaults.shadow,
  rim = defaults.rim,
  openSize = defaults.openSize,
}: ElasticProjectReelProps = {}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [proximity, setProximity] = useState<number[]>(() =>
    projects.map(() => 0),
  );
  const sliceRefs = useRef<(HTMLElement | null)[]>([]);

  // Smoothstep falloff of the pointer magnification, measured per slice so the
  // effect keeps up while the open slice is still resizing.
  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType !== "mouse") return;
      const pointerX = event.clientX;

      setProximity(
        sliceRefs.current.map((slice) => {
          if (!slice || influence <= 0) return 0;
          const rect = slice.getBoundingClientRect();
          const distance = Math.abs(pointerX - (rect.left + rect.width / 2));
          const t = Math.max(0, 1 - distance / influence);
          return t * t * (3 - 2 * t);
        }),
      );
    },
    [influence],
  );

  const resetProximity = useCallback(() => {
    setProximity(projects.map(() => 0));
  }, []);

  const closedShare = (1 - openSize) / Math.max(1, projects.length - 1);
  const transitionMs = Math.round(280 + elasticity * 720);

  return (
    <div
      className="relative flex h-[540px] w-full items-stretch gap-3 sm:gap-4 lg:gap-5"
      style={{ perspective: `${perspective}px`, perspectiveOrigin: "50% 50%" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetProximity}
      onClick={() => {
        setActiveIndex(-1);
      }}
    >
      {projects.map((project, index) => {
        const isActive = activeIndex === index;
        const hasImage = Boolean(project.image);
        const offset = index - activeIndex;

        const hover = isActive ? 0 : proximity[index] ?? 0;
        // The pointer swell widens the slice in layout (a dock, not a stretched
        // bitmap) and adds a small push toward the camera on top of it.
        const swell = 1 + (magnify - 1) * hover;
        // Closed slices sit back a little, deeper the further they are from the
        // open one, so the fan reads as a curved surface rather than flat cards.
        const recede = isActive ? 0 : -Math.min(lift * 0.5, Math.abs(offset) * lift * 0.25);
        const depthZ = (isActive ? lift : lift * 0.5 * hover) + recede;
        const fan = isActive || tilt === 0 ? 0 : Math.sign(offset) * tilt;
        const depthRatio = Math.min(1, Math.max(0, depthZ / Math.max(1, lift)));

        const sliceStyle: CSSProperties = {
          flexGrow: isActive ? openSize : closedShare * swell,
          flexBasis: 0,
          flexShrink: 1,
          minWidth: 0,
          transform: `translateZ(${depthZ.toFixed(1)}px) rotateY(${fan.toFixed(2)}deg)`,
          transformOrigin: offset < 0 ? "right center" : "left center",
          boxShadow: [
            `0 ${(6 + depthRatio * 22).toFixed(1)}px ${(18 + depthRatio * 34).toFixed(0)}px rgba(0, 0, 0, ${(shadow * (0.25 + depthRatio * 0.5)).toFixed(3)})`,
            `inset 1px 0 0 rgba(255, 255, 255, ${rim})`,
            `inset -1px 0 0 rgba(255, 255, 255, ${(rim * 0.6).toFixed(3)})`,
            `inset 0 0 0 1px rgba(255, 255, 255, ${(rim * 0.35).toFixed(3)})`,
          ].join(", "),
          transitionDuration: `${transitionMs}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        };

        return (
          <article
            key={project.id}
            ref={(node) => {
              sliceRefs.current[index] = node;
            }}
            onFocus={() => setActiveIndex(index)}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(isActive ? -1 : index);
            }}
            tabIndex={0}
            role="button"
            aria-expanded={isActive}
            aria-label={project.name}
            style={sliceStyle}
            className={[
              "group relative flex overflow-hidden rounded-xl border border-[color:var(--border)] transition-[flex-grow,transform,box-shadow] will-change-transform",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]",
              "cursor-pointer",
            ].join(" ")}
          >
            {!isActive && hasImage && (
              <>
                <div
                  className="absolute inset-0 -z-20 scale-110 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    filter: `blur(${(blur * 16).toFixed(1)}px)`,
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 -z-10"
                  style={{ backgroundColor: "var(--bg)", opacity: dim }}
                  aria-hidden
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[color:var(--bg)]/40 to-[color:var(--bg)]/90" />
              </>
            )}

            {!isActive && (
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <h3
                  className="select-none whitespace-nowrap text-sm font-medium uppercase tracking-[0.4em] [writing-mode:vertical-rl] rotate-180 sm:text-base"
                  style={{ opacity: 0.55 + hover * 0.45 }}
                >
                  {project.name}
                </h3>
              </div>
            )}

            {isActive && (
              <div className="relative z-10 grid h-full w-full grid-cols-1 sm:grid-cols-12">
                <div className="relative col-span-1 h-52 sm:col-span-5 sm:h-full lg:col-span-4">
                  {hasImage ? (
                    <Image
                      src={project.image}
                      alt={`Ảnh đại diện dự án ${project.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 34vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[color:var(--accent)]/25 to-transparent" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface)] via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[color:var(--surface)]" />
                </div>

                <div className="col-span-1 flex flex-1 flex-col justify-center gap-4 p-5 sm:col-span-7 sm:p-8 lg:col-span-8 lg:p-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <SkillBadges skills={project.tags} />
                    </div>
                    <p className="text-sm opacity-80">
                      {project.role} · team of {project.teamSize} · {project.period}
                    </p>
                  </div>

                  <div className="max-w-3xl">
                    <h2 className="mb-2 text-xl font-medium sm:text-2xl lg:text-3xl">
                      {project.name}
                    </h2>
                    <p className="text-sm leading-relaxed opacity-95 sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
