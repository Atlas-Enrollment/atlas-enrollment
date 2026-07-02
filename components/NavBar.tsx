import Link from "next/link";
import { CtaButton } from "./CtaButton";

export function NavBar() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Atlas Enrollment
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
