import type { Metadata } from "next";
import { optumUhc } from "@/content/payers/optum-uhc";
import { PayerPage } from "@/components/payer-page/PayerPage";

export const metadata: Metadata = {
  title: optumUhc.metaTitle,
  description: optumUhc.metaDescription,
  alternates: { canonical: `/${optumUhc.slug}` },
  openGraph: {
    title: optumUhc.metaTitle,
    description: optumUhc.metaDescription,
    url: `https://atlasenrollment.com/${optumUhc.slug}`
  },
  twitter: { card: "summary_large_image", title: optumUhc.metaTitle, description: optumUhc.metaDescription }
};

export default function OptumCredentialingPage() {
  return <PayerPage content={optumUhc} />;
}
