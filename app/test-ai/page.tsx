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
    <main className="min-h-dvh bg-paper text-ink p-10">
      
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-10">
          Test NordNeuron AI
        </h1>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          className="w-full h-40 rounded-card bg-paper-3 border border-rule-2 p-5"
        />

        <button
          onClick={sendMessage}
          className="mt-6 px-8 py-4 rounded-card bg-paper-3 text-ink hover:bg-paper-3 hover:text-ink font-medium transition duration-300"
        >
          Send
        </button>

        <div className="mt-10 p-6 rounded-card border border-rule-2 bg-paper-3 whitespace-pre-wrap leading-relaxed">
          {response}
        </div>
      </div>
    </main>
  );
}