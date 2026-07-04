import type { MetadataRoute } from "next";

// Add a new entry here whenever a page is added — see
// reference/CONTENT_STRATEGY.md § Grow Organically / § Page Hierarchy for
// what's planned next (payer pages, /faq, etc.).
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlasenrollment.com";
  const lastModified = new Date();

  const payerPages = [
    "bcbsm-credentialing",
    "medicare-provider-enrollment",
    "michigan-medicaid-champs",
    "priority-health-credentialing",
    "hap-provider-enrollment",
    "aetna-provider-enrollment",
    "optum-credentialing",
    "humana-provider-enrollment"
  ];

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    ...payerPages.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9
    }))
  ];
}
