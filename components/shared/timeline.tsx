import { ExperienceCard } from "@/components/shared/experience-card";
import type { ExperienceItem } from "@/types";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative flex flex-col gap-10">
      <div
        aria-hidden
        className="absolute left-[39px] top-0 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2 md:-translate-x-1/2"
      />
      {items.map((item, index) => (
        <ExperienceCard
          key={item.id}
          item={item}
          align={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}
