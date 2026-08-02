import { siteConfig } from "@/constants/site";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";

/** Injects Person + Website JSON-LD structured data for rich search results. */
export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.avatar}`,
    jobTitle: profile.roles,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: profile.location,
    },
    email: profile.email,
    sameAs: socialLinks
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
