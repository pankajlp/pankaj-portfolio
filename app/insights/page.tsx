import Link from "next/link";
import Image from "next/image";
import { articles } from "../lib/insights";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#0c0b0a] text-[#efe9df] font-sans">
      
      {/* Clean Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0c0b0a]/85 backdrop-blur-md border-b border-white/10 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Accent Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#c8a86b] text-[#171310] shadow-[0_0_8px_rgba(120, 113, 108,0.3)]" />
            <span className="text-[17px] font-bold tracking-tight font-serif text-[#f2ede3]">
              NordNeuron
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#a89f8f] hover:text-[#f2ede3] transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>←</span> Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-white/10 pb-10">
          <h1 className="text-4xl md:text-4xl font-bold font-serif tracking-tight text-[#f2ede3]">
            Insights
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#8a8175] leading-relaxed max-w-2xl">
            Field notes, essays, and analysis exploring AI-native systems,
            logistics intelligence, and modern enterprise architecture.
          </p>
        </div>

        {/* Medium-style Articles Feed */}
        <div className="divide-y divide-white/10">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block py-10 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-6 md:gap-10">
                
                {/* Left Side: Content */}
                <div className="flex-1 space-y-2.5">
                  
                  {/* Category and Date */}
                  <div className="flex items-center gap-2 text-[13px] text-[#8a8175]">
                    <span className="font-semibold text-[#f2ede3]/80">{article.category}</span>
                    <span>·</span>
                    <span>{article.meta.split(" · ")[0]}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold font-serif text-[#f2ede3] group-hover:text-[#f2ede3] transition-colors duration-300 leading-snug">
                    {article.title}
                  </h2>

                  {/* Subtitle / Description */}
                  <p className="text-[#8a8175] text-sm md:text-base leading-relaxed line-clamp-2">
                    {article.description}
                  </p>

                  {/* Read Time */}
                  <div className="pt-1 text-[13px] text-[#8a8175]">
                    {article.meta.split(" · ")[1]}
                  </div>

                </div>

                {/* Right Side: Small Square Thumbnail */}
                <div className="relative w-full md:w-36 h-40 md:h-28 shrink-0 overflow-hidden rounded-lg bg-[#16130f] border border-white/10">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "radial-gradient(circle at 50% 40%, rgba(200,168,107,0.12) 0%, transparent 70%)" }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#c8a86b] shadow-[0_0_10px_rgba(200,168,107,0.5)] group-hover:scale-125 transition-transform duration-500" />
                    </div>
                  )}
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}