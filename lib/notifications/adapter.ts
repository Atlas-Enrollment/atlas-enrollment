export interface EmailMessage {
  id: string;
  recipientEmails: string[];
  subject: string;
  body: string;
}

export interface DeliveryResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface EmailDeliveryAdapter {
  send(message: EmailMessage): Promise<DeliveryResult>;
}
