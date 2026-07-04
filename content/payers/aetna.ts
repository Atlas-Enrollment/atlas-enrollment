import type { PayerPageContent } from "./types";

export const aetna: PayerPageContent = {
  slug: "aetna-provider-enrollment",
  payerName: "Aetna",
  payerShortName: "Aetna",
  metaTitle: "Aetna Provider Enrollment & Credentialing | Atlas Enrollment",
  metaDescription:
    "Atlas Enrollment manages Aetna credentialing and provider enrollment for Michigan chiropractic practices — CAQH maintenance, application submission, and follow-up handled for you.",
  heroExplanation:
    "Aetna is a national commercial payer, which means its credentialing process isn't Michigan-specific the way BCBSM or Priority Health's is — but it's still one of the more common commercial payers Michigan chiropractic practices need to be in-network with. We manage the Aetna enrollment process end to end, so your practice can accept Aetna patients without navigating a national payer's application process alone.",
  whoThisIsForIntro: "Aetna credentialing comes up in the same situations as most commercial payers:",
  whoThisIsFor: [
    "Chiropractors opening a new practice who need Aetna in-network status from day one",
    "Existing practices adding a new associate or provider who isn't yet credentialed with Aetna",
    "Practices changing ownership or tax ID — a change that typically triggers re-credentialing, not just an update",
    "Multi-provider clinics enrolling several chiropractors with Aetna at the same time"
  ],
  enrollmentProcess: [
    "Aetna's credentialing process draws heavily on CAQH ProView — more so than some Michigan-specific payers — so an accurate, up-to-date CAQH profile is generally treated as a prerequisite rather than optional supporting documentation.",
    "Applications are reviewed against the CAQH profile and any additional documentation Aetna requests directly.",
    "As a national payer, Aetna's review process is set centrally rather than adjusted regionally. Timelines are set by Aetna, not Atlas Enrollment.",
    "Once approved, Aetna issues an effective date; as with other payers, we recommend treating the provider as out-of-network until that date is confirmed in writing.",
    "Because Aetna relies on CAQH so heavily, an approved provider isn't necessarily done — CAQH profiles require periodic re-attestation (typically every 120 days), and letting that lapse can affect standing with Aetna even after initial approval, without a new application ever being filed."
  ],
  documentationIntro: "Aetna's application generally draws on:",
  typicalDocumentation: [
    "An active, current CAQH profile — particularly important for Aetna specifically",
    "Active NPI",
    "Current state chiropractic license",
    "Proof of malpractice insurance",
    "A completed W-9",
    "Practice information: tax ID, address, and billing details"
  ],
  delayReasonsIntro: "With Aetna specifically, one issue accounts for a disproportionate share of delays:",
  delayReasons: [
    "An outdated or incomplete CAQH profile — the most common cause of delay with Aetna specifically",
    "Expired license or malpractice documentation",
    "Incomplete practice information on the initial submission",
    "Requests for additional information that go unanswered"
  ],
  helpIntro:
    "Because Aetna leans so heavily on CAQH, keeping that profile current is most of what we control here:",
  howAtlasHelps: [
    "We keep your CAQH profile current and attested, since Aetna — and most other national commercial payers — pull directly from it rather than a separate application.",
    "We prepare and submit any additional documentation Aetna requests beyond CAQH.",
    "We track the application's status and follow up with Aetna directly.",
    "If Aetna requests more information or rejects part of an application, we handle the resubmission.",
    "Every Aetna application is tracked inside Atlas OS, so there's a clear record of where things stand."
  ],
  whatWeNeedIntro: "To begin an Aetna enrollment, we'll typically ask for:",
  whatWeNeed: [
    "Basic practice information",
    "Provider information",
    "Current license and malpractice insurance",
    "W-9",
    "NPI",
    "CAQH access"
  ],
  whatWeNeedClosing: "Once we've collected your documentation, we handle the submission and payer follow-up.",
  relatedServices: [
    { label: "BCBSM credentialing", href: "/bcbsm-credentialing" },
    { label: "Priority Health credentialing", href: "/priority-health-credentialing" },
    { label: "Multi-provider enrollment for group practices" },
    { label: "Re-credentialing and maintenance after you're already in-network" }
  ],
  closingParagraph:
    "Aetna is usually one of several commercial payers a practice enrolls with — most practices we work with are pursuing Aetna alongside BCBSM, Priority Health, or other regional payers at the same time. We manage all of it as one coordinated process.",
  finalCtaHeading: "Ready to Get Credentialed with Aetna?",
  finalCtaSubheading:
    "Schedule a consultation to review your current Aetna enrollment status, identify any missing documentation, and build an enrollment plan for your practice."
};
