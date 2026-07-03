/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Needed for the one payer logo that's an SVG source
    // (public/atlas_logos/UnitedHealthcare_(logo).svg). Next.js blocks SVG
    // optimization by default as a security precaution against untrusted
    // uploads; safe here since this is a static asset we control, not
    // user-uploaded. contentSecurityPolicy + attachment disposition follow
    // Next.js's own documented safe pattern for enabling this.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
};

// NOTE: Next.js prints a "workspace root" warning at build time because this
// repo sits inside the Loggie_OS_Master pnpm workspace (which has its own
// lockfiles) even though atlas-enrollment is its own independent repo.
// Setting turbopack.root here broke the build in this monorepo layout
// (couldn't resolve next/package.json) — cosmetic warning, left as-is.
module.exports = nextConfig;
