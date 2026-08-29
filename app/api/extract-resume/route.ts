import { NextRequest, NextResponse } from "next/server";

// Max upload size (resumes are tiny; stay well under Vercel's body limit).
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const MAX_CHARS = 20000;

function ext(name: string): string {
  const m = name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : "";
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { error: "No file was uploaded." },
        { status: 400 }
      );
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

    let text = "";

    if (kind === "pdf" || file.type === "application/pdf") {
      const { extractText, getDocumentProxy } = await import("unpdf");
      const pdf = await getDocumentProxy(new Uint8Array(buf));
      const res = await extractText(pdf, { mergePages: true });
      text = Array.isArray(res.text) ? res.text.join("\n") : res.text;
    } else if (
      kind === "docx" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const mammoth = (await import("mammoth")).default;
      const { value } = await mammoth.extractRawText({ buffer: buf });
      text = value;
    } else if (kind === "txt" || kind === "md" || file.type.startsWith("text/")) {
      text = buf.toString("utf-8");
    } else if (kind === "doc") {
      return NextResponse.json(
        {
          error:
            "Old .doc files aren't supported — please save as .docx or PDF, or paste the text.",
        },
        { status: 415 }
      );
    } else {
      return NextResponse.json(
        {
          error:
            "Unsupported file type. Please upload a PDF, DOCX, or TXT — or paste the text.",
        },
        { status: 415 }
      );
    }

    text = text.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

    if (text.length < 30) {
      return NextResponse.json(
        {
          error:
            "Couldn't read enough text from that file (it may be a scanned image). Please paste the text instead.",
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
          "Couldn't read that file. Please try a different format or paste the text.",
      },
      { status: 500 }
    );
  }
}
