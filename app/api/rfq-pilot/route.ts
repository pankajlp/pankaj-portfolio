import { transporter, mailFrom, mailTo } from "../../lib/mailer";
import { NextResponse } from "next/server";

// Keep in step with MAX_TOTAL_BYTES in app/rfq/RfqPilotForm.tsx.
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const MAX_FILES = 10;

function escapeHtml(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function field(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const name = field(form, "name");
    const company = field(form, "company");
    const email = field(form, "email");
    const phone = field(form, "phone");
    const message = field(form, "message");

    if (!name || !company || !email) {
      return NextResponse.json(
        { success: false, message: "Name, company and email are required." },
        { status: 400 }
      );
    }

    const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
    const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

    if (files.length > MAX_FILES || totalBytes > MAX_TOTAL_BYTES) {
      return NextResponse.json(
        {
          success: false,
          message: `Please send at most ${MAX_FILES} files and 4 MB in total, or email the rest to contact@nordneuron.com.`,
        },
        { status: 413 }
      );
    }

    const attachments = await Promise.all(
      files.map(async (f) => ({
        filename: f.name,
        content: Buffer.from(await f.arrayBuffer()),
        contentType: f.type || undefined,
      }))
    );

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `RFQ Pilot Request - ${company} (${files.length} file${files.length === 1 ? "" : "s"})`,
      html: `
        <h2>New RFQ Pilot Request</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Files:</strong> ${files.map((f) => escapeHtml(f.name)).join(", ") || "none"}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Failed to send. Please try again or email contact@nordneuron.com." },
      { status: 500 }
    );
  }
}
