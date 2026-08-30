"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIAssistant() {

  const [open, setOpen] = useState(false);

  const [showHint, setShowHint] = useState(true);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(customMessage?: string) {

    const finalMessage =
      typeof customMessage === "string"
        ? customMessage
        : message;

    if (!finalMessage.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: finalMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    setLoading(true);

    try {

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: finalMessage,
        }),
      });

      const data = await res.json();

      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "NordNeuron AI is currently experiencing high traffic. Please try again in a moment.",
        },
      ]);

    } finally {

      setLoading(false);
    }
  }

  return (
    <>
      {/* Hint Bubble */}
      {!open && showHint && (
        <div className="fixed bottom-28 right-6 z-[99] w-72 rounded-2xl border border-white/10 bg-[#0d0d12]/95 backdrop-blur-xl px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-4 duration-500">

          <button
            onClick={() => setShowHint(false)}
            className="absolute top-3 right-3 text-zinc-500 hover:text-white text-sm"
          >
            ✕
          </button>

          <p className="text-sm leading-relaxed text-zinc-300">
            Ask me about AI systems, logistics intelligence,
            Power BI dashboards, automation workflows,
            or enterprise architecture.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowHint(false);
        }}
        className="fixed bottom-6 right-6 z-[100] h-16 px-6 rounded-full bg-[#22d3ee] text-[#041014] shadow-[0_0_28px_rgba(34,211,238,0.4)] flex items-center gap-2 justify-center text-lg font-semibold hover:scale-105 transition-all duration-300"
      >
        <span className="text-xl">✦</span>

        <span>Ask AI</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[100] w-[420px] max-w-[calc(100vw-24px)] h-[80vh] max-h-[720px] rounded-[32px] border border-white/10 bg-[#0a0a0e]/95 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">

          {/* Header */}
          <div className="px-6 py-5 border-b border-white/[0.08] bg-white/[0.02] shrink-0">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-white text-xl font-semibold flex items-center gap-2">
                  <span className="text-[#22d3ee]">✦</span> NordNeuron AI
                </h2>

                <p className="text-zinc-500 text-sm mt-1">
                  Enterprise Intelligence Assistant
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Suggested Prompts */}
          {messages.length === 0 && (
            <div className="px-4 pt-4 flex flex-wrap gap-3 shrink-0">
              
              {[
                "Explain the RFQ Intelligence Platform",
                "What technologies power NordNeuron?",
                "How does the AI workflow work?",
                "Explain the Gate Operations system",
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="text-left px-4 py-2.5 rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300 text-[13px] hover:border-[#22d3ee]/40 hover:text-white transition-all duration-300"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-4 leading-relaxed whitespace-pre-wrap text-[15px] ${
                  msg.role === "user"
                    ? "ml-auto bg-[#22d3ee] text-[#041014] font-medium"
                    : "bg-white/[0.04] text-zinc-200 border border-white/10"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="bg-white/[0.04] border border-white/10 text-zinc-400 rounded-2xl px-4 py-4 w-fit animate-pulse">
                NordNeuron AI is thinking...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-5 border-t border-white/[0.08] bg-white/[0.02] shrink-0">

            <div className="flex gap-3">

              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask about AI systems..."
                className="flex-1 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-4 text-white outline-none focus:border-[#22d3ee]/50 placeholder:text-zinc-500"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="px-6 rounded-2xl bg-[#22d3ee] text-[#041014] font-medium hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}