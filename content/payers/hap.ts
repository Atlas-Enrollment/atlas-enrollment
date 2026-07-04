import type { PayerPageContent } from "./types";

export const hap: PayerPageContent = {
  slug: "hap-provider-enrollment",
  payerName: "HAP / ASR Health Benefits",
  payerShortName: "HAP / ASR",
  metaTitle: "HAP & ASR Provider Enrollment | Atlas Enrollment",
  metaDescription:
    "Atlas Enrollment manages HAP (Health Alliance Plan) and ASR Health Benefits provider enrollment for Michigan chiropractic practices — two separate applications, tracked as one coordinated process.",
  heroExplanation:
    "HAP (Health Alliance Plan) and ASR Health Benefits are often grouped together, but they're not quite the same thing — HAP is Henry Ford Health's HMO, while ASR is a separate third-party administrator that manages self-funded employer health plans, frequently alongside HAP. We manage credentialing for both, since many Michigan practices need to be recognized under each to see the full range of patients covered by either.",
  whoThisIsForIntro: "HAP and ASR credentialing come up in the same situations as most Michigan commercial payers:",
  whoThisIsFor: [
    "Chiropractors opening a new practice who need HAP and/or ASR in-network status from day one",
    "Existing practices adding a new associate or provider who isn't yet credentialed with either",
    "Practices changing ownership or tax ID — a change that typically triggers re-credentialing with both",
    "Practices that have HAP credentialing already but haven't separately confirmed ASR panel status, or vice versa"
  ],
  enrollmentProcess: [
    "HAP and ASR maintain separate provider enrollment processes, even though they're commonly grouped together in conversation — credentialing with one does not automatically enroll a provider with the other.",
    "Applications for both are reviewed against submitted practice and provider documentation, in a shape similar to other commercial payers.",
    "Review timelines are set by HAP and ASR respectively, not by Atlas Enrollment. We track both processes in parallel rather than waiting for one to finish before starting the other.",
    "Once approved, each issues its own effective date — a provider's HAP effective date and ASR effective date are not guaranteed to land on the same day.",
    "One additional wrinkle: ASR is a third-party administrator, not an insurer — it doesn't issue its own member ID cards the way HAP does. Patients covered under an ASR-administered employer plan are often unaware their coverage runs through ASR at all, which can make eligibility checks confusing on the front desk side if the practice doesn't already know to look for it."
  ],
  documentationIntro: "HAP and ASR applications generally draw on the same core documentation:",
  typicalDocumentation: [
    "Active NPI",
    "A completed CAQH profile",
    "Current state chiropractic license",
    "Proof of malpractice insurance",
    "A completed W-9",
    "Practice information: tax ID, address, and billing details"
  ],
  delayReasonsIntro: "The most common source of delay with HAP and ASR is treating them as a single application:",
  delayReasons: [
    "Assuming HAP credentialing automatically covers ASR panel status, or vice versa",
    "Incomplete or outdated CAQH profile information",
    "Expired license or malpractice documentation",
    "Requests for additional information from either payer that go unanswered"
  ],
  helpIntro:
    "Because HAP and ASR are processed separately, keeping both moving in parallel is where Atlas Enrollment adds the most value:",
  howAtlasHelps: [
    "We prepare and track HAP and ASR applications separately, so one being delayed doesn't stall the other.",
    "We collect and organize every document both applications need — once, not re-requested separately for each.",
    "We follow up with HAP and ASR independently, so neither one is left waiting on a call that never happens.",
    "If either payer requests more information or rejects part of an application, we handle the resubmission.",
    "Both HAP and ASR enrollment status are tracked inside Atlas OS, so it's clear which one is active and which is still pending."
  ],
  whatWeNeedIntro: "To begin HAP and ASR enrollment, we'll typically ask for:",
  whatWeNeed: [
    "Basic practice information",
    "Provider information",
    "Current license and malpractice insurance",
    "W-9",
    "NPI",
    "CAQH access (if applicable)"
  ],
  whatWeNeedClosing: "Once we've collected your documentation, we handle both submissions and the payer follow-up.",
  relatedServices: [
    { label: "BCBSM credentialing", href: "/bcbsm-credentialing" },
    { label: "Priority Health credentialing", href: "/priority-health-credentialing" },
    { label: "Medicare provider enrollment", href: "/medicare-provider-enrollment" },
    { label: "Re-credentialing and maintenance after you're already in-network" }
  ],
  closingParagraph:
    "Because HAP and ASR are frequently bundled together in conversation but processed separately, we treat them as two coordinated enrollments rather than assuming one covers the other — and we manage both alongside any other Michigan payers your practice needs.",
  finalCtaHeading: "Ready to Get Credentialed with HAP and ASR?",
  finalCtaSubheading:
    "Schedule a consultation to review your current HAP and ASR enrollment status and build a plan for both."
};
