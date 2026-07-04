import type { Metadata } from "next";
import { medicare } from "@/content/payers/medicare";
import { PayerPage } from "@/components/payer-page/PayerPage";

export const metadata: Metadata = {
  title: medicare.metaTitle,
  description: medicare.metaDescription,
  alternates: { canonical: `/${medicare.slug}` },
  openGraph: {
    title: medicare.metaTitle,
    description: medicare.metaDescription,
    url: `https://atlasenrollment.com/${medicare.slug}`
  },
  twitter: { card: "summary_large_image", title: medicare.metaTitle, description: medicare.metaDescription }
};

export default function MedicareProviderEnrollmentPage() {
  return <PayerPage content={medicare} />;
}
