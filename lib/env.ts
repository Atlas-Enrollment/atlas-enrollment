// Scoped-down version of products/atlas-os/lib/config/env.ts's
// NOTIFICATION_PROVIDER / RESEND_API_KEY / NOTIFICATION_FROM_EMAIL pattern —
// this site only ever sends one kind of email (a new consultation request),
// so a full zod schema is unnecessary; same validation intent, less ceremony.

export type NotificationProvider = "stub" | "resend";

function getNotificationProvider(): NotificationProvider {
  return process.env.NOTIFICATION_PROVIDER === "resend" ? "resend" : "stub";
}

function getResendApiKey(): string | undefined {
  return process.env.RESEND_API_KEY;
}

function getNotificationFromEmail(): string {
  return process.env.NOTIFICATION_FROM_EMAIL ?? "noreply@atlasenrollment.com";
}

// Resend accepts at most 50 recipients per message.
const MAX_RECIPIENTS = 50;
const EMAIL_SHAPE = /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/;

/**
 * A comma-separated list of addresses, e.g. "a@example.com, b@example.com".
 *
 * Split here, once, into separate entries: Resend takes one address per `to`
 * entry, and the adapter used to wrap the whole variable as a single entry, so a
 * list reached Resend as one address with commas in it. A malformed entry is a
 * configuration error, reported as one rather than sent to.
 */
export function parseEmailList(name: string, raw: string | undefined): string[] {
  const entries = [...new Set((raw ?? "").split(",").map((entry) => entry.trim()).filter(Boolean))];
  const invalid = entries.filter((entry) => !EMAIL_SHAPE.test(entry));
  if (invalid.length > 0) {
    throw new Error(`${name} contains an invalid address: ${invalid.join(", ")}`);
  }
  if (entries.length > MAX_RECIPIENTS) {
    throw new Error(`${name} lists ${entries.length} addresses; Resend accepts at most ${MAX_RECIPIENTS}`);
  }
  return entries;
}

function getStaffNotificationEmails(): string[] {
  return parseEmailList("STAFF_NOTIFICATION_EMAIL", process.env.STAFF_NOTIFICATION_EMAIL);
}

export function loadNotificationConfig() {
  const provider = getNotificationProvider();
  const resendApiKey = getResendApiKey();
  const fromEmail = getNotificationFromEmail();
  const staffEmails = getStaffNotificationEmails();

  if (provider === "resend" && !resendApiKey) {
    throw new Error("RESEND_API_KEY is required when NOTIFICATION_PROVIDER=resend");
  }
  if (provider === "resend" && staffEmails.length === 0) {
    throw new Error("STAFF_NOTIFICATION_EMAIL is required when NOTIFICATION_PROVIDER=resend");
  }

  return { provider, resendApiKey, fromEmail, staffEmails };
}
