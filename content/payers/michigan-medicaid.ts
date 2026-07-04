import type { PayerPageContent } from "./types";

export const michiganMedicaid: PayerPageContent = {
  slug: "michigan-medicaid-champs",
  payerName: "Michigan Medicaid (CHAMPS)",
  payerShortName: "Michigan Medicaid",
  metaTitle: "Michigan Medicaid (CHAMPS) Credentialing | Atlas Enrollment",
  metaDescription:
    "Atlas Enrollment manages Michigan Medicaid (CHAMPS) provider enrollment and managed care plan credentialing (Meridian, Molina, McLaren) for chiropractic practices.",
  heroExplanation:
    "Michigan Medicaid enrollment for chiropractic providers runs through CHAMPS (the Community Health Automated Medicaid Processing System), administered by the Michigan Department of Health and Human Services (MDHHS). We manage the CHAMPS enrollment process — and the managed care plan enrollments that build on it — so your practice can accept Michigan Medicaid patients without navigating the state's systems alone.",
  whoThisIsForIntro:
    "Michigan Medicaid enrollment applies to a few different situations, and the sequencing matters depending on which one is yours:",
  whoThisIsFor: [
    "Chiropractors opening a new practice who plan to accept Michigan Medicaid patients",
    "Existing practices adding a provider who needs their own CHAMPS enrollment",
    "Practices changing ownership or tax ID, which generally requires a new CHAMPS enrollment rather than an update to the existing one",
    "Practices looking to join Meridian, Molina, or McLaren's managed Medicaid networks, which typically requires active CHAMPS enrollment as a prerequisite"
  ],
  enrollmentProcess: [
    "CHAMPS is Michigan's state Medicaid provider enrollment system — it's separate from, and generally precedes, enrollment with any individual managed Medicaid plan.",
    "A provider generally needs an active CHAMPS enrollment before enrolling with Michigan's managed Medicaid plans (Meridian, Molina, McLaren), since those plans typically verify state Medicaid enrollment as a condition of their own credentialing.",
    "MDHHS sets CHAMPS review timelines, not Atlas Enrollment. What we control is making sure the CHAMPS application — and the managed care plan applications that follow it — are complete and consistent with each other.",
    "Once CHAMPS enrollment is active, we sequence the managed care plan applications so they aren't submitted before CHAMPS confirmation, which is a common and avoidable cause of rejection."
  ],
  documentationIntro:
    "CHAMPS enrollment and the managed care plans built on it generally draw on a consistent set of documentation:",
  typicalDocumentation: [
    "Active NPI",
    "Current state chiropractic license",
    "Proof of malpractice insurance",
    "Completed CHAMPS enrollment application at both the practice and provider level",
    "Practice tax ID and banking information for state payment"
  ],
  delayReasonsIntro: "Most delays we see in Michigan Medicaid enrollment come from one of a few places:",
  delayReasons: [
    "Incomplete or inconsistent CHAMPS provider- and practice-level applications",
    "Managed care plan applications submitted before CHAMPS enrollment is confirmed active",
    "Missing licensure or malpractice documentation",
    "Requests for additional information from MDHHS that go unanswered"
  ],
  helpIntro:
    "This is where Atlas Enrollment's coordination matters most — CHAMPS and its managed care plans have to be sequenced correctly, not just submitted all at once:",
  howAtlasHelps: [
    "We prepare and submit your CHAMPS enrollment application at both the practice and provider level.",
    "We sequence and submit managed care plan applications (Meridian, Molina, McLaren) once CHAMPS enrollment is confirmed active, rather than submitting everything simultaneously and risking a mismatch.",
    "We track status across CHAMPS and every managed care plan enrollment tied to it.",
    "If MDHHS or a managed care plan requests more information, we handle the response.",
    "Every Michigan Medicaid enrollment — CHAMPS and the managed care plans built on it — is tracked as one coordinated process inside Atlas OS."
  ],
  whatWeNeedIntro: "To begin a Michigan Medicaid enrollment, we'll typically ask for:",
  whatWeNeed: [
    "NPI",
    "State chiropractic license",
    "Malpractice insurance",
    "Practice tax ID and banking information",
    "Which managed Medicaid plans (Meridian, Molina, McLaren) you want to enroll with, if known"
  ],
  whatWeNeedClosing:
    "Once we have this, we prepare your CHAMPS enrollment and sequence any managed care plan applications once CHAMPS is confirmed active.",
  relatedServices: [
    { label: "BCBSM credentialing", href: "/bcbsm-credentialing" },
    { label: "Medicare provider enrollment", href: "/medicare-provider-enrollment" },
    { label: "Multi-provider enrollment for group practices" },
    { label: "Re-credentialing and maintenance after you're already enrolled" }
  ],
  closingParagraph:
    "Michigan Medicaid enrollment is rarely a practice's only enrollment need — most practices working through CHAMPS are also enrolling with Medicare, BCBSM, or other commercial payers around the same time. We treat CHAMPS and its managed care plans as one part of a single coordinated enrollment process, not a series of disconnected applications.",
  finalCtaHeading: "Ready to Enroll with Michigan Medicaid?",
  finalCtaSubheading:
    "Schedule a consultation to review your CHAMPS enrollment status and build a plan for the managed Medicaid plans your practice needs."
};
