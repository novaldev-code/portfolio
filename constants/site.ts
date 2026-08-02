export const siteConfig = {
  name: "NyverZ",
  fullName: "Muh. Noval Thurfah",
  title: "Muh. Noval Thurfah — Fullstack Developer & Software Engineer",
  description:
    "Portfolio of Muh. Noval Thurfah, a Fullstack Developer, Software Engineer, and QA Engineer crafting fast, elegant, and reliable digital products.",
  url: "https://nyverz.dev",
  ogImage: "/og-image.png",
  keywords: [
    "Muh. Noval Thurfah",
    "NyverZ",
    "Fullstack Developer",
    "Software Engineer",
    "QA Engineer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Web Developer Indonesia",
  ],
  author: {
    name: "Muh. Noval Thurfah",
    url: "https://nyverz.dev",
  },
  locale: "en_US",
  themeColor: "#020617",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;
