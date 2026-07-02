import { finalCta } from "@/content/home/final-cta";
import { CtaButton } from "@/components/CtaButton";

export function FinalCta() {
  return (
    <section className="bg-slate-900 px-6 py-16 text-center">
      <h2 className="text-2xl font-semibold text-white">{finalCta.heading}</h2>
      <div className="mt-6">
        <CtaButton label={finalCta.cta} variant="light" />
      </div>
    </section>
  );
}
