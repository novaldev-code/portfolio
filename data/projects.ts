import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "commerceos",
    title: "CommerceOS",
    description:
      "A headless e-commerce platform with real-time inventory, checkout, and an admin dashboard.",
    longDescription:
      "CommerceOS is a full-featured, multi-tenant e-commerce platform built to help small businesses launch a storefront in minutes. It includes real-time inventory synchronization, a customizable storefront, Stripe-powered checkout, and an analytics dashboard for store owners.",
    image: "/images/projects/commerceos/cover.jpg",
    gallery: [
      "/images/projects/commerceos/1.jpg",
      "/images/projects/commerceos/2.jpg",
      "/images/projects/commerceos/3.jpg",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Fullstack",
    featured: true,
    year: "2025",
    role: "Fullstack Developer",
    links: {
      github: "https://github.com/nyverz/commerceos",
      demo: "https://commerceos.nyverz.dev",
    },
    features: [
      "Multi-tenant storefronts with custom domains",
      "Real-time inventory sync across warehouses",
      "Stripe Checkout & subscription billing",
      "Analytics dashboard with revenue insights",
    ],
    architecture:
      "Monorepo with a Next.js App Router frontend, a NestJS API layer, and PostgreSQL via Prisma. Background jobs handled with a queue worker for inventory sync and email notifications.",
    challenges: [
      "Designing a data model that supports multi-tenancy without sacrificing query performance.",
      "Keeping inventory consistent across concurrent orders using optimistic locking.",
    ],
    lessons: [
      "Learned to design idempotent APIs for safer retries on flaky networks.",
      "Improved understanding of database indexing strategies for multi-tenant queries.",
    ],
  },
  {
    slug: "devboard",
    title: "DevBoard",
    description:
      "A collaborative project management tool with Kanban boards, real-time updates, and analytics.",
    longDescription:
      "DevBoard is a Linear-inspired project management tool for engineering teams. It supports Kanban and list views, keyboard-first navigation, real-time collaboration, and a command menu for power users.",
    image: "/images/projects/devboard/cover.jpg",
    gallery: [
      "/images/projects/devboard/1.jpg",
      "/images/projects/devboard/2.jpg",
    ],
    tags: ["React", "NestJS", "PostgreSQL", "WebSocket", "Redux"],
    category: "Fullstack",
    featured: true,
    year: "2024",
    role: "Fullstack Developer",
    links: {
      github: "https://github.com/nyverz/devboard",
      demo: "https://devboard.nyverz.dev",
    },
    features: [
      "Realtime Kanban board with drag & drop",
      "Command menu (Cmd+K) for fast navigation",
      "Team activity feed and notifications",
      "Role-based access control",
    ],
    architecture:
      "React SPA with Redux Toolkit for state, a NestJS backend exposing REST + WebSocket gateways, and PostgreSQL for persistence.",
    challenges: [
      "Synchronizing optimistic UI updates with WebSocket events without state drift.",
      "Building a performant drag-and-drop board with hundreds of cards.",
    ],
    lessons: [
      "Gained deeper experience with WebSocket architecture and reconnection strategies.",
      "Learned to profile and optimize React re-renders in a large state tree.",
    ],
  },
  {
    slug: "qaflow",
    title: "QAFlow",
    description:
      "A test-case management and automated regression reporting tool for QA teams.",
    longDescription:
      "QAFlow helps QA engineers organize test cases, track regression runs, and generate shareable reports. It integrates with CI pipelines to automatically ingest test results from Playwright and Jest.",
    image: "/images/projects/qaflow/cover.jpg",
    gallery: [
      "/images/projects/qaflow/1.jpg",
      "/images/projects/qaflow/2.jpg",
    ],
    tags: ["Next.js", "Django REST", "PostgreSQL", "Docker"],
    category: "QA Tooling",
    featured: true,
    year: "2024",
    role: "Software Engineer / QA Engineer",
    links: {
      github: "https://github.com/nyverz/qaflow",
    },
    features: [
      "Test case repository with tagging and versioning",
      "CI integration for automated report ingestion",
      "Regression trend dashboards",
      "Shareable public report links",
    ],
    architecture:
      "Next.js frontend with a Django REST Framework API, containerized with Docker for consistent CI/local environments.",
    challenges: [
      "Parsing heterogeneous test report formats (JUnit XML, JSON) into a unified schema.",
      "Designing dashboards that stay meaningful across teams with different testing practices.",
    ],
    lessons: [
      "Strengthened understanding of test reporting standards and CI integration patterns.",
      "Learned to balance flexibility and simplicity when designing for multiple team workflows.",
    ],
  },
  {
    slug: "portfolio-v3",
    title: "NyverZ Portfolio",
    description:
      "This portfolio — a performant, animated, and accessible personal site built with Next.js 16.",
    longDescription:
      "A from-scratch personal portfolio designed to feel like the product pages of Vercel, Linear, and Stripe — dark mode first, glassmorphic, and built with performance and accessibility as first-class citizens.",
    image: "/images/projects/portfolio/cover.jpg",
    gallery: ["/images/projects/portfolio/1.jpg"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    featured: false,
    year: "2026",
    role: "Frontend Developer",
    links: {
      github: "https://github.com/nyverz/portfolio",
      demo: "https://nyverz.dev",
    },
    features: [
      "Fully responsive, dark-mode-first design system",
      "Smooth scroll, scroll-reveal, and micro-interactions",
      "Fully typed content layer with zero hardcoded data",
      "SEO-complete with structured data and sitemap",
    ],
    architecture:
      "Next.js App Router with server components by default, client components isolated to interactive islands, and a typed data layer under /data and /types.",
    challenges: [
      "Balancing rich motion design with excellent Core Web Vitals.",
      "Keeping a large component library consistent and reusable.",
    ],
    lessons: [
      "Refined a system for composing Framer Motion variants across sections.",
      "Practiced disciplined content modeling to avoid hardcoded UI copy.",
    ],
  },
];
