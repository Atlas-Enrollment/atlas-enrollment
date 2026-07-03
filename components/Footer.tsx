import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/atlas-enrollment-logo.png"
            alt="Atlas Enrollment"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span>&copy; {new Date().getFullYear()} Atlas Enrollment</span>
        </div>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
          {/* Privacy Policy / Terms of Service links intentionally omitted until
              real legal copy exists — see package-docs/GAPS_AND_TASKS.md AE-9 */}
          <a href="https://os.atlasenrollment.com" className="hover:text-slate-900">
            Login
          </a>
        </div>
      </div>
    </footer>
  );
}
