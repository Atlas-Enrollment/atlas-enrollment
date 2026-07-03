// Shared shape for every payer landing page (SEO Phase 2 —
// package-docs/reference/SEO_STRATEGY.md § Phase 2). BCBSM is the reference
// implementation; every other payer page should conform to this shape so
// components/payer-page/PayerPage.tsx can render all of them consistently.
//
// Content guardrails (apply to every payer page, not just BCBSM):
// - 800-1200 words per page. Substantive, not padded, not thin/duplicate.
// - Never assert payer-specific procedural claims as fact ("BCBSM requires...").
//   Use hedged language ("commonly requested", "applications are generally
//   asked to include...") since payer requirements can change and vary.
// - Focus on how Atlas manages the process, not on recreating the payer's
//   own provider manual.
export interface PayerPageContent {
  slug: string;
  payerName: string;
  /** Short form used in the H1 — e.g. "BCBSM", "Aetna" */
  payerShortName: string;
  metaTitle: string;
  metaDescription: string;
  heroExplanation: string;
  whoThisIsForIntro: string;
  whoThisIsFor: string[];
  enrollmentProcess: string[];
  documentationIntro: string;
  typicalDocumentation: string[];
  delayReasonsIntro: string;
  delayReasons: string[];
  helpIntro: string;
  howAtlasHelps: string[];
  /** Plain text for now — becomes real links once the sibling pages exist. */
  relatedServices: string[];
  closingParagraph: string;
  finalCtaHeading: string;
  finalCtaSubheading: string;
}
