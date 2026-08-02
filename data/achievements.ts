import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "ach-hackathon-finalist",
    title: "Top 5 Finalist — National Web Dev Hackathon",
    category: "hackathon",
    description:
      "Led a 4-person team to build a disaster-response platform in 48 hours, placing top 5 out of 120+ teams.",
    year: "2024",
    icon: "trophy",
  },
  {
    id: "ach-competitive-programming",
    title: "2nd Place — Inter-Campus Programming Contest",
    category: "competition",
    description:
      "Solved algorithmic challenges under time pressure alongside a team of 3 competitive programmers.",
    year: "2023",
    icon: "medal",
  },
  {
    id: "ach-best-capstone",
    title: "Best Capstone Project Award",
    category: "award",
    description:
      "Recognized for building the most technically impactful capstone project in the cohort.",
    year: "2024",
    icon: "award",
  },
  {
    id: "ach-futsal",
    title: "Campus Futsal Tournament — Champion",
    category: "sport",
    description:
      "Captained the department futsal team to a tournament win against 12 competing teams.",
    year: "2022",
    icon: "trophy",
  },
];
