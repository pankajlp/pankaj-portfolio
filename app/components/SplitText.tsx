"use client";

interface SplitTextProps {
  text: string;
  className?: string;
  charClass?: string;
}

export default function SplitText({
  text,
  className = "",
  charClass = "char-span",
}: SplitTextProps) {
  // Split by line breaks first to preserve layout
  const lines = text.split("\n");

  return (
    <span className={`inline-block ${className}`}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden py-0.5">
          {line.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block mr-[0.25em] whitespace-nowrap overflow-hidden">
              {word.split("").map((char, charIdx) => (
                <span
                  key={charIdx}
                  className={`inline-block ${charClass}`}
                  style={{ transform: "translateY(115%)" }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
