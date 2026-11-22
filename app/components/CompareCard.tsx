interface CompareCardProps {
  label: string;
  question: string;
  desc: string;
  borderLeft?: boolean;
}

export default function CompareCard({
  label,
  question,
  desc,
  borderLeft,
}: CompareCardProps) {
  return (
    <div
      className={`px-6 py-5 bg-paper-3 ${
        borderLeft ? "border-l border-rule" : ""
      }`}
    >
      <div className="text-xs text-muted font-medium mb-2">
        {label}
      </div>
      <div className="font-display text-lg text-paper-3 mb-1.5">
        {question}
      </div>
      <div className="text-sm text-muted leading-[1.6]">{desc}</div>
    </div>
  );
}
