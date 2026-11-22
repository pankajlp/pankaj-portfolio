"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED = [
  "How does the free RFQ pilot work?",
  "What file formats can I send?",
  "How do you keep our rates private?",
  "What is the RFQ Intelligence Platform?",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, loading]);

  // Focus the input on open; Escape closes and returns focus to the button.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function sendMessage(customMessage?: string) {
    const finalMessage = typeof customMessage === "string" ? customMessage : message;
    if (!finalMessage.trim() || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: finalMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: finalMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "The assistant couldn't be reached. Try again, or email contact@nordneuron.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="nn-assistant"
        aria-label={open ? "Close assistant" : "Ask about the RFQ pilot"}
        className="btn btn-quiet fixed bottom-4 right-4 z-[100] bg-paper-2 sm:bottom-6 sm:right-6"
      >
        {open ? <X size={18} aria-hidden="true" /> : <MessageCircle size={18} aria-hidden="true" />}
        <span className="hidden sm:inline">{open ? "Close" : "Ask a question"}</span>
      </button>

      {open && (
        <div
          id="nn-assistant"
          role="dialog"
          aria-label="NordNeuron assistant"
          className="fixed inset-x-2 bottom-20 top-[calc(var(--nav-h)+8px)] z-[100] flex flex-col overflow-hidden rounded-card border border-rule-2 bg-paper sm:inset-x-auto sm:right-6 sm:bottom-24 sm:top-auto sm:h-[min(70vh,640px)] sm:w-[400px]"
        >
          <div className="shrink-0 border-b border-rule bg-paper-2 px-5 py-4">
            <h2 className="text-lg font-semibold">Ask NordNeuron</h2>
            <p className="meta mt-1">About the RFQ pilot, the work, or how your data is handled.</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.length === 0 && (
              <ul className="m-0 grid list-none gap-2 p-0">
                {SUGGESTED.map((prompt) => (
                  <li key={prompt}>
                    <button
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="w-full rounded-control border border-rule-2 bg-paper-2 px-4 py-3 text-left text-sm text-ink-2 transition-colors duration-200 hover:border-muted hover:text-ink"
                    >
                      {prompt}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[88%] whitespace-pre-wrap rounded-control px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-accent font-medium text-accent-ink"
                    : "border border-rule-2 bg-paper-2 text-ink"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <p role="status" className="meta w-fit rounded-control border border-rule-2 bg-paper-2 px-4 py-3">
                Writing an answer…
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            className="flex shrink-0 gap-2 border-t border-rule bg-paper-2 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <label htmlFor="nn-assistant-input" className="visually-hidden">Your question</label>
            <input
              ref={inputRef}
              id="nn-assistant-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question"
              autoComplete="off"
              enterKeyHint="send"
              className="min-w-0 flex-1"
            />
            <button type="submit" disabled={loading || !message.trim()} className="btn w-12 px-0" aria-label="Send question">
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
