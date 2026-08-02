import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Crafting fast, accessible, and delightful user interfaces.",
    skills: [
      { name: "Next.js", level: 92, icon: "nextjs" },
      { name: "React", level: 95, icon: "react" },
      { name: "TypeScript", level: 90, icon: "typescript" },
      { name: "Tailwind CSS", level: 93, icon: "tailwind" },
      { name: "Redux", level: 80, icon: "redux" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Designing robust APIs and scalable server-side systems.",
    skills: [
      { name: "Laravel", level: 88, icon: "laravel" },
      { name: "NestJS", level: 82, icon: "nestjs" },
      { name: "Express", level: 85, icon: "express" },
      { name: "Django REST", level: 75, icon: "django" },
      { name: "Prisma", level: 85, icon: "prisma" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Modeling data that stays consistent, fast, and reliable.",
    skills: [
      { name: "PostgreSQL", level: 87, icon: "postgresql" },
      { name: "MySQL", level: 88, icon: "mysql" },
      { name: "MongoDB", level: 78, icon: "mongodb" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Shipping and scaling applications in the cloud.",
    skills: [
      { name: "Vercel", level: 90, icon: "vercel" },
      { name: "Railway", level: 82, icon: "railway" },
      { name: "Neon", level: 80, icon: "neon" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "The everyday tools that power a smooth workflow.",
    skills: [
      { name: "Docker", level: 78, icon: "docker" },
      { name: "Git", level: 92, icon: "git" },
      { name: "GitHub", level: 92, icon: "github" },
      { name: "Figma", level: 75, icon: "figma" },
      { name: "Postman", level: 88, icon: "postman" },
    ],
  },
];
