import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "exp-education-university",
    type: "education",
    title: "B.Sc. in Informatics Engineering",
    organization: "University",
    location: "Indonesia",
    startDate: "2022",
    endDate: "Present",
    description:
      "Focused on software engineering, database systems, and web technologies while actively building side projects.",
    highlights: [
      "Active member of the campus programming community",
      "Consistently ranked among top students in software engineering courses",
    ],
  },
  {
    id: "exp-internship-fullstack",
    type: "internship",
    title: "Fullstack Developer Intern",
    organization: "Tech Startup",
    location: "Remote",
    startDate: "Jun 2024",
    endDate: "Dec 2024",
    description:
      "Built and maintained internal tools using Next.js and Laravel, collaborating closely with senior engineers on production features.",
    highlights: [
      "Shipped 10+ features to production with zero critical incidents",
      "Reduced API response time by 35% through query optimization",
      "Wrote integration tests that increased coverage from 40% to 75%",
    ],
  },
  {
    id: "exp-freelance-fullstack",
    type: "freelance",
    title: "Freelance Fullstack Developer",
    organization: "Self-employed",
    location: "Remote",
    startDate: "2023",
    endDate: "Present",
    description:
      "Delivered custom web applications for small businesses and startups, from landing pages to full internal systems.",
    highlights: [
      "Completed 15+ freelance projects with a 5-star average client rating",
      "Built long-term relationships resulting in repeat contracts",
    ],
  },
  {
    id: "exp-competition-hackathon",
    type: "competition",
    title: "Finalist, National Web Development Hackathon",
    organization: "Hackathon Committee",
    location: "Indonesia",
    startDate: "2024",
    endDate: "2024",
    description:
      "Led a team of 4 to build a disaster-response coordination platform within 48 hours.",
    highlights: [
      "Placed in the top 5 out of 120+ teams",
      "Owned the fullstack architecture and live demo presentation",
    ],
  },
  {
    id: "exp-organization-lead",
    type: "organization",
    title: "Head of Software Development Division",
    organization: "Campus IT Student Organization",
    location: "Indonesia",
    startDate: "2023",
    endDate: "2024",
    description:
      "Led a team of student developers building internal tools and mentoring junior members on web development.",
    highlights: [
      "Mentored 10+ junior members in Git, React, and clean code practices",
      "Delivered 3 internal tools adopted campus-wide",
    ],
  },
];
