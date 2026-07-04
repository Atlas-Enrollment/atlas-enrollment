import type { Metadata } from "next";
import { aetna } from "@/content/payers/aetna";
import { PayerPage } from "@/components/payer-page/PayerPage";

export const metadata: Metadata = {
  title: aetna.metaTitle,
  description: aetna.metaDescription,
  alternates: { canonical: `/${aetna.slug}` },
  openGraph: {
    title: aetna.metaTitle,
    description: aetna.metaDescription,
    url: `https://atlasenrollment.com/${aetna.slug}`
  },
  twitter: { card: "summary_large_image", title: aetna.metaTitle, description: aetna.metaDescription }
};

export default function AetnaProviderEnrollmentPage() {
  return <PayerPage content={aetna} />;
}
