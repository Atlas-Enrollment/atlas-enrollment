import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "./CtaButton";

export function NavBar() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          {/* Wordmark lockup already includes "Atlas Enrollment" text (952x260,
              ~3.66:1) — don't duplicate the name as separate text here. */}
          <Image
            src="/atlas-enrollment-logo-nav-bar.png"
            alt="Atlas Enrollment"
            width={952}
            height={260}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900">
            Contact
          </Link>
          <CtaButton label="Get Started" />
        </nav>
      </div>
    </header>
  );
}
