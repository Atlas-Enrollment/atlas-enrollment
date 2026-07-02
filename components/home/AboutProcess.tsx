import { aboutProcess } from "@/content/home/about-process";

export function AboutProcess() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900">{aboutProcess.heading}</h2>
        <p className="mt-4 text-slate-700">{aboutProcess.body}</p>
      </div>
    </section>
  );
}
