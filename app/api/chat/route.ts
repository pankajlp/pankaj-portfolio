import { NextRequest, NextResponse } from "next/server";

import { GoogleGenAI } from "@google/genai";

import { knowledgeBase } from "@/app/data/knowledge";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const userMessage = body.message;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: `
${knowledgeBase}

Answer as NordNeuron AI.

Guidelines:
- Be concise
- Be technically strong
- Sound enterprise-focused
- Explain systems clearly
- Avoid hallucinating fake clients
`,
      },
    });

    return NextResponse.json({
      response: response.text,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        response:
          "Something went wrong while connecting to NordNeuron AI.",
      },
      {
        status: 500,
      }
    );
  }
}