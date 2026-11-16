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
        <div className="fixed bottom-28 right-6 z-[99] w-72 rounded-card border border-rule-2 bg-paper-2 px-5 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">

          <button
            onClick={() => setShowHint(false)}
            aria-label="Dismiss"
            className="absolute top-0 right-0 w-11 h-11 inline-flex items-center justify-center text-muted hover:text-ink active:text-accent text-sm"
          >
            <span aria-hidden="true">✕</span>
          </button>

          <p className="text-sm leading-relaxed text-ink-2">
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
        className="btn fixed bottom-6 right-6 z-[100]"
      >
        <span aria-hidden="true">✦</span>

        <span>Ask AI</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[100] w-[420px] max-w-full max-w-[calc(100vw-24px)] h-[80vh] max-h-[720px] rounded-card border border-rule-2 bg-paper overflow-hidden flex flex-col">

          {/* Header */}
          <div className="px-6 py-5 border-b border-rule bg-paper-2 shrink-0">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-ink text-xl font-semibold flex items-center gap-2">
                  <span className="text-accent">✦</span> NordNeuron AI
                </h2>

                <p className="text-muted text-sm mt-1">
                  Enterprise Intelligence Assistant
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="btn btn-quiet btn-sm w-11 px-0"
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
                  className="text-left px-4 py-2.5 rounded-control border border-rule-2 bg-paper-2 text-ink-2 text-sm hover:border-accent/40 hover:text-ink transition duration-300"
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
                className={`max-w-[85%] rounded-control px-4 py-4 leading-relaxed whitespace-pre-wrap text-md ${
                  msg.role === "user"
                    ? "ml-auto bg-accent text-accent-ink font-medium"
                    : "bg-paper-2 text-ink border border-rule-2"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="bg-paper-2 border border-rule-2 text-ink-2 rounded-control px-4 py-4 w-fit animate-pulse">
                NordNeuron AI is thinking…
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-5 border-t border-rule bg-paper-2 shrink-0">

            <div className="flex gap-3">

              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask about AI systems…"
                className="flex-1 rounded-card bg-paper-2 border border-rule-2 px-4 py-4 text-ink placeholder:text-muted"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="btn"
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