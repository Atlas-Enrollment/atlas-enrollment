import type { Metadata } from "next";
import { bcbsm } from "@/content/payers/bcbsm";
import { PayerPage } from "@/components/payer-page/PayerPage";

export const metadata: Metadata = {
  title: bcbsm.metaTitle,
  description: bcbsm.metaDescription,
  alternates: { canonical: `/${bcbsm.slug}` },
  openGraph: {
    title: bcbsm.metaTitle,
    description: bcbsm.metaDescription,
    url: `https://atlasenrollment.com/${bcbsm.slug}`
  },
  twitter: { card: "summary_large_image", title: bcbsm.metaTitle, description: bcbsm.metaDescription }
};

export default function BcbsmCredentialingPage() {
  return <PayerPage content={bcbsm} />;
}
