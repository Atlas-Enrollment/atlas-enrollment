// Scoped-down version of products/atlas/atlas-os/lib/config/env.ts's
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

function getStaffNotificationEmail(): string | undefined {
  return process.env.STAFF_NOTIFICATION_EMAIL;
}

export function loadNotificationConfig() {
  const provider = getNotificationProvider();
  const resendApiKey = getResendApiKey();
  const fromEmail = getNotificationFromEmail();
  const staffEmail = getStaffNotificationEmail();

  if (provider === "resend" && !resendApiKey) {
    throw new Error("RESEND_API_KEY is required when NOTIFICATION_PROVIDER=resend");
  }
  if (provider === "resend" && !staffEmail) {
    throw new Error("STAFF_NOTIFICATION_EMAIL is required when NOTIFICATION_PROVIDER=resend");
  }

  return { provider, resendApiKey, fromEmail, staffEmail };
}
