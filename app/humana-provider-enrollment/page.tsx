import type { Metadata } from "next";
import { humana } from "@/content/payers/humana";
import { PayerPage } from "@/components/payer-page/PayerPage";

export const metadata: Metadata = {
  title: humana.metaTitle,
  description: humana.metaDescription,
  alternates: { canonical: `/${humana.slug}` },
  openGraph: {
    title: humana.metaTitle,
    description: humana.metaDescription,
    url: `https://atlasenrollment.com/${humana.slug}`
  },
  twitter: { card: "summary_large_image", title: humana.metaTitle, description: humana.metaDescription }
};

export default function HumanaProviderEnrollmentPage() {
  return <PayerPage content={humana} />;
}
