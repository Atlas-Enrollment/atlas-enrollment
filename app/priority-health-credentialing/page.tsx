import type { Metadata } from "next";
import { priorityHealth } from "@/content/payers/priority-health";
import { PayerPage } from "@/components/payer-page/PayerPage";

export const metadata: Metadata = {
  title: priorityHealth.metaTitle,
  description: priorityHealth.metaDescription,
  alternates: { canonical: `/${priorityHealth.slug}` },
  openGraph: {
    title: priorityHealth.metaTitle,
    description: priorityHealth.metaDescription,
    url: `https://atlasenrollment.com/${priorityHealth.slug}`
  },
  twitter: {
    card: "summary_large_image",
    title: priorityHealth.metaTitle,
    description: priorityHealth.metaDescription
  }
};

export default function PriorityHealthCredentialingPage() {
  return <PayerPage content={priorityHealth} />;
}
