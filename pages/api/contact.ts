import type { NextApiRequest, NextApiResponse } from "next";
import { Recipient, EmailParams, MailerSend, Sender } from "mailersend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    const mailersend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!,
    });

    const recipients = [new Recipient("yanabourne@bourne.cc", "Yana Bourne")];
    const replyTo = new Recipient(email, name);

    const emailParams = new EmailParams()

      .setFrom(new Sender(process.env.MAILERSEND_FROM_EMAIL!, "Contact Form"))
      .setTo(recipients)
      .setReplyTo(replyTo)
      .setSubject(`New Contact Form Submission from ${name}`).setText(`
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `);

    await mailersend.email.send(emailParams);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
}
