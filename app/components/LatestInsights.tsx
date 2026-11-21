import Link from "next/link";
import { articles } from "../lib/insights";

// Homepage teaser: the three newest articles, pulled straight from the
// shared insights list so this stays in sync with /insights automatically.
const latest = articles.slice(0, 3);

export default function LatestInsights() {
  const [lead, ...rest] = latest;
  return (
    <section id="insights" className="section scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2>Latest thinking</h2>
          <Link href="/insights" className="link">View all insights</Link>
        </div>

        <div className="grid grid-cols-1 gap-[var(--gap-columns)] lg:grid-cols-12">
          <Link href={lead.href} className="group lg:col-span-7 block border-t border-rule-2 pt-6">
            <h3 className="text-3xl md:text-4xl max-w-[22ch] transition-colors duration-200 group-hover:text-accent-2 group-active:text-accent">{lead.title}</h3>
            <p className="text-ink-2 mt-5 m-0 max-w-[60ch]">{lead.description}</p>
            <p className="meta mt-5 m-0">{`${lead.category}, ${lead.meta}`}</p>
          </Link>
          <div className="lg:col-span-5 grid content-start">
            {rest.map((article) => (
              <Link key={article.href} href={article.href} className="group block border-t border-rule-2 pt-6 pb-8">
                <h3 className="transition-colors duration-200 group-hover:text-accent-2 group-active:text-accent">{article.title}</h3>
                <p className="text-ink-2 text-sm mt-3 m-0 line-clamp-3">{article.description}</p>
                <p className="meta mt-3 m-0">{`${article.category}, ${article.meta}`}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
