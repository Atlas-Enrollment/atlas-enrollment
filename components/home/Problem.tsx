import { problem } from "@/content/home/problem";

export function Problem() {
  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900">{problem.heading}</h2>
        <ul className="mt-6 space-y-3">
          {problem.points.map((point) => (
            <li key={point} className="flex gap-3 text-slate-700">
              <span aria-hidden className="text-slate-400">
                —
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 italic text-slate-500">{problem.closingLine}</p>
      </div>
    </section>
  );
}
