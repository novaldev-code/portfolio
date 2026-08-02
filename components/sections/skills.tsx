"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { SkillCard } from "@/components/shared/skill-card";
import { skillCategories } from "@/data/skills";
import { staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-container flex flex-col gap-14">
        <SectionTitle
          eyebrow="Skills"
          title="A well-rounded, modern toolkit"
          description="Technologies I reach for daily to design, build, and ship fullstack products."
        />

        <Tabs defaultValue={skillCategories[0].id} className="w-full items-center">
          <TabsList className="h-auto flex-wrap justify-center gap-1 bg-muted/40 p-1.5">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2 text-sm"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="w-full pt-10"
            >
              <Reveal className="mx-auto mb-8 max-w-xl text-center text-sm text-muted-foreground">
                {category.description}
              </Reveal>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer(0.08)}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
