import type { Profile, Statistic } from "@/types";

export const profile: Profile = {
  name: "Muh. Noval Thurfah",
  shortName: "Noval",
  roles: ["Fullstack Developer", "Software Engineer", "QA Engineer"],
  tagline:
    "I build fast, reliable, and beautifully-crafted software — from pixel to production.",
  bio: [
    "I'm a fullstack developer who enjoys turning complex problems into simple, elegant, and maintainable software. My journey started with curiosity about how websites work, and has grown into a genuine passion for building products end-to-end — from database schema to pixel-perfect interfaces.",
    "Over the years I've worked across the stack: building performant frontends with React and Next.js, designing robust APIs with Laravel and NestJS, and ensuring quality through structured QA practices. I care deeply about developer experience, clean architecture, and shipping things that feel great to use.",
    "Outside of code, I'm constantly learning — reading about system design, experimenting with new frameworks, and contributing to small open-source tools. I'm currently open to fullstack, software engineering, and QA engineering opportunities.",
  ],
  location: "Indonesia",
  email: "hello@nyverz.dev",
  phone: "+62 812-0000-0000",
  resumeUrl: "/cv/Muh-Noval-Thurfah-CV.pdf",
  avatar: "/images/profile/avatar.jpg",
  availableForWork: true,
};

export const statistics: Statistic[] = [
  { label: "Years Learning", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 30, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Certificates", value: 12, suffix: "+" },
];
