import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Builds a fully-populated Next.js Metadata object (Open Graph, Twitter, canonical, robots)
 * so every page can opt into consistent, SEO-complete metadata with minimal boilerplate.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: resolvedTitle,
    description,
    keywords: [...siteConfig.keywords],
    authors: [siteConfig.author],
    creator: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: resolvedTitle,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      creator: "@nyverz",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
