import { NextResponse } from "next/server";

// STUB — AE-5 (package-docs/GAPS_AND_TASKS.md) is still open. This only logs
// the submission server-side; it does not persist it or notify staff. Do NOT
// treat this as production-ready lead capture until AE-5 wires a real
// destination (e.g. staff notification, Atlas OS, or a mailer).
export async function POST(request: Request) {
  const body = await request.json();
  console.warn("[consultation-request STUB — AE-5 not yet implemented] received:", body);
  return NextResponse.json({ ok: true, stub: true });
}
