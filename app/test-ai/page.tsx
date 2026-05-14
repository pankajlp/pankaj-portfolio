"use client";

import { useState } from "react";

export default function TestAIPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function sendMessage() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setResponse(data.response);
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-5xl font-bold mb-10">
          Test NordNeuron AI
        </h1>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          className="w-full h-40 rounded-2xl bg-white/10 border border-white/10 p-5 outline-none"
        />

        <button
          onClick={sendMessage}
          className="mt-6 px-8 py-4 rounded-2xl bg-cyan-400 text-black font-medium"
        >
          Send
        </button>

        <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/[0.03] whitespace-pre-wrap leading-relaxed">
          {response}
        </div>
      </div>
    </main>
  );
}