import type { Metadata } from "next";
import { hap } from "@/content/payers/hap";
import { PayerPage } from "@/components/payer-page/PayerPage";

export const metadata: Metadata = {
  title: hap.metaTitle,
  description: hap.metaDescription,
  alternates: { canonical: `/${hap.slug}` },
  openGraph: {
    title: hap.metaTitle,
    description: hap.metaDescription,
    url: `https://atlasenrollment.com/${hap.slug}`
  },
  twitter: { card: "summary_large_image", title: hap.metaTitle, description: hap.metaDescription }
};

export default function HapProviderEnrollmentPage() {
  return <PayerPage content={hap} />;
}
