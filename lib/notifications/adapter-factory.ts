// Ported from products/atlas/atlas-os/lib/notifications/adapter-factory.ts
import { loadNotificationConfig } from "@/lib/env";
import type { EmailDeliveryAdapter } from "./adapter";
import { StubEmailAdapter } from "./stub-adapter";
import { ResendEmailAdapter } from "./resend-adapter";

let cachedAdapter: EmailDeliveryAdapter | undefined;

export function getEmailAdapter(): EmailDeliveryAdapter {
  if (cachedAdapter) return cachedAdapter;

  const config = loadNotificationConfig();

  cachedAdapter =
    config.provider === "resend"
      ? new ResendEmailAdapter(config.resendApiKey!, config.fromEmail)
      : new StubEmailAdapter();

  return cachedAdapter;
}

export function getStaffNotificationEmail(): string | undefined {
  return loadNotificationConfig().staffEmail;
}
