import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiLaravel,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiVercel,
  SiRailway,
  SiNeon,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, IconType> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  laravel: SiLaravel,
  nestjs: SiNestjs,
  express: SiExpress,
  django: SiDjango,
  prisma: SiPrisma,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  vercel: SiVercel,
  railway: SiRailway,
  neon: SiNeon,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  postman: SiPostman,
};

interface TechIconProps {
  name: string;
  className?: string;
}

/** Resolves a skill icon key (e.g. "nextjs") to its brand icon component. */
export function TechIcon({ name, className }: TechIconProps) {
  const Icon = ICON_MAP[name] ?? Code2;
  return <Icon className={cn("size-5", className)} aria-hidden />;
}
