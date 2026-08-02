import {
  Briefcase,
  GraduationCap,
  Laptop,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types";

const TYPE_ICON: Record<ExperienceItem["type"], typeof Briefcase> = {
  internship: Briefcase,
  freelance: Laptop,
  competition: Trophy,
  organization: Users,
  education: GraduationCap,
  work: Briefcase,
};

const TYPE_LABEL: Record<ExperienceItem["type"], string> = {
  internship: "Internship",
  freelance: "Freelance",
  competition: "Competition",
  organization: "Organization",
  education: "Education",
  work: "Work",
};

interface ExperienceCardProps {
  item: ExperienceItem;
  align: "left" | "right";
}

export function ExperienceCard({ item, align }: ExperienceCardProps) {
  const Icon = TYPE_ICON[item.type];

  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 md:flex-row md:items-center",
        align === "right" && "md:flex-row-reverse"
      )}
    >
      <div className="absolute left-[19px] top-1 flex size-10 items-center justify-center rounded-full border border-border bg-background text-primary shadow-premium md:left-1/2 md:-translate-x-1/2">
        <Icon className="size-4" />
      </div>

      <div className="md:w-1/2" />

      <Reveal
        variants={align === "left" ? fadeRight : fadeLeft}
        className={cn(
          "glass shadow-premium ml-14 rounded-2xl p-6 md:ml-0 md:w-1/2",
          align === "left" ? "md:pr-12" : "md:pl-12"
        )}
      >
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
          <span>{TYPE_LABEL[item.type]}</span>
          <span className="text-muted-foreground">
            · {item.startDate} — {item.endDate}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.organization} · {item.location}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
        <ul className="mt-4 space-y-2">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-foreground/80"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-brand" />
              {highlight}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
