import Link from "next/link";

const variants = {
  dark: "bg-slate-900 text-white hover:bg-slate-700",
  light: "bg-white text-slate-900 hover:bg-slate-100"
};

export function CtaButton({
  label = "Get Started",
  variant = "dark"
}: {
  label?: string;
  variant?: keyof typeof variants;
}) {
  return (
    <Link
      href="/contact"
      className={`inline-block rounded-md px-6 py-3 text-sm font-semibold transition-colors ${variants[variant]}`}
    >
      {label}
    </Link>
  );
}
