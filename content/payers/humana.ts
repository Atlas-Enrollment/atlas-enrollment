import type { PayerPageContent } from "./types";

export const humana: PayerPageContent = {
  slug: "humana-provider-enrollment",
  payerName: "Humana",
  payerShortName: "Humana",
  metaTitle: "Humana Provider Enrollment & Credentialing | Atlas Enrollment",
  metaDescription:
    "Atlas Enrollment manages Humana credentialing and provider enrollment for Michigan chiropractic practices, including Humana's Medicare Advantage network.",
  heroExplanation:
    "Humana's chiropractic network is closely tied to its Medicare Advantage plans — a large share of the patients a practice sees through Humana are enrolled through a Medicare Advantage product rather than standalone commercial coverage. That distinction matters for which patients you'll actually see once credentialed, which is why we walk through it directly with every practice we help enroll with Humana.",
  whoThisIsForIntro: "Humana credentialing comes up in the same situations as most commercial payers, with one addition:",
  whoThisIsFor: [
    "Chiropractors opening a new practice who need Humana in-network status from day one",
    "Existing practices adding a new associate or provider who isn't yet credentialed with Humana",
    "Practices changing ownership or tax ID — a change that typically triggers re-credentialing, not just an update",
    "Practices serving a significant Medicare-age patient population who want access to Humana's Medicare Advantage network specifically"
  ],
  enrollmentProcess: [
    "Humana's credentialing process is similar in shape to other commercial payers — application, review, and an effective date — but a large share of Humana's chiropractic network activity comes through Medicare Advantage plans rather than standalone commercial coverage.",
    "Applications are reviewed against submitted practice and provider documentation, similar to other commercial payers.",
    "Review timelines are set by Humana, not Atlas Enrollment.",
    "Once approved, Humana issues an effective date; we recommend confirming it in writing before billing as in-network.",
    "For practices already enrolled with traditional Medicare, Humana's Medicare Advantage credentialing generally references that existing Medicare enrollment during review — which is one more reason to coordinate the two rather than pursue them as unrelated applications."
  ],
  documentationIntro: "Humana's application generally draws on the same core documentation as other commercial payers:",
  typicalDocumentation: [
    "Active NPI",
    "A completed CAQH profile",
    "Current state chiropractic license",
    "Proof of malpractice insurance",
    "A completed W-9",
    "Practice information: tax ID, address, and billing details"
  ],
  delayReasonsIntro: "Most delays we see with Humana come down to a handful of avoidable issues:",
  delayReasons: [
    "Incomplete or outdated CAQH profile information",
    "Expired license or malpractice documentation",
    "Incomplete practice information on the initial submission",
    "Requests for additional information that go unanswered"
  ],
  helpIntro:
    "This is the part of the process Atlas Enrollment actually controls — a complete, accurate Humana application the first time:",
  howAtlasHelps: [
    "We collect and organize every document your Humana application needs, once.",
    "We prepare and submit the application on your behalf, checked against the documentation on file before it goes out.",
    "We track the application's status and follow up with Humana directly.",
    "If Humana requests more information or rejects part of an application, we handle the resubmission.",
    "Every Humana application is tracked inside Atlas OS, alongside your practice's Medicare and other payer enrollments."
  ],
  whatWeNeedIntro: "To begin a Humana enrollment, we'll typically ask for:",
  whatWeNeed: [
    "Basic practice information",
    "Provider information",
    "Current license and malpractice insurance",
    "W-9",
    "NPI",
    "CAQH access (if applicable)"
  ],
  whatWeNeedClosing: "Once we've collected your documentation, we handle the submission and payer follow-up.",
  relatedServices: [
    { label: "Medicare provider enrollment", href: "/medicare-provider-enrollment" },
    { label: "BCBSM credentialing", href: "/bcbsm-credentialing" },
    { label: "Multi-provider enrollment for group practices" },
    { label: "Re-credentialing and maintenance after you're already in-network" }
  ],
  closingParagraph:
    "Because so much of Humana's chiropractic network activity is tied to Medicare Advantage, we often coordinate Humana enrollment alongside a practice's traditional Medicare enrollment rather than treating them as unrelated.",
  finalCtaHeading: "Ready to Get Credentialed with Humana?",
  finalCtaSubheading:
    "Schedule a consultation to review your current Humana enrollment status, identify any missing documentation, and build an enrollment plan for your practice."
};
