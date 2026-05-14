export default function RFQIntelligenceConsole() {
  const topCustomers = [
    ["Mita", "$1.58M"],
    ["Feedbug", "$1.32M"],
    ["Photobug", "$1.22M"],
    ["Podcat", "$1.05M"],
    ["Voolia", "$1.05M"],
    ["Zoomlounge", "$0.89M"],
    ["Jetpulse", "$0.88M"],
    ["Bubbletube", "$0.87M"],
    ["Feedfish", "$0.87M"],
    ["Kazio", "$0.86M"],
  ];

  const tableRows = [
    ["Antwerp", "Dubai", "8.00", "Carrier Optimization"],
    ["Antwerp", "Dubai", "13.00", "Risk Alert"],
    ["Antwerp", "Hamburg", "14.00", "Carrier Optimization"],
    ["Antwerp", "Hamburg", "30.00", "High Margin"],
    ["Antwerp", "Hamburg", "14.50", "Review Pricing"],
    ["Antwerp", "Hamburg", "22.00", "Risk Alert"],
    ["Antwerp", "Los Angeles", "7.50", "Carrier Optimization"],
    ["Antwerp", "Los Angeles", "31.00", "High Margin"],
  ];

  return (
    <div className="min-h-screen bg-black p-6 text-white font-sans">
      <div className="max-w-7xl mx-auto rounded-3xl border border-cyan-500/20 bg-[#030b1d] shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center gap-6 border-b border-cyan-500/10 px-8 py-5 bg-black/50">
          <div className="w-16 h-16 rounded-2xl border border-cyan-500/20 bg-[#06152f] flex items-center justify-center">
            <img
              src="/nordneuron-icon-dark.svg"
              alt="NordNeuron"
              className="w-10 h-10"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              RFQ Intelligence Platform
            </h1>

            <p className="mt-2 text-cyan-300/70 text-lg">
              AI Procurement & Tender Intelligence Console
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">

          {[
            {
              title: "Carrier",
              items: ["Select all", "CGM", "CMA"],
            },
            {
              title: "Shipment_Mode",
              items: ["Select all", "Air", "FCL", "LCL", "Rail"],
            },
            {
              title: "Risk_Level",
              items: ["Select all", "High", "Low", "Medium"],
            },
            {
              title: "Submission_Date",
              items: ["Last", "4", "Months"],
            },
          ].map((filter) => (
            <div
              key={filter.title}
              className="rounded-2xl border border-cyan-500/20 bg-[#06152f] p-4"
            >
              <div className="text-sm text-white/70 mb-3">
                {filter.title}
              </div>

              <div className="flex flex-wrap gap-2">
                {filter.items.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-lg border border-white/10 bg-black/30 text-sm text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">

          {[
            {
              title: "Total RFQ Value",
              value: "$77M",
              color: "text-cyan-400",
            },
            {
              title: "Avg Margin %",
              value: "20.87",
              color: "text-violet-400",
            },
            {
              title: "RFQs Processed",
              value: "307",
              color: "text-emerald-400",
            },
            {
              title: "Avg AI Confidence",
              value: "84.02",
              color: "text-orange-400",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-cyan-500/20 bg-black p-8 text-center shadow-[0_0_40px_rgba(34,211,238,0.05)]"
            >
              <div className="text-white/80 text-2xl">
                {card.title}
              </div>

              <div className={`mt-6 text-6xl font-bold ${card.color}`}>
                {card.value}
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1.2fr_0.9fr_0.9fr] gap-4 p-6">

          {/* Top Customers */}
          <div className="rounded-2xl border border-cyan-500/20 bg-[#06152f] p-6">
            <h2 className="text-3xl font-semibold mb-8">
              Top Customers by RFQ Value
            </h2>

            <div className="space-y-4">
              {topCustomers.map(([name, value], index) => (
                <div key={name}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/80">{name}</span>
                    <span className="text-cyan-300">{value}</span>
                  </div>

                  <div className="h-5 rounded-full bg-black/40 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${100 - index * 4}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Donut */}
          <div className="rounded-2xl border border-cyan-500/20 bg-[#06152f] p-6 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              RFQ Status Distribution
            </h2>

            <div className="relative w-72 h-72 rounded-full bg-[conic-gradient(#38bdf8_0deg_100deg,#34d399_100deg_190deg,#818cf8_190deg_280deg,#fb923c_280deg_360deg)] flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-[#06152f]" />
            </div>

            <div className="flex gap-4 mt-8 text-sm flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sky-400" /> Lost
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400" /> Pending
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-400" /> Won
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400" /> Under Review
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="rounded-2xl border border-cyan-500/20 bg-[#06152f] p-6">
            <h2 className="text-3xl font-semibold mb-8">
              Insights
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-white/80">
              <p>
                At <span className="text-cyan-300">$1,576,790</span>, Mita had the highest RFQ Value and was 82.30% higher than Kazio.
              </p>

              <p>
                AI detected increasing profitability across APAC → EU refrigerated lanes.
              </p>

              <p>
                Procurement workflows flagged multiple high-risk pricing scenarios requiring review.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4 px-6 pb-6">

          {/* Trend */}
          <div className="rounded-2xl border border-cyan-500/20 bg-[#06152f] p-6">
            <h2 className="text-3xl font-semibold mb-8">
              Tender Volume Trend
            </h2>

            <div className="relative h-72 flex items-end justify-between px-4">

              {[45, 60, 95, 72, 30].map((height, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="w-16 rounded-t-2xl bg-cyan-400/80"
                    style={{ height: `${height * 2}px` }}
                  />

                  <div className="text-sm text-white/50">
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                    ][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="rounded-2xl border border-cyan-500/20 bg-[#06152f] p-6 overflow-hidden">
            <h2 className="text-3xl font-semibold mb-8">
              Trade Lane Intelligence
            </h2>

            <div className="overflow-auto rounded-xl border border-white/10">
              <table className="w-full text-left">
                <thead className="bg-black/40 text-cyan-300 text-sm uppercase tracking-wide">
                  <tr>
                    <th className="px-4 py-4">POL</th>
                    <th className="px-4 py-4">POD</th>
                    <th className="px-4 py-4">Avg Margin</th>
                    <th className="px-4 py-4">AI Recommendation</th>
                  </tr>
                </thead>

                <tbody>
                  {tableRows.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-white/5 hover:bg-white/[0.03]"
                    >
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className="px-4 py-4 text-white/80 whitespace-nowrap"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
