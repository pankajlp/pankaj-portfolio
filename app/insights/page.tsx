import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles } from "../lib/insights";

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-paper text-ink pt-[var(--nav-h)]">
        <section className="wrap pt-20 pb-12 md:pt-24 md:pb-16">
          <h1>Insights</h1>
          <p className="lead mt-6 text-ink-2">
            Field notes, essays, and analysis exploring AI-native systems,
            logistics intelligence, and modern enterprise architecture.
          </p>
        </section>

        <section className="wrap pb-[var(--section-gap-s)]">
          <div className="rows">
            {articles.map((article) => (
              <Link key={article.href} href={article.href} className="group grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-5 md:grid-cols-12 py-10 items-start">
                <div className="md:col-span-8">
                  <h2 className="text-3xl md:text-4xl max-w-[26ch] transition-colors duration-200 group-hover:text-accent-2 group-active:text-accent">
                    {article.title}
                  </h2>
                  <p className="text-ink-2 mt-4 max-w-[60ch] line-clamp-3">{article.description}</p>
                  <p className="meta mt-4 m-0">{article.category}, {article.meta}</p>
                </div>
                {article.image && (
                  <div className="relative md:col-span-4 aspect-[3/2] overflow-hidden rounded-card border border-rule">
                    <Image src={article.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
