import type { MetadataRoute } from "next";

// Add a new entry here whenever a page is added — see
// reference/CONTENT_STRATEGY.md § Grow Organically / § Page Hierarchy for
// what's planned next (payer pages, /faq, etc.).
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlasenrollment.com";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/bcbsm-credentialing`, lastModified, changeFrequency: "monthly", priority: 0.9 }
  ];
}
