import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="section-l steel scroll-mt-[var(--nav-h)]">
      <div className="wrap grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="text-[length:var(--text-display)] leading-none max-w-[14ch]">Send us five RFQs.</h2>
          <p className="lead text-ink-2 mt-6">
            Real ones, in whatever shape they arrived. You get priced lane tables back within 24 hours, free, and decide from there.
          </p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 grid gap-6 justify-items-start">
          <Link href="/rfq#pilot" className="btn">Start the free pilot</Link>
          <ul className="m-0 p-0 list-none grid gap-1">
            <li><a href="mailto:contact@nordneuron.com?subject=RFQ%20pilot" className="link">contact@nordneuron.com</a></li>
            <li><a href="https://www.linkedin.com/company/nordneuron/" target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2"><FaLinkedin size={14} aria-hidden="true" />LinkedIn</a></li>
            <li><a href="https://github.com/NordNeuron" target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2"><FaGithub size={14} aria-hidden="true" />GitHub</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
