import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { getEmailAdapter, getStaffNotificationEmail } from "@/lib/notifications/adapter-factory";

interface ConsultationRequestBody {
  practiceName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ConsultationRequestBody;

  if (!body.practiceName || !body.contactName || !body.email) {
    return NextResponse.json(
      { ok: false, error: "practiceName, contactName, and email are required" },
      { status: 400 }
    );
  }

  const id = randomUUID();
  const subject = `New consultation request — ${body.practiceName}`;
  const bodyText = [
    `Practice: ${body.practiceName}`,
    `Contact: ${body.contactName}`,
    `Email: ${body.email}`,
    body.phone ? `Phone: ${body.phone}` : undefined,
    body.message ? `\nMessage:\n${body.message}` : undefined
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const adapter = getEmailAdapter();
    const staffEmail = getStaffNotificationEmail() ?? "unset-in-dev@example.com";

    const result = await adapter.send({
      id,
      recipientEmail: staffEmail,
      subject,
      body: bodyText
    });

    if (!result.success) {
      console.error(`[consultation-request] delivery failed id=${id} error=${result.error}`);
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    const error = err instanceof Error ? err.message : "unknown";
    console.error(`[consultation-request] config error id=${id} error=${error}`);
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }
}
