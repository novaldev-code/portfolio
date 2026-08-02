import { GraduationCap, MapPin, Sparkles, Target } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { NumberCounter } from "@/components/ui/number-counter";
import { fadeLeft, fadeRight, staggerContainer } from "@/lib/motion";
import { profile, statistics } from "@/data/profile";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Sc. in Informatics Engineering, focused on software engineering.",
  },
  {
    icon: Target,
    title: "Focus",
    description: "Fullstack development, clean architecture, and quality engineering.",
  },
  {
    icon: MapPin,
    title: "Based in",
    description: profile.location,
  },
  {
    icon: Sparkles,
    title: "Approach",
    description: "Ship fast without sacrificing craft, tests, or maintainability.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container flex flex-col gap-16">
        <SectionTitle
          eyebrow="About Me"
          title="Turning ideas into reliable, elegant software"
          description="A quick look at my journey, how I work, and the numbers behind the craft."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variants={fadeRight} className="flex flex-col gap-5">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                variants={fadeLeft}
                delay={index * 0.08}
                className="glass shadow-premium flex flex-col gap-3 rounded-2xl p-5"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          variants={staggerContainer(0.1)}
          className="grid grid-cols-2 gap-6 rounded-3xl border border-border/60 bg-muted/20 p-8 sm:grid-cols-4"
        >
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-gradient text-3xl font-bold sm:text-4xl">
                <NumberCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
