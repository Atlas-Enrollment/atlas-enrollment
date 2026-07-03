import Link from "next/link";
import { insuranceNetworks } from "@/content/home/insurance-networks";

// Grows as SEO Phase 2 payer pages ship (package-docs/reference/SEO_STRATEGY.md
// § Phase 2) — only list a payer here once its landing page actually exists,
// so this never links to a 404.
const PAYER_PAGE_SLUGS: Record<string, string> = {
  BCBSM: "bcbsm-credentialing"
};

function PayerGroup({ label, payers }: { label: string; payers: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <ul className="mt-2 space-y-1 text-slate-700">
        {payers.map((payer) => {
          const slug = PAYER_PAGE_SLUGS[payer];
          return (
            <li key={payer}>
              {slug ? (
                <Link href={`/${slug}`} className="text-atlas-blue-700 hover:text-atlas-blue-900 underline">
                  {payer}
                </Link>
              ) : (
                payer
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function InsuranceNetworks() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900">{insuranceNetworks.heading}</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          <PayerGroup label="Commercial" payers={insuranceNetworks.commercial} />
          <PayerGroup label="Medicare" payers={insuranceNetworks.medicare} />
          <PayerGroup label={insuranceNetworks.medicaid.label} payers={insuranceNetworks.medicaid.plans} />
        </div>
        <p className="mt-6 text-sm text-slate-500">{insuranceNetworks.footnote}</p>
      </div>
    </section>
  );
}
