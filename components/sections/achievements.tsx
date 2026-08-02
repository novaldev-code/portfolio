import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { AchievementCard } from "@/components/shared/achievement-card";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="section-container flex flex-col gap-14">
        <SectionTitle
          eyebrow="Achievements"
          title="Milestones worth celebrating"
          description="Competitions, hackathons, awards, and the occasional trophy on the field."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.id} delay={index * 0.06}>
              <AchievementCard achievement={achievement} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
