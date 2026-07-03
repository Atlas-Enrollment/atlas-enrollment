// Ported from products/atlas/atlas-os/lib/notifications/adapters/stub-adapter.ts
import type { DeliveryResult, EmailDeliveryAdapter, EmailMessage } from "./adapter";

export class StubEmailAdapter implements EmailDeliveryAdapter {
  async send(message: EmailMessage): Promise<DeliveryResult> {
    console.info(
      `[notification:stub] would send email\n` +
        `  id:      ${message.id}\n` +
        `  to:      ${message.recipientEmail}\n` +
        `  subject: ${message.subject}`
    );

    return { success: true, messageId: `stub_${message.id}` };
  }
}
