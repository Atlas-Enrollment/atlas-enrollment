/** @type {import('next').NextConfig} */
const nextConfig = {};

// NOTE: Next.js prints a "workspace root" warning at build time because this
// repo sits inside the Loggie_OS_Master pnpm workspace (which has its own
// lockfiles) even though atlas-enrollment is its own independent repo.
// Setting turbopack.root here broke the build in this monorepo layout
// (couldn't resolve next/package.json) — cosmetic warning, left as-is.
module.exports = nextConfig;
