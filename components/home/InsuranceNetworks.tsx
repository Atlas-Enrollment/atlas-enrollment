import Image from "next/image";
import Link from "next/link";
import { insuranceNetworks } from "@/content/home/insurance-networks";
import { payerLogoCategories, type PayerLogoEntry } from "@/content/home/payer-logos";

function PayerCard({ payer }: { payer: PayerLogoEntry }) {
  const card = (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-md border border-slate-200 bg-white p-4 text-center transition-colors hover:border-atlas-blue-200">
      {payer.logoSrc ? (
        <div className="relative h-10 w-full">
          <Image src={payer.logoSrc} alt={payer.alt} fill className="object-contain" sizes="160px" />
        </div>
      ) : (
        <div className="h-10" aria-hidden />
      )}
      <span className="text-sm text-slate-700">{payer.name}</span>
    </div>
  );

  if (payer.href) {
    return (
      <Link href={payer.href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}

function PayerCategory({ label, payers }: { label: string; payers: PayerLogoEntry[] }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {payers.map((payer) => (
          <PayerCard key={payer.name} payer={payer} />
        ))}
      </div>
    </div>
  );
}

export function InsuranceNetworks() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-slate-900">{insuranceNetworks.heading}</h2>
        <div className="mt-8 space-y-10">
          {payerLogoCategories.map((category) => (
            <PayerCategory key={category.label} label={category.label} payers={category.payers} />
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">{insuranceNetworks.footnote}</p>
        <p className="mt-4 text-xs text-slate-500">
          Logos are shown for identification purposes only. Network participation is subject to payer approval and
          panel availability.
        </p>
      </div>
    </section>
  );
}
