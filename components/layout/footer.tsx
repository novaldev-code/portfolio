import Link from "next/link";
import { siteConfig, NAV_ITEMS } from "@/constants/site";
import { socialLinks } from "@/data/socials";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60">
      <div className="section-container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <Link href="#home" className="w-fit text-xl font-bold tracking-tight">
              <span className="text-gradient">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {profile.tagline}
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-foreground">
                Navigation
              </span>
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-foreground">More</span>
              {NAV_ITEMS.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-foreground">
                Get in touch
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {profile.email}
              </a>
              <span className="text-sm text-muted-foreground">
                {profile.location}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
