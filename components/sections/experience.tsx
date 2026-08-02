import { SectionTitle } from "@/components/ui/section-title";
import { Timeline } from "@/components/shared/timeline";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container flex flex-col gap-16">
        <SectionTitle
          eyebrow="Experience"
          title="My journey so far"
          description="Internships, freelance work, competitions, and organizations that shaped how I build."
        />
        <Timeline items={experiences} />
      </div>
    </section>
  );
}
