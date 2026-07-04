import type { PayerPageContent } from "./types";

export const optumUhc: PayerPageContent = {
  slug: "optum-credentialing",
  payerName: "Optum / UnitedHealthcare",
  payerShortName: "Optum / UnitedHealthcare",
  metaTitle: "Optum / UnitedHealthcare Provider Enrollment | Atlas Enrollment",
  metaDescription:
    "Atlas Enrollment manages Optum and UnitedHealthcare provider enrollment for Michigan chiropractic practices — routed correctly the first time, application submission and follow-up handled for you.",
  heroExplanation:
    "Optum and UnitedHealthcare are related but not interchangeable — UnitedHealthcare is the health plan, while Optum frequently administers the specialty network, including chiropractic, that UnitedHealthcare members access. In practice, chiropractic credentialing is often processed through Optum even for patients carrying a UnitedHealthcare card, which is why we treat this as one coordinated enrollment rather than two separate ones.",
  whoThisIsForIntro: "Optum / UnitedHealthcare credentialing comes up in the same situations as most commercial payers:",
  whoThisIsFor: [
    "Chiropractors opening a new practice who need in-network status with UnitedHealthcare plans from day one",
    "Existing practices adding a new associate or provider who isn't yet credentialed",
    "Practices changing ownership or tax ID — a change that typically triggers re-credentialing, not just an update",
    "Multi-provider clinics enrolling several chiropractors at the same time"
  ],
  enrollmentProcess: [
    "Chiropractic credentialing for UnitedHealthcare members is frequently processed through Optum's provider network rather than directly through UnitedHealthcare — this is a common point of confusion for practices navigating it for the first time.",
    "Applications are reviewed against submitted practice and provider documentation, in a shape similar to other commercial payers.",
    "Review timelines are set by Optum/UnitedHealthcare, not Atlas Enrollment. We focus on making sure the application is complete, routed correctly, and that follow-up happens on schedule.",
    "Once approved, an effective date is issued — as with any commercial payer, we recommend treating the provider as out-of-network until it's confirmed in writing.",
    "Optum isn't exclusive to UnitedHealthcare, either — it administers specialty networks on behalf of multiple health plans, not just UnitedHealthcare. In practice this means an Optum credentialing approval can carry weight beyond a single payer relationship, which is worth confirming explicitly rather than assuming it only applies to UnitedHealthcare members."
  ],
  documentationIntro: "Optum / UnitedHealthcare's application generally draws on the same core documentation as other commercial payers:",
  typicalDocumentation: [
    "Active NPI",
    "A completed CAQH profile",
    "Current state chiropractic license",
    "Proof of malpractice insurance",
    "A completed W-9",
    "Practice information: tax ID, address, and billing details"
  ],
  delayReasonsIntro: "One issue is specific to this payer relationship and accounts for a disproportionate share of delays:",
  delayReasons: [
    "Submitting an application to UnitedHealthcare directly when it should route through Optum's specialty network application instead",
    "Incomplete or outdated CAQH profile information",
    "Expired license or malpractice documentation",
    "Requests for additional information that go unanswered"
  ],
  helpIntro:
    "Getting the application routed correctly the first time is most of what we control here:",
  howAtlasHelps: [
    "We route the credentialing application correctly the first time — through Optum's specialty network where that's how chiropractic is administered, rather than resubmitting after going to the wrong place.",
    "We collect and organize every document the application needs, once.",
    "We track the application's status and follow up directly.",
    "If more information is requested or part of the application is rejected, we handle the resubmission.",
    "Every application is tracked inside Atlas OS, so there's a clear record of where things stand."
  ],
  whatWeNeedIntro: "To begin an Optum / UnitedHealthcare enrollment, we'll typically ask for:",
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
    { label: "BCBSM credentialing", href: "/bcbsm-credentialing" },
    { label: "Humana provider enrollment", href: "/humana-provider-enrollment" },
    { label: "Multi-provider enrollment for group practices" },
    { label: "Re-credentialing and maintenance after you're already in-network" }
  ],
  closingParagraph:
    "Because Optum and UnitedHealthcare are related but distinct, we make sure the application is routed correctly the first time rather than resubmitted after going to the wrong place — and we manage it alongside any other payers your practice needs.",
  finalCtaHeading: "Ready to Get Credentialed with Optum / UnitedHealthcare?",
  finalCtaSubheading:
    "Schedule a consultation to review your current enrollment status, confirm the correct application path, and build an enrollment plan for your practice."
};
