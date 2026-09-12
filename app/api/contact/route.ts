import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = escapeHtml(body.name);
    const company = escapeHtml(body.company);
    const role = escapeHtml(body.role);
    const email = escapeHtml(body.email);
    const website = escapeHtml(body.website);
    const industry = escapeHtml(body.industry);
    const challenge = escapeHtml(body.challenge);
    const message = escapeHtml(body.message);

    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL,
      subject: `New NordNeuron Inquiry - ${company || "General"}`,
      html: `
        <h2>New NordNeuron Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Challenge:</strong> ${challenge}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send inquiry",
      },
      {
        status: 500,
      }
    );
  }
}