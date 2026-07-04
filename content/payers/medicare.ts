import type { PayerPageContent } from "./types";

export const medicare: PayerPageContent = {
  slug: "medicare-provider-enrollment",
  payerName: "Medicare (WPS GHA)",
  payerShortName: "Medicare",
  metaTitle: "Medicare Provider Enrollment | Atlas Enrollment",
  metaDescription:
    "Atlas Enrollment manages Medicare provider enrollment (PECOS, PTAN, reassignment) for Michigan chiropractic practices — application preparation, submission, and follow-up handled for you.",
  heroExplanation:
    "Medicare enrollment works differently than commercial payer credentialing — providers enroll directly with Medicare through PECOS rather than through an individual payer's application process. We manage the PECOS enrollment process for chiropractic providers, from initial application through PTAN issuance, so your practice can bill Medicare without navigating a federal system alone.",
  whoThisIsForIntro:
    "Medicare enrollment comes up at a few distinct points, and each one starts from a different place:",
  whoThisIsFor: [
    "Chiropractors who have never enrolled with Medicare and need an active PTAN before billing",
    "Existing practices adding a provider who needs to reassign Medicare benefits to the practice",
    "Practices changing ownership, which can trigger a new enrollment or a revalidation depending on the specifics of the change",
    "Providers whose Medicare enrollment has lapsed, or who have a revalidation notice due"
  ],
  enrollmentProcess: [
    "Medicare enrollment happens through PECOS (the Provider Enrollment, Chain, and Ownership System), not through a payer-specific portal the way commercial credentialing does.",
    "A new provider typically needs an 855I (individual enrollment) and, if reassigning benefits to a practice, an 855R (reassignment of benefits) — both need to agree with each other, since mismatches between the two are a common source of delay.",
    "WPS GHA is the Medicare Administrative Contractor (MAC) responsible for processing Michigan Part B enrollment. Processing timelines are set by WPS GHA and CMS, not by Atlas Enrollment — what we control is making sure the 855I and 855R are complete and consistent before they're submitted.",
    "Once approved, Medicare assigns a PTAN (Provider Transaction Access Number) tied to the provider's NPI. Billing Medicare as a participating provider requires an active PTAN — until that's confirmed, we treat the provider as not yet able to bill."
  ],
  documentationIntro:
    "Medicare enrollment through PECOS generally draws on a specific set of provider and practice records, distinct from a typical commercial payer application:",
  typicalDocumentation: [
    "Active NPI",
    "Current state chiropractic license",
    "Proof of malpractice insurance",
    "Practice banking/EFT information for the 855R reassignment",
    "A voided check or bank letter to support EFT setup",
    "Prior Medicare enrollment history, if the provider has an existing or lapsed PTAN"
  ],
  delayReasonsIntro:
    "Medicare applications tend to stall for reasons that look different from commercial payer delays:",
  delayReasons: [
    "Mismatched or incomplete information between the 855I and 855R",
    "Missing or inconsistent EFT/banking documentation",
    "NPI or license information that doesn't match CMS records exactly",
    "Revalidation notices that go unanswered within the required window"
  ],
  helpIntro:
    "This is the part of Medicare enrollment Atlas Enrollment actually controls — an accurate, consistent application the first time, and a revalidation cycle that doesn't lapse silently:",
  howAtlasHelps: [
    "We prepare and submit the 855I and 855R together, checked against each other for consistency before submission.",
    "We track PTAN issuance and confirm the effective date before advising a practice to bill Medicare as participating.",
    "We monitor revalidation cycles so a lapse in Medicare enrollment doesn't happen without warning.",
    "If WPS GHA requests additional information, we handle the response.",
    "Every Medicare enrollment is tracked inside Atlas OS alongside a practice's other payer enrollments, not as a separate, disconnected process."
  ],
  whatWeNeedIntro: "To begin a Medicare enrollment, we'll typically ask for:",
  whatWeNeed: [
    "NPI",
    "State chiropractic license",
    "Malpractice insurance",
    "Practice banking/EFT information",
    "Prior Medicare enrollment history, if any (e.g. an existing PTAN)"
  ],
  whatWeNeedClosing:
    "Once we have this, we prepare and submit your PECOS enrollment and handle the follow-up with WPS GHA.",
  relatedServices: [
    { label: "BCBSM credentialing", href: "/bcbsm-credentialing" },
    { label: "Michigan Medicaid (CHAMPS) credentialing", href: "/michigan-medicaid-champs" },
    { label: "Multi-provider enrollment for group practices" },
    { label: "Revalidation and maintenance after you're already enrolled" }
  ],
  closingParagraph:
    "Medicare enrollment is usually handled alongside commercial payer credentialing, not instead of it — most chiropractic practices need both to serve their full patient base. We manage Medicare enrollment as part of the same coordinated process as your other payer enrollments, not a separate one.",
  finalCtaHeading: "Ready to Enroll with Medicare?",
  finalCtaSubheading:
    "Schedule a consultation to review your Medicare enrollment status, confirm what PECOS requires for your practice, and build an enrollment plan."
};
