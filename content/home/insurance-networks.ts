// Source of truth: products/atlas/atlas-os/lib/constants/payors.ts
// Atlas Enrollment and Atlas OS are separate products with no shared code
// dependency (see package-docs/ATLAS_ENROLLMENT_OVERVIEW.md), so this list is
// a manually-synced copy, not an import. Update both when the payer list changes.
// Full AE-4 (automated sync) is still open — see package-docs/GAPS_AND_TASKS.md.

export const insuranceNetworks = {
  heading: "Payers we work with.",
  commercial: ["BCBSM", "Aetna", "Optum / UnitedHealthcare", "Humana", "HAP / ASR", "Priority Health"],
  medicare: ["Medicare WPS/GHA"],
  medicaid: {
    label: "Medicaid (Michigan)",
    plans: ["CHAMPS / Michigan Medicaid", "Meridian (managed Medicaid)", "Molina (managed Medicaid)", "McLaren (managed Medicaid)"]
  },
  // Keep this honest — current coverage is Michigan-concentrated on
  // Medicaid/managed-Medicaid, not nationwide. See reference/CONTENT_STRATEGY.md.
  footnote: "Currently serving Michigan practices, with Medicare and commercial payer reach beyond the state."
};
