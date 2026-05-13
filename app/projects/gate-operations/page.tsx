const kpis = [
  {
    title: "Vehicles Processed",
    value: "1,284",
    change: "+12%",
  },
  {
    title: "Dock Utilization",
    value: "92%",
    change: "+4%",
  },
  {
    title: "Average Turnaround",
    value: "18 min",
    change: "-9%",
  },
  {
    title: "Security Alerts",
    value: "3",
    change: "-41%",
  },
];
const vehicles = [
  {
    vehicle: "DL01AB4821",
    driver: "Rajesh Kumar",
    dock: "Dock 04",
    status: "Inbound",
    time: "08:42 AM",
  },
  {
    vehicle: "HR38LM9012",
    driver: "Amit Singh",
    dock: "Dock 11",
    status: "Loading",
    time: "09:15 AM",
  },
  {
    vehicle: "MH12XP2201",
    driver: "Suresh Yadav",
    dock: "Dock 07",
    status: "Outbound",
    time: "09:48 AM",
  },
  {
    vehicle: "RJ14TR6632",
    driver: "Imran Ali",
    dock: "Dock 02",
    status: "Security Hold",
    time: "10:02 AM",
  },
];
const alerts = [
  {
    title: "Unauthorized Dock Access",
    severity: "Critical",
    description:
      "Vehicle RJ14TR6632 attempted access to Dock 02 without approved outbound clearance.",
  },
  {
    title: "Extended Idle Duration",
    severity: "Medium",
    description:
      "Truck HR38LM9012 exceeded standard loading duration threshold by 28 minutes.",
  },
  {
    title: "Congestion Prediction",
    severity: "Low",
    description:
      "AI forecast indicates elevated inbound congestion risk between 2 PM and 4 PM.",
  },
];
export default function GateOperationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        
        <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            
            <a
              href="/"
              className="text-white/60 hover:text-cyan-300 transition-colors"
            >
              ← Back
            </a>

            <div className="w-px h-5 bg-white/10" />

            <div>
              <h1 className="text-white font-medium">
                Gate Operations Platform
              </h1>

              <p className="text-xs text-white/40">
                Smart Logistics Access Control
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            Live System
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
            Intelligent Logistics Operations
          </div>

          <h1 className="text-6xl font-bold leading-tight max-w-4xl">
            Smart Gate
            <span className="block text-cyan-400">
              Operations Platform
            </span>
          </h1>

          <p className="mt-8 text-xl text-white/60 leading-relaxed max-w-3xl">
            Enterprise access control and logistics workflow platform
            designed for real-time vehicle tracking, dock visibility,
            operational automation, and intelligent warehouse movement management.
          </p>
        </div>
      </div>
      {/* KPI Section */}
<div className="max-w-7xl mx-auto px-8 pb-10">
  
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    {kpis.map((item) => (
      <div
        key={item.title}
        className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      >
        
        <p className="text-sm text-white/50">
          {item.title}
        </p>

        <h3 className="mt-5 text-4xl font-bold text-white">
          {item.value}
        </h3>

        <div className="mt-5 inline-flex items-center px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
          {item.change}
        </div>
      </div>
    ))}
  </div>
</div>
{/* Live Vehicle Monitoring */}
<div className="max-w-7xl mx-auto px-8 pb-16">
  
  <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]">
    
    {/* Header */}
    <div className="flex items-center justify-between mb-10">
      
      <div>
        <h2 className="text-3xl font-semibold text-white">
          Live Vehicle Monitoring
        </h2>

        <p className="mt-2 text-white/50">
          Real-time gate activity and dock movement visibility.
        </p>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
        
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

        Real-time Feed
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      
      <table className="w-full">
        
        <thead>
          <tr className="border-b border-white/10 text-left text-sm text-white/40">
            
            <th className="pb-5 font-medium">
              Vehicle ID
            </th>

            <th className="pb-5 font-medium">
              Driver
            </th>

            <th className="pb-5 font-medium">
              Dock
            </th>

            <th className="pb-5 font-medium">
              Status
            </th>

            <th className="pb-5 font-medium">
              Timestamp
            </th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((item, index) => (
            <tr
              key={index}
              className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              
              <td className="py-6 text-white font-medium">
                {item.vehicle}
              </td>

              <td className="py-6 text-white/70">
                {item.driver}
              </td>

              <td className="py-6 text-cyan-300">
                {item.dock}
              </td>

              <td className="py-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${
                    item.status === "Security Hold"
                      ? "bg-red-500/10 border-red-500/20 text-red-300"
                      : "bg-cyan-400/10 border-cyan-400/20 text-cyan-300"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="py-6 text-white/50">
                {item.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
{/* AI Security Alerts */}
<div className="max-w-7xl mx-auto px-8 pb-20">
  
  <div className="flex items-center justify-between mb-10">
    
    <div>
      <h2 className="text-3xl font-semibold text-white">
        AI Security & Operations Alerts
      </h2>

      <p className="mt-2 text-white/50">
        Intelligent monitoring for operational anomalies and warehouse security events.
      </p>
    </div>

    <div className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
      AI Monitoring Active
    </div>
  </div>

  <div className="grid lg:grid-cols-3 gap-6">
    {alerts.map((alert, index) => (
      <div
        key={index}
        className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      >
        
        {/* Top */}
        <div className="flex items-center justify-between">
          
          <div
            className={`px-3 py-1 rounded-full text-sm border ${
              alert.severity === "Critical"
                ? "bg-red-500/10 border-red-500/20 text-red-300"
                : alert.severity === "Medium"
                ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
                : "bg-cyan-400/10 border-cyan-400/20 text-cyan-300"
            }`}
          >
            {alert.severity}
          </div>

          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>

        {/* Content */}
        <h3 className="mt-8 text-2xl font-semibold text-white leading-snug">
          {alert.title}
        </h3>

        <p className="mt-5 text-white/60 leading-relaxed">
          {alert.description}
        </p>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          
          <span className="text-sm text-white/40">
            AI Confidence
          </span>

          <span className="text-cyan-300 font-medium">
            97%
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Mobile Guard Interface */}
<div className="max-w-7xl mx-auto px-8 pb-24">
  
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
        Mobile Operations Interface
      </div>

      <h2 className="text-5xl font-bold leading-tight text-white">
        Real-time guard workflows
        directly from warehouse entry points.
      </h2>

      <p className="mt-8 text-xl text-white/60 leading-relaxed">
        Security teams can validate inbound vehicles,
        monitor dock assignments, trigger approvals,
        and receive AI-generated alerts through a
        streamlined mobile operations interface.
      </p>

      {/* Features */}
      <div className="mt-10 space-y-5">
        
        {[
          "Vehicle entry validation",
          "Dock assignment visibility",
          "Automated approval workflows",
          "AI-assisted anomaly detection",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-4"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

            <p className="text-white/70">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* MOBILE UI */}
    <div className="relative flex justify-center">
      
      {/* Glow */}
      <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Phone */}
      <div className="relative w-[320px] rounded-[42px] border border-white/10 bg-[#0b0b0b] p-4 shadow-2xl">
        
        {/* Screen */}
        <div className="rounded-[32px] bg-black border border-white/10 overflow-hidden">
          
          {/* Top */}
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            
            <div>
              <h3 className="text-white font-medium">
                Gate Control
              </h3>

              <p className="text-xs text-white/40">
                Warehouse Entry System
              </p>
            </div>

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            
            {/* Vehicle Card */}
            <div className="p-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
              
              <p className="text-xs text-cyan-300">
                INBOUND VEHICLE
              </p>

              <h4 className="mt-2 text-xl font-semibold text-white">
                DL01AB4821
              </h4>

              <p className="mt-1 text-sm text-white/60">
                Driver: Rajesh Kumar
              </p>

              <div className="mt-4 flex items-center justify-between">
                
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-white/70">
                  Dock 04
                </span>

                <span className="text-cyan-300 text-sm">
                  Verified
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              
              <button className="py-3 rounded-2xl bg-cyan-400 text-black font-medium">
                Approve
              </button>

              <button className="py-3 rounded-2xl border border-white/10 bg-white/[0.03] text-white">
                Hold
              </button>
            </div>

            {/* Alerts */}
            <div className="p-4 rounded-2xl border border-red-500/20 bg-red-500/10">
              
              <p className="text-sm text-red-300 font-medium">
                Security Alert
              </p>

              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Vehicle mismatch detected during outbound verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}