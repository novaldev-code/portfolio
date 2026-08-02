import type { ComponentType, SVGProps } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface Profile {
  name: string;
  shortName: string;
  roles: string[];
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  avatar: string;
  availableForWork: boolean;
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
}

export type SkillCategoryId =
  "frontend" | "backend" | "database" | "cloud" | "tools";

export interface Skill {
  name: string;
  level: number; // 0 - 100
  icon: string; // key used to resolve an icon component
}

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  description: string;
  skills: Skill[];
}

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  category: string;
  featured: boolean;
  year: string;
  role: string;
  links: ProjectLink;
  features: string[];
  architecture: string;
  challenges: string[];
  lessons: string[];
}

export type ExperienceType =
  | "internship"
  | "freelance"
  | "competition"
  | "organization"
  | "education"
  | "work";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
}

export interface Certificate {
  id: string;
  title: string;
  provider: string;
  year: string;
  image: string;
  credentialUrl?: string;
}

export type AchievementCategory =
  "competition" | "hackathon" | "award" | "sport";

export interface Achievement {
  id: string;
  title: string;
  category: AchievementCategory;
  description: string;
  year: string;
  icon: string;
}
