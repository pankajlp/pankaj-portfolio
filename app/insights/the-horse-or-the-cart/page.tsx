"use client";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <main className="min-h-screen bg-[#0c0b0a] text-[#efe9df]">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/10 z-[200]">
        <div
          className="h-full bg-[#c8a86b] text-[#171310] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Clean Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0c0b0a]/85 backdrop-blur-md border-b border-white/10 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c8a86b] text-[#171310] shadow-[0_0_8px_rgba(120, 113, 108,0.3)]" />
            <span className="text-[17px] font-bold tracking-tight font-serif text-[#f2ede3]">
              NordNeuron
            </span>
          </a>
          <a
            href="/insights"
            className="text-sm font-medium text-[#a89f8f] hover:text-[#f2ede3] transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>←</span> Back to Insights
          </a>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-[#f2ede3] border border-white/10 text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          AI Economics
        </div>

        {/* Title */}
        <h1 className="text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.03em] font-serif text-[#efe9df]">
          Are We the Horse or the Cart? Employment After AI&apos;s Exponential Curve
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[19px] leading-[1.7] text-[#8a8175] italic">
          The last time a general-purpose technology arrived this fast, it displaced an entire species of worker inside a single generation. Whether AI does the same to us turns on one question the optimists and the doomers are quietly asking in different words.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-white/10 text-[13px] text-[#8a8175] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>September 2026</span>
          <span>•</span>
          <span>9 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
          <p>
            Every wave of automation for two centuries has been met with the same reassurance, and the reassurance has mostly been right: technology destroys particular jobs but creates more than it removes, because it makes human labor more valuable, not less. The weavers who smashed the looms were wrong about the aggregate. The clerks displaced by the spreadsheet mostly moved up into work the spreadsheet created. This is the strongest pattern in the economic history of technology, and it is the reason serious economists roll their eyes at each new round of &quot;this time is different.&quot;
          </p>

          <p>
            But there is one case the reassurance does not cover, and it is the one people reach for when they get nervous: the horse. For most of human history the horse was the core of the transport and power economy. Then, over roughly three decades, a better general-purpose technology arrived, and the horse was not retrained into a new role. It was retired. The number of working horses did not dip and recover — it collapsed and never came back. The horse is the standing proof that a technological transition can permanently remove a class of worker rather than promote it, and it is exactly the analogy the AI debate cannot stop returning to.
          </p>

          <p>
            So the honest version of the question about AI and employment is not &quot;will there be jobs.&quot; It is narrower and sharper: in the transition now underway, are humans the <em>cart</em> — the thing carried forward and made faster by the new machine — or are we the <em>horse</em>, the thing the new machine was built to replace? The optimists and the pessimists, Elon Musk and the labor economists alike, are all really arguing about which of those two precedents applies.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            What actually happened when the cart became the car
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              The transition is worth getting right, because it is usually told as a myth. The famous story — that 1890s cities were forecast to drown under nine feet of horse manure by the 1930s, and the automobile arrived just in time — is largely apocryphal; the specific prediction has never been reliably sourced. But the underlying strain was real. A city like New York ran on well over a hundred thousand horses, each producing tens of pounds of manure a day, and ever more farmland was being turned over to feeding them instead of feeding people. The horse economy was hitting real limits when the alternative appeared.
            </p>

            <p>
              Then the curve bent, fast. Ford was founded in 1903, the year Americans bought about eleven thousand cars; the moving assembly line arrived in 1913 and cut the build time of a Model T from roughly twelve hours to ninety minutes. The U.S. horse and mule population peaked at around 26 million in 1915 and then fell off a cliff — to 7.6 million by 1950, about 3 million by 1960. Horse-drawn trolleys were gone from most cities within a couple of decades; by 1902 the overwhelming majority of America&apos;s streetcar track already ran on electricity.
            </p>

            <p>
              Here is the part that matters for the analogy, and it cuts both ways. For <em>humans</em>, the transition was net job creation on a historic scale. The trades that vanished were real and specific — teamsters, farriers, harness and carriage makers, stable hands, the men who hauled the manure — and the shops that had sold saddlery and wagons on the main street simply refilled with tires, batteries, and carburetors. A generation of new work appeared: assembly-line workers, mechanics, road-builders, oil and steel and rubber, the whole motel-and-diner economy the car made possible. The displaced worker&apos;s children moved up. For the <em>horse</em>, the same transition was extinction as a category of labor. Same event, opposite outcomes, decided entirely by which side of the substitution you were on.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The horse is the analogy nobody wants to be
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Why did humans get promoted and horses get retired by the same machine? Because the car replaced the horse&apos;s <em>entire</em> economic function — pulling and carrying — while it only replaced <em>part</em> of the human&apos;s. The car still needed a human to drive it, fix it, build it, route it, sell it, and finance it. Human labor moved up the stack to the tasks the machine could not yet do; the horse had no higher stack to move up to. Its one marketable capability had a superior substitute, and it possessed nothing else to sell.
            </p>

            <p>
              The economist Wassily Leontief made this point sharply in 1983, and it has aged into the central worry of the AI era: the role of humans as the most important factor of production, he warned, was bound to diminish the way the role of horses first diminished and then disappeared — precisely because the horse&apos;s problem was not a lack of retraining programs but a lack of any remaining function only it could perform. The uncomfortable question AI raises is whether it, unlike every previous technology, eventually substitutes for the general-purpose cognitive layer humans have always retreated <em>into</em> when machines took the layer below. If the new machine can also do the driving, the fixing, the routing, and the selling, the historical escape route — move up to what the machine can&apos;t do — starts to run out of room.
            </p>

            <p>
              This is not a prediction that it will happen. It is a statement of what would have to be true for the pessimistic case to be the right one: AI would need to be not another tool that raises the value of human judgment, but a general substitute for judgment itself. Every serious disagreement about AI and employment is, underneath, a disagreement about whether that line gets crossed — and if so, how fast.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            Musk&apos;s answer: assume we are the horse, and pay everyone
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Elon Musk has taken the pessimistic premise and tried to route around it to a utopian conclusion. His position, stated repeatedly through 2025 and 2026, is that AI and robotics will make paid work essentially optional within ten to twenty years, and that the answer is not to protect jobs but to detach income from them. He calls it &quot;universal high income&quot; — deliberately not <em>basic</em> income — arguing that an economy where machines produce goods and services faster than money is printed can afford to make everyone materially comfortable, and that people will one day not need to save at all. The post where he laid this out drew tens of millions of views, which says something about how much appetite there is for a version of the horse scenario that ends well.
            </p>

            <p>
              It is worth taking seriously and worth being skeptical of in equal measure. Musk is essentially conceding the horse case — that humans will be substituted out of production — and betting that abundance makes that acceptable. The obvious objections are the ones critics have already raised: there is no concrete mechanism or funding model on the table, only a thesis; a program of that scale could as easily produce fiscal collapse as post-scarcity; and it assumes away the possibility, favored by most economists, that AI keeps generating new human work faster than it removes the old. &quot;Universal high income&quot; is less a plan than a wager that the transition will be so total that only a wholesale redesign of how income works can catch it.
            </p>

            <p>
              What makes the position notable is not its plausibility but its structure. It is the first widely-heard proposal that starts from the assumption we are the horse and asks what a humane retirement would look like — rather than insisting, as the reassuring tradition does, that we will always turn out to be the cart.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The serious forecasters disagree with each other by 20x
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Step from Musk to the professional forecasters and the striking thing is not that they disagree with him — it is how violently they disagree with <em>each other</em>. Dario Amodei, Anthropic&apos;s CEO, spent 2025 warning that AI could eliminate as much as half of entry-level white-collar work within a few years and push U.S. unemployment to 10–20%, in what he said could &quot;feel like a depression&quot;; by 2026 he was noticeably reframing the story from jobs vanishing toward jobs transforming and multiplying. Geoffrey Hinton expects heavy automation of routine cognitive work by the late 2020s and early 2030s, with the gains flowing to a minority and inequality widening. Against them, Goldman Sachs models AI adoption as gradual — the way every prior general-purpose technology actually diffused — and the World Economic Forum&apos;s 2025 Future of Jobs report, surveying employers of some 14 million workers, projects 92 million roles displaced by 2030 against 170 million created, a net gain of 78 million.
            </p>

            <p>
              Sit those side by side and the spread is the finding. Goldman&apos;s benign, gradual path and Amodei&apos;s 10–20% unemployment are separated by something like a factor of twenty — a range between two credible institutions that is simply not normal for economic forecasting, where serious estimates of the same quantity usually land within a factor of two or three. The measurable data so far is early and modest: on the order of 55,000 U.S. job cuts were linked to AI in 2025 and perhaps 30,000 more in early 2026, and most displaced workers are moving to adjacent roles rather than out of the workforce. That is real but small, and it is consistent with almost any of the forecasts — which is exactly why the forecasts can be so far apart.
            </p>

            <p>
              What that 20x gap actually encodes is a disagreement about <em>speed</em>, not direction. Nearly everyone agrees AI will displace specific work and create new work; the fight is over whether the two curves overlap smoothly, as they did across the horse-to-car transition&apos;s comfortable three decades, or whether displacement arrives years ahead of the new roles and opens a gap wide enough to feel like a crisis while it lasts. The horse transition was survivable for humans in part because it took thirty years. Compress the same net change into five, and a net-positive outcome can still be a brutal decade in the middle.
            </p>
          </div>
        </section>

        {/* Spectrum diagram */}
        <figure className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-7">
          <svg
            viewBox="0 0 680 210"
            role="img"
            aria-label="A spectrum of stated 2025–26 positions on AI-driven labor displacement, from gradual and net-positive to rapid and work-displacing. Goldman Sachs sits at the gradual end and the World Economic Forum near it as net-positive; Hinton, Amodei, and Musk sit progressively toward rapid, large-scale displacement."
            className="w-full h-auto"
            style={{ maxWidth: "100%" }}
          >
            <defs>
              <linearGradient id="spec" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="640" y2="0">
                <stop offset="0" stopColor="#3a352c" />
                <stop offset="1" stopColor="#c8a86b" />
              </linearGradient>
            </defs>

            {/* axis */}
            <line x1="40" y1="150" x2="640" y2="150" stroke="url(#spec)" strokeWidth="3" />
            <text x="40" y="178" fill="#8a8175" fontSize="11">Gradual · net-positive</text>
            <text x="640" y="178" fill="#d8bd86" fontSize="11" textAnchor="end">Rapid · work-displacing</text>

            {/* markers: connector + dot + name + note */}
            {/* Goldman @120 (upper) */}
            <line x1="120" y1="150" x2="120" y2="86" stroke="#34302a" strokeWidth="1" />
            <circle cx="120" cy="150" r="4.5" fill="#c8a86b" />
            <text x="120" y="72" fill="#e7e0d2" fontSize="12" textAnchor="middle" fontWeight="600">Goldman</text>
            <text x="120" y="86" fill="#8a8175" fontSize="10" textAnchor="middle">gradual</text>

            {/* WEF @225 (lower) */}
            <line x1="225" y1="150" x2="225" y2="116" stroke="#34302a" strokeWidth="1" />
            <circle cx="225" cy="150" r="4.5" fill="#c8a86b" />
            <text x="225" y="112" fill="#e7e0d2" fontSize="12" textAnchor="middle" fontWeight="600">WEF</text>
            <text x="225" y="126" fill="#8a8175" fontSize="10" textAnchor="middle">net +78M by 2030</text>

            {/* Hinton @430 (upper) */}
            <line x1="430" y1="150" x2="430" y2="86" stroke="#34302a" strokeWidth="1" />
            <circle cx="430" cy="150" r="4.5" fill="#c8a86b" />
            <text x="430" y="72" fill="#e7e0d2" fontSize="12" textAnchor="middle" fontWeight="600">Hinton</text>
            <text x="430" y="86" fill="#8a8175" fontSize="10" textAnchor="middle">disruptive</text>

            {/* Amodei @515 (lower) */}
            <line x1="515" y1="150" x2="515" y2="116" stroke="#34302a" strokeWidth="1" />
            <circle cx="515" cy="150" r="4.5" fill="#c8a86b" />
            <text x="515" y="112" fill="#e7e0d2" fontSize="12" textAnchor="middle" fontWeight="600">Amodei</text>
            <text x="515" y="126" fill="#8a8175" fontSize="10" textAnchor="middle">~50% entry-level</text>

            {/* Musk @605 (upper) */}
            <line x1="605" y1="150" x2="605" y2="86" stroke="#34302a" strokeWidth="1" />
            <circle cx="605" cy="150" r="4.5" fill="#c8a86b" />
            <text x="605" y="72" fill="#e7e0d2" fontSize="12" textAnchor="middle" fontWeight="600">Musk</text>
            <text x="605" y="86" fill="#8a8175" fontSize="10" textAnchor="middle">work optional</text>
          </svg>
          <figcaption className="mt-5 text-[13px] leading-[1.7] text-[#8a8175] italic">
            A schematic of stated 2025–26 positions, not a quantified index. Note that Musk and Amodei sit near each other on <em>how much</em> displacement they expect while disagreeing entirely on the remedy — universal income versus reskilling and new-role creation. The width of this line is the real story: the professionals do not agree on the speed, and the speed is what decides whether the transition feels like progress or like a crisis.
          </figcaption>
        </figure>

        {/* Section 5 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            What to do while the question is still open
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              <strong>Bet on complementarity, not replacement — but watch the line.</strong> For now, the workers pulling ahead are the ones using AI to do more, not the ones it does without. That is the cart outcome, and it is the right thing to organize around today. The signal to watch is whether AI stops needing a human in the loop for whole categories of judgment, because that is the moment the cart argument weakens and the horse argument gains ground. Track the capability, not the rhetoric.
            </p>

            <p>
              <strong>Treat speed as the variable that matters.</strong> Almost no one disputes that new work will eventually appear; the danger lives entirely in the lag between old roles going and new ones arriving. Plan for the gap, not the endpoint — an economy that ends up net-positive can still put a lot of people through a hard few years on the way there. Resilience is about surviving the middle of the curve.
            </p>

            <p>
              <strong>Don&apos;t demand to see the new jobs before you believe in them.</strong> The teamster could not have described &quot;web developer,&quot; and no one in 1913 was training for the motel economy. New work has always been unnameable in advance, which means its current invisibility is weak evidence either way. Build the general capacity to move — adjacency, learning speed, judgment — rather than betting on a specific safe role, because the safe roles are the ones we can&apos;t yet name.
            </p>

            <p>
              <strong>Remember the one advantage the horse never had: agency.</strong> The horse could not retrain, reorganize, vote, tax, or redistribute; it had no say in the transition that retired it. Humans have all of those, which is why our version of this story is a policy choice, not a biological verdict. Whether we end up the cart or the horse is not fully decided by the technology — it is decided by how deliberately we manage the speed of the change and who we choose to carry through it.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-white/10 pl-6 text-[18px] italic leading-[2] text-[#8a8175]">
          NordNeuron builds AI and operational intelligence systems with a focus on LLM architecture, freight analytics, and enterprise automation — including the workforce and capability planning that decides whether a team rides the transition or is ridden by it.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-[13px] text-[#8a8175]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
