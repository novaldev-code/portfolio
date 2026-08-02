"use client";

import { motion } from "framer-motion";
import { Award, Medal, Trophy, Dumbbell } from "lucide-react";
import type { Achievement } from "@/types";

const ICON_MAP: Record<string, typeof Trophy> = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  dumbbell: Dumbbell,
};

const CATEGORY_LABEL: Record<Achievement["category"], string> = {
  competition: "Competition",
  hackathon: "Hackathon",
  award: "Award",
  sport: "Sport",
};

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const Icon = ICON_MAP[achievement.icon] ?? Trophy;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="glass shadow-premium flex flex-col gap-4 rounded-2xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
          <Icon className="size-5" />
        </div>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {CATEGORY_LABEL[achievement.category]}
        </span>
      </div>
      <div>
        <h3 className="text-base font-semibold leading-snug">
          {achievement.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {achievement.description}
        </p>
      </div>
      <span className="text-xs font-medium text-primary">{achievement.year}</span>
    </motion.div>
  );
}
