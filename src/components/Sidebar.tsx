import Avatar from "./Avatar";
import { siteConfig } from "@/data/site";
import SocialIcons from "./SocialIcons";

export default function Sidebar() {
  return (
    <aside className="shrink-0 lg:w-[320px] xl:w-[360px] py-8 flex flex-col gap-6">
      <Avatar />
      <div>
        <h1 className="text-3xl sm:text-4xl font-serif-heading">
          {siteConfig.name.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-[color:var(--accent)]">
            {siteConfig.name.split(" ").slice(-1)[0]}
          </span>
        </h1>
        <p className="mt-2 text-lg">{siteConfig.role}</p>
        <p className="mt-2 text-sm leading-relaxed opacity-90">
          {siteConfig.tagline}
        </p>
      </div>
      <div>
        <SocialIcons />
      </div>
    </aside>
  );
}
