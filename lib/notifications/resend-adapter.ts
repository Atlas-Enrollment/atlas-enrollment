// Ported from products/atlas/atlas-os/lib/notifications/adapters/resend-adapter.ts
// — same Resend REST call, same success/failure logging convention, adapted
// from atlas-os's case-notification `Notification` shape to this module's
// simpler `EmailMessage` shape (this site only ever sends one kind of email:
// a new consultation request).
import type { DeliveryResult, EmailDeliveryAdapter, EmailMessage } from "./adapter";

const RESEND_API = "https://api.resend.com/emails";

interface ResendResponse {
  id?: string;
  name?: string;
  message?: string;
}

export class ResendEmailAdapter implements EmailDeliveryAdapter {
  constructor(
    private readonly apiKey: string,
    private readonly fromEmail: string
  ) {}

  async send(message: EmailMessage): Promise<DeliveryResult> {
    if (!message.recipientEmail) {
      return { success: false, error: "no_recipient_email" };
    }

    try {
      const response = await fetch(RESEND_API, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: this.fromEmail,
          to: [message.recipientEmail],
          subject: message.subject,
          text: message.body
        })
      });

      const data = (await response.json()) as ResendResponse;

      if (!response.ok) {
        const error = data.message ?? `HTTP ${response.status}`;
        console.error(`[notification:resend] delivery failed id=${message.id} error=${error}`);
        return { success: false, error };
      }

      console.info(`[notification:resend] sent id=${message.id} messageId=${data.id}`);
      return { success: true, messageId: data.id };
    } catch (err) {
      const error = err instanceof Error ? err.message : "unknown";
      console.error(`[notification:resend] fetch error id=${message.id} error=${error}`);
      return { success: false, error };
    }
  }
}
