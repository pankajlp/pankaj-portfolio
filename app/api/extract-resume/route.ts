import { NextRequest, NextResponse } from "next/server";

// Max upload size (resumes are tiny; stay well under Vercel's body limit).
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const MAX_CHARS = 20000;

function ext(name: string): string {
  const m = name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : "";
}

// Sniff the real format from the file's leading bytes, independent of its
// extension (people often rename .doc -> .docx, or a PDF with a wrong name).
type Sniffed = "pdf" | "zip" | "ole" | "rtf" | "unknown";
function sniff(buf: Buffer): Sniffed {
  if (buf.length < 4) return "unknown";
  const b = buf;
  if (b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46) return "pdf"; // %PDF
  if (b[0] === 0x50 && b[1] === 0x4b && (b[2] === 0x03 || b[2] === 0x05 || b[2] === 0x07))
    return "zip"; // PK.. (docx/xlsx/zip)
  if (b[0] === 0xd0 && b[1] === 0xcf && b[2] === 0x11 && b[3] === 0xe0) return "ole"; // legacy .doc/.xls
  if (b[0] === 0x7b && b[1] === 0x5c && b[2] === 0x72 && b[3] === 0x74) return "rtf"; // {\rt
  return "unknown";
}

function looksBinary(s: string): boolean {
  // A high share of control/replacement chars means this isn't real text.
  const sample = s.slice(0, 1000);
  let bad = 0;
  for (const ch of sample) {
    const c = ch.charCodeAt(0);
    if (c === 0xfffd || (c < 9) || (c > 13 && c < 32)) bad++;
  }
  return sample.length > 0 && bad / sample.length > 0.1;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No file was uploaded." }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: "File is too large. Please upload a resume under 5 MB." },
        { status: 400 }
      );
    }

    const name = file.name || "resume";
    const kind = ext(name);
    const buf = Buffer.from(await file.arrayBuffer());
    const sig = sniff(buf);

    let text = "";

    // ── Legacy Word / RTF: cannot parse reliably ───────────────────────────
    if (sig === "ole") {
      return NextResponse.json(
        {
          error:
            "This is an old Word .doc file (even if it's named .docx). Open it in Word or Google Docs, choose “Save as → .docx” or “Download as PDF”, then upload that — or paste the text below.",
        },
        { status: 415 }
      );
    }
    if (sig === "rtf" || kind === "rtf") {
      return NextResponse.json(
        {
          error:
            "RTF isn't supported. Please save the file as PDF or .docx, or paste the text below.",
        },
        { status: 415 }
      );
    }

    // ── PDF (by signature, or by extension if signature is missing) ────────
    if (sig === "pdf" || kind === "pdf") {
      try {
        const { extractText, getDocumentProxy } = await import("unpdf");
        const pdf = await getDocumentProxy(new Uint8Array(buf));
        const res = await extractText(pdf, { mergePages: true });
        text = Array.isArray(res.text) ? res.text.join("\n") : res.text;
      } catch {
        return NextResponse.json(
          {
            error:
              "Couldn't read that PDF — it may be scanned, image-only, or protected. Please paste the text below.",
          },
          { status: 422 }
        );
      }
    }
    // ── DOCX (real Office Open XML is a ZIP) ───────────────────────────────
    else if (sig === "zip" || kind === "docx") {
      try {
        const mammoth = (await import("mammoth")).default;
        const { value } = await mammoth.extractRawText({ buffer: buf });
        text = value;
      } catch {
        return NextResponse.json(
          {
            error:
              "Couldn't read that Word file — it may be corrupted, password-protected, or exported from another app. Try “Save as PDF”, or paste the text below.",
          },
          { status: 422 }
        );
      }
    }
    // ── Plain text ─────────────────────────────────────────────────────────
    else if (kind === "txt" || kind === "md" || file.type.startsWith("text/")) {
      text = buf.toString("utf-8");
      if (looksBinary(text)) {
        return NextResponse.json(
          {
            error:
              "That file doesn't look like readable text. Please upload a PDF or .docx, or paste the text below.",
          },
          { status: 415 }
        );
      }
    } else {
      return NextResponse.json(
        {
          error:
            "Unsupported file type. Please upload a PDF, .docx, or .txt — or paste the text below.",
        },
        { status: 415 }
      );
    }

    text = text.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

    if (text.length < 30) {
      return NextResponse.json(
        {
          error:
            "Couldn't read enough text from that file (it may be a scanned image). Please paste the text below.",
        },
        { status: 422 }
      );
    }

    return NextResponse.json({
      text: text.slice(0, MAX_CHARS),
      filename: name,
      chars: text.length,
    });
  } catch (error) {
    console.error("extract-resume error:", error);
    return NextResponse.json(
      {
        error:
          "Couldn't read that file. Please try a PDF or .docx, or paste the text below.",
      },
      { status: 500 }
    );
  }
}
