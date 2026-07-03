import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlasenrollment.com"),
  title: "Chiropractic Credentialing & Insurance Enrollment | Atlas Enrollment",
  description:
    "Atlas Enrollment manages insurance credentialing and provider enrollment for chiropractic practices — from paperwork to payer follow-up. Schedule a consultation.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Atlas Enrollment",
    url: "https://atlasenrollment.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiropractic Credentialing & Insurance Enrollment | Atlas Enrollment",
    description:
      "Atlas Enrollment manages insurance credentialing and provider enrollment for chiropractic practices — from paperwork to payer follow-up."
  }
};

// Organization + WebSite JSON-LD. LocalBusiness schema is deliberately NOT
// included yet — it wants a real street address (schema.org PostalAddress)
// and we don't have one to publish; fabricating one would be dishonest and
// could actively hurt rich-result validation. Add it once there's a real
// business address, using only the placeholder contact email that's already
// public on /contact (not inventing anything new).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atlas Enrollment",
  url: "https://atlasenrollment.com",
  logo: "https://atlasenrollment.com/atlas-enrollment-logo.png",
  areaServed: "Michigan",
  email: "hello@atlasenrollment.com"
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Atlas Enrollment",
  url: "https://atlasenrollment.com"
  // No SearchAction — the site has no internal search.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
