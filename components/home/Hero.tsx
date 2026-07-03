import { hero } from "@/content/home/hero";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{hero.headline}</h1>
      <p className="mt-6 text-lg text-slate-600">{hero.subheadline}</p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <CtaButton label={hero.primaryCta} />
        <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-atlas-blue-700">
          {hero.secondaryCta}
        </Link>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-6">
        <p className="text-sm font-medium text-slate-500">{hero.credibilityStrip.label}</p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-atlas-blue-700">
          {hero.credibilityStrip.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
