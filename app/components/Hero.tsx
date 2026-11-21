import Link from "next/link";

const FIGURES = [
  { value: "12+", label: "AI projects" },
  { value: "3", label: "Active products" },
  { value: "LLM, BI, MLOps", label: "Core stack" },
];

export default function Hero() {
  return (
    <section className="border-b border-rule pt-[var(--nav-h)] min-h-dvh flex flex-col">
      <div className="wrap flex-1 flex flex-col justify-center py-16">
        <h1 className="max-w-[12ch] text-[length:clamp(3rem,7vw+0.5rem,7.5rem)] leading-[0.98]">Where data becomes decision.</h1>
        <p className="lead mt-6 text-ink-2">
          NordNeuron designs decision systems, logistics platforms and AI-driven operations for enterprise teams.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/#work" className="btn">Explore work</Link>
          <Link href="/contact" className="btn btn-quiet">Let’s connect</Link>
        </div>
      </div>
      <div className="border-t border-rule">
        <dl className="wrap m-0 grid grid-cols-1 sm:grid-cols-3">
          {FIGURES.map((f, i) => (
            <div key={f.label} className={`py-5 ${i ? "sm:border-l sm:border-rule sm:pl-8" : ""}`}>
              <dt className="label">{f.label}</dt>
              <dd className="m-0 mt-1 font-display text-xl text-ink tabular-nums">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
