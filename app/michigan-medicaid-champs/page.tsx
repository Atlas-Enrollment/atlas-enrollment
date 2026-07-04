import type { Metadata } from "next";
import { michiganMedicaid } from "@/content/payers/michigan-medicaid";
import { PayerPage } from "@/components/payer-page/PayerPage";

export const metadata: Metadata = {
  title: michiganMedicaid.metaTitle,
  description: michiganMedicaid.metaDescription,
  alternates: { canonical: `/${michiganMedicaid.slug}` },
  openGraph: {
    title: michiganMedicaid.metaTitle,
    description: michiganMedicaid.metaDescription,
    url: `https://atlasenrollment.com/${michiganMedicaid.slug}`
  },
  twitter: {
    card: "summary_large_image",
    title: michiganMedicaid.metaTitle,
    description: michiganMedicaid.metaDescription
  }
};

export default function MichiganMedicaidChampsPage() {
  return <PayerPage content={michiganMedicaid} />;
}
