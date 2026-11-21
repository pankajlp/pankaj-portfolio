import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
    <main id="main" className="min-h-dvh bg-paper text-ink pt-[var(--nav-h)]">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="relative wrap py-16">
        

        <div className="relative z-10">
          

          <h1 className="text-5xl font-medium leading-tight max-w-4xl">
            Smart Gate
            <span className="block text-ink">
              Operations Platform
            </span>
          </h1>

          <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
            Enterprise access control and logistics workflow platform
            designed for real-time vehicle tracking, dock visibility,
            operational automation, and intelligent warehouse movement management.
          </p>
        </div>
      </div>
      {/* KPI Section */}
<div className="wrap pb-10">
  
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    {kpis.map((item) => (
      <div
        key={item.title}
        className="p-7 rounded-card border border-rule-2 bg-paper-2"
      >
        
        <p className="text-sm text-muted">
          {item.title}
        </p>

        <h3 className="mt-5 text-4xl font-medium text-ink">
          {item.value}
        </h3>

        <div className="mt-5 inline-flex items-center px-3 py-1 rounded-full bg-paper-3/50 border border-rule-2 text-ink text-sm">
          {item.change}
        </div>
      </div>
    ))}
  </div>
</div>
{/* Live Vehicle Monitoring */}
<div className="wrap pb-16">
  
  <div className="p-6 md:p-8 rounded-card border border-rule-2 bg-paper-2">
    
    {/* Header */}
    <div className="flex flex-wrap gap-3 items-center justify-between mb-10">
      
      <div>
        <h2 className="text-3xl font-semibold text-ink">
          Live Vehicle Monitoring
        </h2>

        <p className="mt-2 text-muted">
          Real-time gate activity and dock movement visibility.
        </p>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-rule-2 bg-paper-3/50 text-ink text-sm">
        
        <div className="w-2 h-2 rounded-full bg-accent text-accent-ink hover:bg-accent-2 animate-pulse" />

        Real-time Feed
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto max-w-full" tabIndex={0} role="region" aria-label="Data table, scrolls sideways">
      
      <table className="w-full">
        
        <thead>
          <tr className="border-b border-rule-2 text-left text-sm text-muted">
            
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
              className="border-b border-rule-2 hover:bg-paper-3/50 transition-colors"
            >
              
              <td className="py-6 text-ink font-medium">
                {item.vehicle}
              </td>

              <td className="py-6 text-ink-2">
                {item.driver}
              </td>

              <td className="py-6 text-ink">
                {item.dock}
              </td>

              <td className="py-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${
                    item.status === "Security Hold"
                      ? "bg-paper-3 border-error text-error"
                      : "bg-paper-3/50 border-rule-2 text-ink"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="py-6 text-muted">
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
<div className="wrap pb-20">
  
  <div className="flex flex-wrap gap-3 items-center justify-between mb-10">
    
    <div>
      <h2 className="text-3xl font-semibold text-ink">
        AI Security & Operations Alerts
      </h2>

      <p className="mt-2 text-muted">
        Intelligent monitoring for operational anomalies and warehouse security events.
      </p>
    </div>

    <div className="px-4 py-2 rounded-full border border-rule-2 bg-paper-3/50 text-ink text-sm">
      AI Monitoring Active
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {alerts.map((alert, index) => (
      <div
        key={index}
        className="p-7 rounded-card border border-rule-2 bg-paper-2"
      >
        
        {/* Top */}
        <div className="flex flex-wrap gap-3 items-center justify-between">
          
          <div
            className={`px-3 py-1 rounded-full text-sm border ${
              alert.severity === "Critical"
                ? "bg-paper-3 border-error text-error"
                : alert.severity === "Medium"
                ? "bg-paper-3 border-warning text-warning"
                : "bg-paper-3/50 border-rule-2 text-ink"
            }`}
          >
            {alert.severity}
          </div>

          <div className="w-2.5 h-2.5 rounded-full bg-accent text-accent-ink hover:bg-accent-2 animate-pulse" />
        </div>

        {/* Content */}
        <h3 className="mt-8 text-2xl font-semibold text-ink leading-snug">
          {alert.title}
        </h3>

        <p className="mt-5 text-muted leading-relaxed">
          {alert.description}
        </p>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-rule-2 flex flex-wrap gap-3 items-center justify-between">
          
          <span className="text-sm text-muted">
            AI Confidence
          </span>

          <span className="text-ink font-medium">
            97%
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Mobile Guard Interface */}
<div className="wrap pb-24">
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      

      <h2 className="text-4xl font-medium leading-tight text-ink">
        Real-time guard workflows
        directly from warehouse entry points.
      </h2>

      <p className="mt-8 text-xl text-muted leading-relaxed">
        Security teams can validate inbound vehicles,
        monitor dock assignments, trigger approvals,
        and receive AI-generated alerts through a
        faster mobile operations interface.
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
            <div className="w-2.5 h-2.5 rounded-full bg-accent text-accent-ink hover:bg-accent-2" />

            <p className="text-ink-2">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* MOBILE UI */}
    <div className="relative flex justify-center">
      

      {/* Phone */}
      <div className="relative w-[320px] max-w-full rounded-card border border-rule-2 bg-paper-3 p-4 ">
        
        {/* Screen */}
        <div className="rounded-control bg-paper border border-rule-2 overflow-hidden">
          
          {/* Top */}
          <div className="px-6 py-5 border-b border-rule-2 flex flex-wrap gap-3 items-center justify-between">
            
            <div>
              <h3 className="text-ink font-medium">
                Gate Control
              </h3>

              <p className="text-xs text-muted">
                Warehouse Entry System
              </p>
            </div>

            <div className="w-3 h-3 rounded-full bg-accent text-accent-ink hover:bg-accent-2 animate-pulse" />
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            
            {/* Vehicle Card */}
            <div className="p-4 rounded-control border border-rule-2 bg-paper-3/50">
              
              <p className="text-xs text-ink">
                INBOUND VEHICLE
              </p>

              <h4 className="mt-2 text-xl font-semibold text-ink">
                DL01AB4821
              </h4>

              <p className="mt-1 text-sm text-muted">
                Driver: Rajesh Kumar
              </p>

              <div className="mt-4 flex flex-wrap gap-3 items-center justify-between">
                
                <span className="px-3 py-1 rounded-full bg-paper border border-rule-2 text-xs text-ink-2">
                  Dock 04
                </span>

                <span className="text-ink text-sm">
                  Verified
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              
              <button className="py-3 rounded-control bg-accent text-accent-ink hover:bg-accent-2 hover:text-ink font-medium transition duration-300">
                Approve
              </button>

              <button className="py-3 rounded-control border border-rule-2 bg-paper-2 text-ink hover:bg-paper-3 hover:border-accent/40 transition duration-300">
                Hold
              </button>
            </div>

            {/* Alerts */}
            <div className="p-4 rounded-control border border-error bg-paper-3">
              
              <p className="text-sm text-error font-medium">
                Security Alert
              </p>

              <p className="mt-2 text-sm text-muted leading-relaxed">
                Vehicle mismatch detected during outbound verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </main>
  );
}