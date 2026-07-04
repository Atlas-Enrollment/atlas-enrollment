import type { PayerPageContent } from "./types";

export const priorityHealth: PayerPageContent = {
  slug: "priority-health-credentialing",
  payerName: "Priority Health",
  payerShortName: "Priority Health",
  metaTitle: "Priority Health Credentialing & Provider Enrollment | Atlas Enrollment",
  metaDescription:
    "Atlas Enrollment manages Priority Health credentialing and provider enrollment for Michigan chiropractic practices — document collection, application submission, and follow-up handled for you.",
  heroExplanation:
    "Priority Health is one of Michigan's larger payers, with both commercial and Medicare Advantage plans, and credentialing with them is a common step for chiropractic practices serving West and Southeast Michigan patients. We manage the Priority Health enrollment process — from document collection through final approval — so your practice can accept Priority Health patients without getting stuck in payer paperwork.",
  whoThisIsForIntro:
    "Priority Health credentialing comes up at a few distinct points in a practice's life, similar to other Michigan commercial payers:",
  whoThisIsFor: [
    "Chiropractors opening a new practice who need Priority Health in-network status from day one",
    "Existing practices adding a new associate or provider who isn't yet credentialed with Priority Health",
    "Practices changing ownership or tax ID — a change that typically triggers re-credentialing, not just an update",
    "Multi-provider clinics enrolling several chiropractors with Priority Health at the same time"
  ],
  enrollmentProcess: [
    "Applications are typically submitted through Priority Health's provider enrollment channels and reviewed against practice and provider documentation, in a shape similar to other commercial payers.",
    "Priority Health offers both commercial plans and Medicare Advantage products. Credentialing approval is generally shared across both once a provider is approved, but practices should confirm which specific networks or panels they've actually been added to rather than assume.",
    "Review timelines are set by Priority Health, not Atlas Enrollment. What we control is making sure the application is complete and accurate before submission, and that follow-up happens on a schedule rather than waiting for a status update to arrive on its own.",
    "Once approved, Priority Health issues an effective date — as with other commercial payers, we recommend treating the provider as out-of-network until that date is confirmed in writing."
  ],
  documentationIntro:
    "Priority Health's applications generally draw on a similar set of documentation to other Michigan commercial payers:",
  typicalDocumentation: [
    "Active NPI",
    "A completed CAQH profile",
    "Current state chiropractic license",
    "Proof of malpractice insurance",
    "A completed W-9",
    "Practice information: tax ID, address, and billing details"
  ],
  delayReasonsIntro:
    "Most delays we see with Priority Health applications come down to a handful of avoidable issues:",
  delayReasons: [
    "Incomplete or outdated CAQH profile information",
    "Expired license or malpractice documentation",
    "Confusion between commercial and Medicare Advantage panel status, which can each require separate confirmation",
    "Requests for additional information from the payer that go unanswered"
  ],
  helpIntro:
    "This is the part of the process Atlas Enrollment actually controls — a complete, accurate Priority Health application the first time, and follow-up that doesn't wait on you to chase it:",
  howAtlasHelps: [
    "We collect and organize every document your Priority Health application needs — once, not re-requested separately for every payer you're enrolling with.",
    "We prepare and submit the application on your behalf, checked against the documentation on file before it goes out.",
    "We track the application's status and follow up with Priority Health directly.",
    "If Priority Health requests more information or a portion of the application is rejected, we handle the resubmission.",
    "Every Priority Health application is tracked inside Atlas OS, so there's a clear record of where things stand without waiting on a status-check phone call."
  ],
  whatWeNeedIntro: "To begin a Priority Health enrollment, we'll typically ask for:",
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
    { label: "Medicare provider enrollment", href: "/medicare-provider-enrollment" },
    { label: "Michigan Medicaid (CHAMPS) credentialing", href: "/michigan-medicaid-champs" },
    { label: "Re-credentialing and maintenance after you're already in-network" }
  ],
  closingParagraph:
    "Priority Health is usually one of several Michigan payers a practice enrolls with at the same time — often alongside BCBSM, Medicare, or Michigan Medicaid. We manage all of it as one coordinated process rather than a series of separate, disconnected applications.",
  finalCtaHeading: "Ready to Get Credentialed with Priority Health?",
  finalCtaSubheading:
    "Schedule a consultation to review your current Priority Health enrollment status, identify any missing documentation, and build an enrollment plan for your practice."
};
