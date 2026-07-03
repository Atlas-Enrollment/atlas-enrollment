import Link from "next/link";
import type { PayerPageContent } from "@/content/payers/types";
import { CtaButton } from "@/components/CtaButton";

// Reference implementation for every payer landing page (SEO Phase 2 —
// package-docs/reference/SEO_STRATEGY.md § Phase 2). BCBSM
// (content/payers/bcbsm.ts) is the template this was built against; every
// other payer page should render through this same component so structure,
// voice, and CTA placement stay consistent across all of them.
//
// Service JSON-LD is generated here, once, so every payer page inherits
// consistent structured data automatically — no per-page schema to
// hand-maintain. Kept in sync with visible content by construction: it's
// built directly from the same PayerPageContent fields the page renders.
function payerServiceJsonLd(content: PayerPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${content.payerShortName} Credentialing & Provider Enrollment`,
    name: `${content.payerShortName} Credentialing & Provider Enrollment`,
    description: content.metaDescription,
    provider: { "@type": "Organization", name: "Atlas Enrollment", url: "https://atlasenrollment.com" },
    areaServed: "Michigan",
    url: `https://atlasenrollment.com/${content.slug}`
  };
}

export function PayerPage({ content }: { content: PayerPageContent }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(payerServiceJsonLd(content)) }}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {content.payerShortName} Credentialing &amp; Provider Enrollment
        </h1>
        <p className="mt-6 text-lg text-slate-600">{content.heroExplanation}</p>
        <div className="mt-8">
          <CtaButton label="Schedule a Consultation" />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">Who This Is For</h2>
          <p className="mt-4 text-slate-700">{content.whoThisIsForIntro}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.whoThisIsFor.map((item) => (
              <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">Enrollment Process</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            {content.enrollmentProcess.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">Typical Documentation</h2>
          <p className="mt-4 text-slate-700">{content.documentationIntro}</p>
          <ul className="mt-6 space-y-3">
            {content.typicalDocumentation.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span aria-hidden className="text-atlas-blue-600 font-semibold">
                  &mdash;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">Common Reasons Applications Are Delayed</h2>
          <p className="mt-4 text-slate-700">{content.delayReasonsIntro}</p>
          <ul className="mt-6 space-y-3">
            {content.delayReasons.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span aria-hidden className="text-slate-400">
                  &mdash;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">How Atlas Helps</h2>
          <p className="mt-4 text-slate-700">{content.helpIntro}</p>
          <ul className="mt-6 space-y-3">
            {content.howAtlasHelps.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span aria-hidden className="font-semibold text-atlas-blue-600">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">Related Services</h2>
          <p className="mt-4 text-slate-700">{content.closingParagraph}</p>
          {/* Plain text for now — becomes real links once the sibling payer
              pages exist, per content/payers/types.ts's relatedServices doc. */}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.relatedServices.map((item) => (
              <li key={item} className="text-slate-700">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Have a different question?{" "}
            <Link href="/contact" className="text-atlas-blue-700 hover:text-atlas-blue-900 underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">What We&apos;ll Need From You</h2>
          <p className="mt-4 text-slate-700">{content.whatWeNeedIntro}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.whatWeNeed.map((item) => (
              <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate-700">{content.whatWeNeedClosing}</p>
        </div>
      </section>

      <section className="bg-atlas-blue-900 px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-white">{content.finalCtaHeading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-atlas-blue-100">{content.finalCtaSubheading}</p>
        <div className="mt-6">
          <CtaButton label="Schedule a Consultation" variant="light" />
        </div>
      </section>
    </>
  );
}
