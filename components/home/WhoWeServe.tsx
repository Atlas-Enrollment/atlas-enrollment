import { whoWeServe } from "@/content/home/who-we-serve";

export function WhoWeServe() {
  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900">{whoWeServe.heading}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {whoWeServe.audiences.map((audience) => (
            <li key={audience} className="rounded-md border border-slate-200 bg-white p-4 text-slate-700">
              {audience}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
