"use client";

import { useCallback, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "@/components/ui/Icons";
import TechTag from "@/components/ui/TechTag";
import { projects } from "@/data/projects";
import { withBasePath } from "@/lib/basePath";

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
  /** Reel height in px. */
  height?: number;
  /** Slice that starts open; -1 starts with every slice closed. */
  defaultActive?: number;
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
  height: 540,
  defaultActive: -1,
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
  height = defaults.height,
  defaultActive = defaults.defaultActive,
}: ElasticProjectReelProps = {}) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);
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
      className="relative flex w-full items-stretch gap-3 sm:gap-4 lg:gap-5"
      style={{
        height,
        perspective: `${perspective}px`,
        perspectiveOrigin: "50% 50%",
      }}
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
            key={project.slug}
            ref={(node) => {
              sliceRefs.current[index] = node;
            }}
            onFocus={() => setActiveIndex(index)}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(isActive ? -1 : index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape" && isActive) setActiveIndex(-1);
            }}
            tabIndex={0}
            // Closed slices act as buttons; the open one is a card whose only
            // control is its case-study link, so it must not nest in a button.
            role={isActive ? "group" : "button"}
            aria-expanded={isActive ? undefined : false}
            aria-label={isActive ? undefined : `Show ${project.title}`}
            style={sliceStyle}
            className={[
              "group relative flex overflow-hidden rounded-[10px] border border-border bg-surface transition-[flex-grow,transform,box-shadow] will-change-transform",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              "cursor-pointer",
            ].join(" ")}
          >
            {!isActive && hasImage && (
              <>
                <div
                  className="absolute inset-0 -z-20 scale-110 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${withBasePath(project.image)})`,
                    filter: `blur(${(blur * 16).toFixed(1)}px)`,
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 -z-10"
                  style={{ backgroundColor: "var(--color-background)", opacity: dim }}
                  aria-hidden
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
              </>
            )}

            {!isActive && (
              <div className="relative z-10 flex h-full w-full flex-col items-center gap-4 py-5">
                <span className="text-xs font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className="min-h-0 flex-1 select-none overflow-hidden text-ellipsis whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.16em] [writing-mode:vertical-rl] rotate-180"
                  style={{ opacity: 0.6 + hover * 0.4 }}
                >
                  {project.title}
                </h3>
              </div>
            )}

            {isActive && (
              <div className="relative z-10 grid h-full w-full grid-cols-12">
                <div className="relative col-span-4 h-full">
                  {hasImage ? (
                    <Image
                      src={withBasePath(project.image)}
                      alt={project.imageAlt}
                      fill
                      sizes="16vw"
                      className="object-cover grayscale-[0.2] brightness-[0.85]"
                      priority={index === defaultActive}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-accent/25 to-transparent" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface" />
                </div>

                <div className="col-span-8 flex min-w-0 flex-col justify-center gap-3.5 p-6">
                  <p className="eyebrow">
                    <span>{String(index + 1).padStart(2, "0")}.</span>
                    <span>{project.category}</span>
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.015em]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[0.75rem] text-muted">
                      {project.role}
                      {project.teamSize ? ` · team of ${project.teamSize}` : ""}
                      {" · "}
                      {project.period}
                    </p>
                  </div>

                  <p className="line-clamp-3 max-w-xl text-[0.8125rem] leading-relaxed text-[#d6d6d6]">
                    {project.summary}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <li key={technology}>
                        <TechTag size="sm">{technology}</TechTag>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-link self-start"
                  >
                    Read case study
                    <ArrowRight width={15} height={15} />
                  </Link>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
