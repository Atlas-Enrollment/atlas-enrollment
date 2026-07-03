import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlasenrollment.com"),
  title: "Chiropractic Credentialing & Insurance Enrollment | Atlas Enrollment",
  description:
    "Atlas Enrollment manages insurance credentialing and provider enrollment for chiropractic practices — from paperwork to payer follow-up. Schedule a consultation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
