import { whyUs } from "@/content/home/why-us";

export function WhyUs() {
  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900">{whyUs.heading}</h2>
        <ul className="mt-6 space-y-3">
          {whyUs.points.map((point) => (
            <li key={point} className="flex gap-3 text-slate-700">
              <span aria-hidden className="font-semibold text-atlas-blue-600">
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-500">{whyUs.inlineNote}</p>
      </div>
    </section>
  );
}
