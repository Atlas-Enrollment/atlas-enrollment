import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Atlas Enrollment",
  description: "Request a credentialing consultation for your chiropractic practice."
};

// Contact email is a placeholder pending real business contact info —
// see package-docs/GAPS_AND_TASKS.md AE-10. No phone number listed until a
// real one exists; don't fabricate one.
const CONTACT_EMAIL = "hello@atlasenrollment.com";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Schedule a Consultation</h1>
      <p className="mt-4 text-slate-600">
        Tell us a bit about your practice and we&apos;ll follow up to schedule a call.
      </p>

      <div className="mt-8">
        <ConsultationForm />
      </div>

      <dl className="mt-12 grid gap-4 border-t border-slate-200 pt-8 text-sm text-slate-600 sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-slate-900">Email</dt>
          <dd>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900">
              {CONTACT_EMAIL}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Service area</dt>
          <dd>Michigan practices, with Medicare and commercial payer reach beyond the state</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Response time</dt>
          <dd>We typically respond within one business day</dd>
        </div>
      </dl>
    </section>
  );
}
