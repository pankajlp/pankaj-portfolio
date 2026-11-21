export default function DemoDataNotice({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="mb-6 text-xs text-accent">
        Illustrative demo data, not real customers, deals or results
      </p>
    );
  }

  return (
    <div className="mt-8 max-w-3xl rounded-card border border-accent/40 bg-accent-wash px-5 py-4 text-sm leading-relaxed text-ink">
      <span className="font-semibold text-accent">Demo data.</span>{" "}
      Every figure, company name and recommendation on this page is
      illustrative, created to show the interface. None of it describes real
      customers, carriers&apos; actual performance or real commercial results.
    </div>
  );
}
