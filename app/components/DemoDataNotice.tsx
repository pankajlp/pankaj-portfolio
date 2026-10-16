export default function DemoDataNotice({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="mb-6 text-xs uppercase tracking-wider text-[#c8a86b]">
        Illustrative demo data — not real customers, deals or results
      </p>
    );
  }

  return (
    <div className="mt-8 max-w-3xl rounded-2xl border border-[#c8a86b]/40 bg-[#c8a86b]/10 px-5 py-4 text-sm leading-relaxed text-[#f2ede3]">
      <span className="font-semibold text-[#c8a86b]">Demo data.</span>{" "}
      Every figure, company name and recommendation on this page is
      illustrative, created to show the interface. None of it describes real
      customers, carriers&apos; actual performance or real commercial results.
    </div>
  );
}
