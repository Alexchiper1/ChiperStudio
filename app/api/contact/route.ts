import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  businessName?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resendApiKey = process.env.RESEND_API_KEY;
const enquiryRecipient =
  process.env.ENQUIRY_TO_EMAIL ?? "alexchiper20@gmail.com";
const enquiryFromEmail =
  process.env.ENQUIRY_FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const name = body.name?.trim();
  const email = body.email?.trim();
  const businessName = body.businessName?.trim();
  const message = body.message?.trim();

  if (!name || !email || !businessName || !message) {
    return NextResponse.json(
      { message: "Please complete all fields before sending your enquiry." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          "Email sending is not configured yet. Add your RESEND_API_KEY to enable enquiries.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: `Chiper Studio <${enquiryFromEmail}>`,
      to: [enquiryRecipient],
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${businessName}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 16px;">New enquiry from Chiper Studio</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Business:</strong> ${escapeHtml(businessName)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({
      message:
        "Thanks, your enquiry was sent successfully. I will get back to you as soon as possible.",
    });
  } catch (error) {
    console.error("Failed to send enquiry email", error);

    return NextResponse.json(
      {
        message:
          "Your enquiry could not be sent right now. Please try again in a moment or email me directly.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
