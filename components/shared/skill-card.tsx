"use client";

import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icon";
import type { Skill } from "@/types";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass shadow-premium group relative flex flex-col gap-4 rounded-2xl p-5 transition-colors hover:border-primary/30"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/15">
          <TechIcon name={skill.icon} className="size-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">
            {skill.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {skill.level}% proficiency
          </span>
        </div>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="h-full rounded-full bg-gradient-brand"
        />
      </div>
    </motion.div>
  );
}
