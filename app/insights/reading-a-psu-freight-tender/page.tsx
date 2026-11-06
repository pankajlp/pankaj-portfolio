"use client";
import { useEffect, useState } from "react";

const TENDER_URL =
  "https://www.bhel.com/sites/default/files/is-1512_america___black_sea_sector-1441000745.pdf";

// Lane counts and volumes are taken from Price Bid A and B (pages 41–46) of the tender.
const laneSummary = [
  { bid: "A · Americas", port: "Nhava Sheva", fclLines: 15, boxes: 51, teu: 67, lclLines: 10, lclMt: "347" },
  { bid: "A · Americas", port: "Chennai", fclLines: 10, boxes: 240, teu: 374, lclLines: 3, lclMt: "40" },
  { bid: "B · “Black Sea”", port: "Nhava Sheva", fclLines: 7, boxes: 21, teu: 30, lclLines: 4, lclMt: "53" },
  { bid: "B · “Black Sea”", port: "Chennai", fclLines: 6, boxes: 100, teu: 150, lclLines: 0, lclMt: "—" },
];

// Fixed charges BHEL pays, from clause 9.0 (page 29) and the detention clause (page 12).
const fixedCharges = [
  { item: "THC at Nhava Sheva", value: "₹8,450 per 20′ · ₹14,585 per 40′ · ₹950 per LCL freight ton" },
  { item: "THC at Chennai", value: "₹5,750 per 20′ · ₹9,344 per 40′ · ₹600 per LCL freight ton" },
  { item: "Haulage, Nhava Sheva → ICD Mandideep", value: "₹42,238 per 20′ · ₹68,206 per 40′" },
  { item: "Haulage, Nhava Sheva → ICD Sanathnagar", value: "₹27,822 per 20′ · ₹36,576 per 40′" },
  { item: "Delivery order", value: "₹4,000 per B/L" },
  { item: "Hazardous surcharge", value: "USD 150 per TEU · USD 15 per LCL freight ton" },
  { item: "Container detention", value: "Free for 21 days, then ₹3,475–₹10,250 per container per day by type" },
];

export default function ReadingAPsuFreightTender() {
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
          Freight Tenders
        </div>

        {/* Title */}
        <h1 className="text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.03em] font-serif text-[#efe9df]">
          Inside a 49-page PSU freight tender: what a forwarder actually has to quote
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[19px] leading-[1.7] text-[#8a8175] italic">
          The lanes fit on six pages. The other forty-three decide whether the rates you put
          against them make money.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-white/10 text-[13px] text-[#8a8175] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>November 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
          <p>
            In August 2015, BHEL&apos;s Regional Operations Division in Mumbai invited bids for a
            one-year ocean freight contract: containerised imports from American and Black Sea
            ports into Nhava Sheva, Chennai and two inland container depots. The tender,{" "}
            <a href={TENDER_URL} target="_blank" rel="noopener noreferrer" className="text-[#c8a86b] hover:text-[#d8bd86] underline underline-offset-4">
              RE/MUM/IMP/AC/IS-1512
            </a>
            , is still on BHEL&apos;s public website. It runs to 49 pages.
          </p>
          <p>
            The rates it asked for are long out of date, and that is not why it is worth reading.
            It is worth reading because it is a clean example of how a public-sector freight
            tender is put together: what the buyer asks you to price, what it has already priced
            for you, and how it decides who wins. Anyone who quotes this kind of work will
            recognise the shape.
          </p>
          <p>
            What follows is a walk through it the way a pricing desk would: find the lanes, find
            the costs the lanes do not show, work out how the bid is scored, and note what to
            ask before the pre-bid meeting.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The lanes are on pages 41 to 46
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              The first forty pages are scope, instructions, eligibility and general terms. The
              part you actually put numbers into is Section V, the price bid, split into two
              independent bids: <strong>Price Bid A</strong> for American load ports and{" "}
              <strong>Price Bid B</strong> for what the tender calls the Black Sea sector. You
              can bid for either or both, but within a bid you must quote every line or that
              bid is rejected.
            </p>
            <p>
              Each line is a load port, a discharge port, an equipment type and a projected
              volume. Rates are in US dollars, per container for FCL and per freight ton for
              LCL. Added up, there are 55 priced lines covering 621 TEU of full containers and
              440 tonnes of LCL over the year.
            </p>
          </div>
        </section>

        <figure className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[13px] md:text-[14px] min-w-[600px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 font-serif font-medium text-[#f2ede3] tracking-tight">Bid</th>
                  <th className="py-3 pr-4 font-serif font-medium text-[#f2ede3] tracking-tight">Discharge</th>
                  <th className="py-3 pr-4 font-serif font-medium text-[#f2ede3] tracking-tight text-right">FCL lines</th>
                  <th className="py-3 pr-4 font-serif font-medium text-[#f2ede3] tracking-tight text-right">Boxes</th>
                  <th className="py-3 pr-4 font-serif font-medium text-[#c8a86b] tracking-tight text-right">TEU</th>
                  <th className="py-3 pr-4 font-serif font-medium text-[#f2ede3] tracking-tight text-right">LCL lines</th>
                  <th className="py-3 font-serif font-medium text-[#f2ede3] tracking-tight text-right">LCL tonnes</th>
                </tr>
              </thead>
              <tbody className="text-[#a89f8f]">
                {laneSummary.map((r) => (
                  <tr key={r.bid + r.port} className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4">{r.bid}</td>
                    <td className="py-3 pr-4 text-[#e7e0d2]">{r.port}</td>
                    <td className="py-3 pr-4 text-right">{r.fclLines}</td>
                    <td className="py-3 pr-4 text-right">{r.boxes}</td>
                    <td className="py-3 pr-4 text-right text-[#efe9df] font-semibold">{r.teu}</td>
                    <td className="py-3 pr-4 text-right">{r.lclLines}</td>
                    <td className="py-3 text-right">{r.lclMt}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 pr-4 text-[#efe9df]" colSpan={2}>Total</td>
                  <td className="py-3 pr-4 text-right text-[#efe9df]">38</td>
                  <td className="py-3 pr-4 text-right text-[#efe9df]">412</td>
                  <td className="py-3 pr-4 text-right text-[#c8a86b] font-semibold">621</td>
                  <td className="py-3 pr-4 text-right text-[#efe9df]">17</td>
                  <td className="py-3 text-right text-[#efe9df]">440</td>
                </tr>
              </tbody>
            </table>
          </div>
          <figcaption className="mt-5 text-[13px] leading-[1.7] text-[#8a8175] italic">
            Counted from Price Bid A and B. The TEU totals match the tender&apos;s own load table
            on page 7. Equipment is 20′ GP, 40′ GP/HC, and 20′ and 40′ open-top (in-gauge
            cargo only).
          </figcaption>
        </figure>

        <section className="mt-12">
          <div className="space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Two things stand out before you price a single line. First, the volume is lopsided:
              Chennai takes 524 of the 621 TEU, and one line on its own, 40′ boxes from Long
              Beach to Chennai, is 54 containers. Second, the volumes are explicitly not
              guaranteed. The tender says the load &ldquo;may increase or decrease depending upon
              BHEL&apos;s order book,&rdquo; so the projection is a basis for scoring bids, not a
              commitment you can plan capacity around.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The rate is all-in, and the buyer has already priced the rest
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              The note under each price bid is the most expensive sentence in the document. The
              quoted freight &ldquo;includes all charges and surcharges like BAF, CAF, GRI, ISPS, war
              risk charges, port congestion charges, SECA charges.&rdquo; The scope repeats it: none
              of these will be paid separately. Whatever bunker, currency and war-risk premiums
              do over the contract year, the rate you bid absorbs them.
            </p>
            <p>
              And the contract year can be longer than a year. It runs for one year, extendable by
              a second by mutual agreement. If you decline the extension, you must still keep
              working at the same rates for three more months. A Black Sea rate quoted in one
              market can end up applied fifteen months later.
            </p>
            <p>
              Everything outside ocean freight, BHEL has priced itself. Terminal handling, inland
              haulage to the depots and delivery-order fees are paid at fixed amounts set in the
              tender. Meanwhile, &ldquo;all the destination charges of shipping line will have to be
              paid by Contractor.&rdquo; If the line&apos;s real charges come in above BHEL&apos;s
              figures, the difference comes out of your margin.
            </p>
          </div>
        </section>

        <figure className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[13px] md:text-[14px] min-w-[560px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 font-serif font-medium text-[#f2ede3] tracking-tight">Charge</th>
                  <th className="py-3 font-serif font-medium text-[#f2ede3] tracking-tight">What BHEL pays (fixed in the tender)</th>
                </tr>
              </thead>
              <tbody className="text-[#a89f8f]">
                {fixedCharges.map((r) => (
                  <tr key={r.item} className="border-b border-white/[0.06] last:border-0">
                    <td className="py-3 pr-4 text-[#e7e0d2] align-top">{r.item}</td>
                    <td className="py-3">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="mt-5 text-[13px] leading-[1.7] text-[#8a8175] italic">
            From clause 9.0 and the detention clause. A further ₹2,500 per B/L is paid as
            documentation for moving boxes to BHEL&apos;s nominated CFS. Port congestion charges
            are not payable at all.
          </figcaption>
        </figure>

        <section className="mt-12">
          <div className="space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Three more clauses carry real cost. The contractor must give{" "}
              <strong>21 days free of detention</strong> at the final delivery place, ports and
              depots alike. Whatever free time the shipping line actually grants, the gap is yours
              to negotiate or absorb. <strong>Transit time is guaranteed</strong>, port by port
              (40 to 53 days, plus ten for depot delivery), measured from B/L date to IGM date.
              Each week late costs 5% of the freight on that shipment, capped at 10%. And the{" "}
              <strong>delivery order must be issued within two working days</strong> of receiving
              the original B/L. Beyond that, demurrage, ground rent and detention for the delay are
              recovered from your next freight bills.
            </p>
            <p>
              None of this appears on the price bid sheet. All of it decides whether the number
              on the sheet was right.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            How the bid is scored: one weighted total, winner takes the whole bid
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Each price bid is evaluated as a single number: every rate multiplied by its
              projected volume, summed into a &ldquo;total cash flow.&rdquo; After a reverse auction
              among technically qualified bidders, the lowest total, the L1 bidder, gets the
              entire load for that bid. There is no lane-by-lane split.
            </p>
            <p>
              That makes the volume column as important as the rate column. A dollar off the
              54-container Long Beach–Chennai line moves your total 54 times as much as a dollar off
              a one-container line from Santos. Lines with a single box still have to be quoted,
              and quoted sensibly, but the bid is won or lost on the handful of heavy lanes,
              nearly all of them into Chennai.
            </p>
            <p>
              Two details shape the auction. Rates you reduce in the reverse auction must come down
              pro-rata against your sealed bid, so the shape of your sealed rates carries through
              to the end. And currency is fixed at two different moments. Bids are compared at
              SBI&apos;s TT selling rate on the technical bid opening date, but you are paid in
              rupees at the rate on each B/L date. Over a year, that gap is a currency position
              you are carrying whether you meant to or not.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            Read it like a checker, not a reader
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Long tenders are assembled from earlier tenders, and the seams show. In this one,
              Section I says BHEL imports from &ldquo;various ports of Europe &amp; Middle East
              Sector,&rdquo; while the title and price bids say America and Black Sea. Price Bid B
              is headed Black Sea, but its ports include Helsinki and Koper, which are on the
              Baltic and the Adriatic, and its total line describes cargo &ldquo;from Europe to
              Nhava Sheva&rdquo; even though six of its lines go to Chennai. Haulage rates and
              payment terms are listed for an ICD at Bangalore that is not among the stated
              discharge points. Chicago, an inland city, appears as a load port.
            </p>
            <p>
              None of these is unusual, and none is a reason not to bid. Each is a question worth
              sending in writing before the pre-bid meeting, because the answer can change your
              routing or your cost. Once bids are open, the tender is explicit that no
              modification will be entertained.
            </p>
            <p>
              Check eligibility before spending a week on pricing. This tender required an
              average ocean-freight turnover of at least ₹1.6 crore over three years, completed
              freight contracts of set minimum values in the last seven years, a ₹75 lakh bank
              solvency certificate, a ₹2 lakh earnest money deposit, and a Class III digital
              signature to use the e-procurement portal at all. A smaller forwarder may need a
              partner to qualify.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            What changes when you price the next one
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              <strong>Build the lane table before anything else.</strong> Pull every priced line
              into one sheet: load port, discharge port, equipment, volume, transit commitment. It
              is the only way to see where the weight sits and which lines need carrier quotes
              first.
            </p>
            <p>
              <strong>Price the weight, not the list.</strong> Sort by volume. Get your sharpest
              buy rates on the heaviest lanes, and make sure the single-box lines are covered
              without spending your best hours on them.
            </p>
            <p>
              <strong>Cost every fixed charge against reality.</strong> Put the buyer&apos;s THC,
              haulage, DO and free-time figures next to what the line will actually charge you.
              The difference, multiplied by the volume, is a cost that belongs in your freight
              rate.
            </p>
            <p>
              <strong>Price the surcharge and currency risk explicitly.</strong> An all-in rate
              held for up to fifteen months, paid at a different exchange rate from the one it was
              scored at, needs a buffer you have decided on, not one you hope you left.
            </p>
            <p>
              <strong>Send your questions early.</strong> Every inconsistency you find is cheaper
              to resolve before the pre-bid meeting than after the award.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Closing sign-off */}
        <div className="border-l-[3px] border-white/10 pl-6 text-[18px] italic leading-[2] text-[#8a8175]">
          NordNeuron builds AI and operational intelligence systems with a focus on LLM
          architecture, freight analytics, and enterprise automation — including the RFQ tools
          that turn a document like this one into a priced lane table in minutes rather than days.
        </div>

        {/* Pilot call to action */}
        <div className="mt-12 rounded-2xl border border-[#c8a86b]/30 bg-[#c8a86b]/[0.05] p-6 md:p-8">
          <p className="text-[17px] leading-[1.8] text-[#efe9df]">
            Have a tender like this on your desk? Send us five real RFQs and your rate sheet, and
            we&apos;ll return clean lane tables with suggested rates from your own history within
            24 hours. Free.
          </p>
          <a
            href="/rfq"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c8a86b] text-[#171310] text-[12px] uppercase tracking-widest hover:bg-[#d8bd86] transition-colors duration-300"
          >
            Try the free pilot →
          </a>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-[13px] text-[#8a8175]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
