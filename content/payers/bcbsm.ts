import type { PayerPageContent } from "./types";

export const bcbsm: PayerPageContent = {
  slug: "bcbsm-credentialing",
  payerName: "Blue Cross Blue Shield of Michigan",
  payerShortName: "BCBSM",
  metaTitle: "BCBSM Credentialing & Provider Enrollment | Atlas Enrollment",
  metaDescription:
    "Atlas Enrollment manages BCBSM credentialing and provider enrollment for Michigan chiropractic practices — document collection, application submission, and follow-up handled for you.",
  heroExplanation:
    "Getting credentialed with Blue Cross Blue Shield of Michigan (BCBSM) is one of the most common — and most time-consuming — steps for a chiropractic practice looking to accept commercial insurance in Michigan. We manage the BCBSM enrollment process from document collection through final approval, so your practice can start seeing in-network patients without getting stuck in payer paperwork.",
  whoThisIsForIntro:
    "BCBSM credentialing comes up at a few distinct points in a practice's life, and the right starting point depends on which one applies to you:",
  whoThisIsFor: [
    "Chiropractors opening a new practice who need BCBSM in-network status from day one",
    "Existing practices adding a new associate or provider who isn't yet credentialed with BCBSM",
    "Practices changing ownership or tax ID — a change that typically triggers re-credentialing, not just an update",
    "Multi-provider clinics enrolling several chiropractors with BCBSM at the same time",
    "Chiropractors previously credentialed with BCBSM at a different practice — credentialing generally follows the provider, but the practice-level enrollment (location, tax ID, billing) still needs to be re-established"
  ],
  enrollmentProcess: [
    "Applications are typically submitted through BCBSM's provider enrollment channels and reviewed against the documentation submitted for both the practice and the individual provider.",
    "Review timelines are set by BCBSM, not by Atlas Enrollment — we don't control or guarantee approval timing. What we do control is how completely and quickly your application is prepared, submitted, and followed up on, which is where most avoidable delays actually happen.",
    "Most commercial payer applications, BCBSM included, follow a similar shape: an initial submission, a review period, and — often — one or more requests for additional information before an effective date is finally issued. Knowing that pattern in advance is part of why we build in follow-up from day one rather than waiting for something to go wrong.",
    "Once an application is approved, BCBSM issues an effective date — the point at which the provider can begin billing as in-network. Until that date is confirmed in writing, we recommend treating the provider as out-of-network for billing purposes, since retroactive billing policies vary and aren't something either Atlas Enrollment or your practice can control after the fact."
  ],
  documentationIntro:
    "Commercial payer applications, including BCBSM's, generally draw from a consistent set of provider and practice documentation. Requirements can vary by circumstance, so treat this as a starting point rather than an exhaustive checklist:",
  typicalDocumentation: [
    "An active NPI (National Provider Identifier)",
    "A completed CAQH profile — many commercial payers, including BCBSM, pull application data directly from CAQH",
    "Current state chiropractic license",
    "Proof of malpractice insurance",
    "A completed W-9",
    "Practice information: tax ID, practice address, and billing details"
  ],
  delayReasonsIntro:
    "Most credentialing delays we see aren't caused by BCBSM being slow — they're caused by an application that wasn't complete or accurate the first time it was submitted, which restarts the review clock. The most common causes:",
  delayReasons: [
    "Missing or incomplete fields in a CAQH profile",
    "Expired or soon-to-expire license or malpractice documentation",
    "Incomplete practice or billing information on the initial submission",
    "Requests for additional information from the payer that go unanswered or are delayed"
  ],
  helpIntro:
    "This is the part of the process Atlas Enrollment actually controls — making sure your BCBSM application is complete and accurate the first time, and that nothing sits waiting on a follow-up call that never happens:",
  howAtlasHelps: [
    "We collect and organize every document your BCBSM application needs — once, not re-requested separately for every payer you're enrolling with.",
    "We prepare and submit the application on your behalf, checked against the documentation on file before it goes out.",
    "We track the application's status and follow up with BCBSM directly, so you're not the one making the calls.",
    "If BCBSM requests more information or a portion of the application is rejected, we handle the resubmission rather than leaving it to stall.",
    "Every BCBSM application is tracked inside Atlas OS, our internal platform, so there's a clear record of where things stand without waiting on a status-check phone call."
  ],
  relatedServices: [
    "Medicare provider enrollment",
    "Michigan Medicaid (CHAMPS) credentialing",
    "Multi-provider enrollment for group practices",
    "Re-credentialing and maintenance after you're already in-network"
  ],
  closingParagraph:
    "BCBSM is usually one of several payers a Michigan chiropractic practice needs to be in-network with, not the only one — most practices we work with are enrolling with BCBSM alongside Medicare, Michigan Medicaid, or other commercial payers at the same time. We manage all of it as one coordinated process rather than a series of separate, disconnected applications.",
  finalCtaHeading: "Ready to Get Credentialed with BCBSM?",
  finalCtaSubheading:
    "Schedule a consultation to discuss your practice, your BCBSM enrollment status, and what else you need to be in-network with."
};
