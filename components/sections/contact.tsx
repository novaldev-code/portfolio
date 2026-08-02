import { Mail, MapPin, Phone } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { fadeRight } from "@/lib/motion";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container flex flex-col gap-16">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something great together"
          description="Have a project, a role, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal variants={fadeRight} className="flex flex-col gap-6">
            <div className="glass shadow-premium flex flex-col gap-5 rounded-3xl p-6 sm:p-8">
              <ContactItem icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactItem icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <ContactItem icon={MapPin} label="Location" value={profile.location} />
            </div>

            <div className="glass shadow-premium flex flex-col gap-4 rounded-3xl p-6 sm:p-8">
              <h3 className="text-sm font-semibold text-foreground">
                Find me elsewhere
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <social.icon className="size-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass shadow-premium overflow-hidden rounded-3xl">
              <iframe
                title="Location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(profile.location)}&z=6&output=embed`}
                className="h-56 w-full grayscale invert-0 dark:invert dark:contrast-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}
