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
      className={`px-6 py-5 bg-white ${
        borderLeft ? "border-l border-black/10" : ""
      }`}
    >
      <div className="text-[10px] uppercase tracking-[0.08em] text-[#9a9a92] font-medium mb-2">
        {label}
      </div>
      <div className="font-serif text-[18px] text-[#1a1a18] mb-1.5">
        {question}
      </div>
      <div className="text-[13px] text-[#5a5a54] leading-[1.6]">{desc}</div>
    </div>
  );
}
