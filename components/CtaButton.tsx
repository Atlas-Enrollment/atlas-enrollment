import Link from "next/link";

const variants = {
  dark: "bg-atlas-blue-900 text-white hover:bg-atlas-blue-700",
  light: "bg-white text-atlas-blue-900 hover:bg-atlas-blue-50"
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
