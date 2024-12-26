import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendSupportEmail(data: EmailData) {
  return emailjs.send(
    EMAIL_CONFIG.SERVICE_ID,
    EMAIL_CONFIG.TEMPLATE_ID,
    {
      to_email: EMAIL_CONFIG.RECIPIENT_EMAIL,
      subject: EMAIL_CONFIG.SUBJECT,
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    }
  );
}