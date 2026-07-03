import { howItWorks } from "@/content/home/how-it-works";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900">{howItWorks.heading}</h2>
        <ol className="mt-8 space-y-6">
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-atlas-blue-900 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{step.title}</p>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-slate-500">{howItWorks.inlineNote}</p>
      </div>
    </section>
  );
}
