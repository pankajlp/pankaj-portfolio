"use client";

import { useEffect, useRef, useState } from "react";

export default function AIAssistant() {

  const [open, setOpen] = useState(false);

  const [showHint, setShowHint] = useState(true);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<
    {
      role: string;
      content:string
       }[]>([]);
  

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage() {

    if (!message.trim()) return;

    const currentMessage = message;

    const userMessage = {
      role: "user",
      content: currentMessage,
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
          message: currentMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong while connecting to NordNeuron AI.",
        },
      ]);

      console.error(error);

    } finally {

      setLoading(false);
    }
  }

  return (
    <>
      {/* Hint Bubble */}
      {!open && showHint && (
        <div className="fixed bottom-28 right-6 z-[99] w-72 rounded-2xl border border-cyan-400/20 bg-[#050816]/95 backdrop-blur-xl px-5 py-4 shadow-[0_0_40px_rgba(34,211,238,0.15)] animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <button
            onClick={() => setShowHint(false)}
            className="absolute top-3 right-3 text-white/40 hover:text-white text-sm"
          >
            ✕
          </button>

          <p className="text-sm leading-relaxed text-white/80">
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
        className="fixed bottom-6 right-6 z-[100] h-16 px-6 rounded-full bg-cyan-400 text-black shadow-[0_0_50px_rgba(34,211,238,0.45)] flex items-center gap-2 justify-center text-lg font-semibold hover:scale-105 transition-all duration-300"
      >
        <span className="text-xl">✦</span>

        <span>Ask AI</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[100] w-[420px] max-w-[calc(100vw-24px)] h-[80vh] max-h-[720px] rounded-[32px] border border-cyan-400/20 bg-[#050816]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.12)] overflow-hidden flex flex-col">

          {/* Top */}
          <div className="px-6 py-5 border-b border-white/10 bg-black/30 shrink-0">
            
            <div className="flex items-center justify-between">
              
              <div>
                <h2 className="text-white text-xl font-semibold">
                  NordNeuron AI
                </h2>

                <p className="text-cyan-300 text-sm mt-1">
                  Enterprise Intelligence Copilot
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          {/* Suggested Prompts */}
        {messages.length === 0 && (
        <div className="px-4 pt-4 flex flex-wrap gap-3">
            
            {[
            "Explain the RFQ Intelligence Platform",
            "What technologies power NordNeuron?",
            "How does the AI workflow work?",
            "Explain the Gate Operations system",
            ].map((prompt) => (
            <button
                key={prompt}
                onClick={() => setMessage(prompt)}
                className="text-left px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.03] text-white/70 text-sm hover:border-cyan-400/30 hover:text-white transition-all duration-300"
            >
                {prompt}
            </button>
            ))}
        </div>
        )}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-4 leading-relaxed whitespace-pre-wrap text-[15px] ${
                  msg.role === "user"
                    ? "ml-auto bg-cyan-400 text-black"
                    : "bg-white/[0.05] text-white border border-white/10"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="bg-white/[0.05] border border-white/10 text-white rounded-2xl px-4 py-4 w-fit animate-pulse">
                NordNeuron AI is thinking...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-5 border-t border-white/10 bg-black/20 shrink-0">

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
                className="flex-1 rounded-2xl bg-white/[0.05] border border-white/10 px-4 py-4 text-white outline-none focus:border-cyan-400/40 placeholder:text-white/30"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="px-6 rounded-2xl bg-cyan-400 text-black font-medium hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
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