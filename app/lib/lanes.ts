// Illustrative sample used on the homepage and /rfq: five RFQ lines as they
// arrive (email, Excel, PDF) and the priced lane rows they become. Not real
// rates or customers; every place that shows them carries DemoDataNotice.
export type SampleLane = {
  raw: string;
  pol: string;
  pod: string;
  equip: string;
  rate: string;
  match: string;
};

export const sampleLanes: SampleLane[] = [
  { raw: "NSA - JEA 2x20 GP gen cargo, ready 15th", pol: "Nhava Sheva", pod: "Jebel Ali", equip: "20GP × 2", rate: "$ 410", match: "Exact lane, Aug" },
  { raw: "mundra/HAM 40'HC x 3 monthly", pol: "Mundra", pod: "Hamburg", equip: "40HC × 3", rate: "$ 1,850", match: "Exact lane, Sep" },
  { raw: "MAA to PKG 1x20 (pls quote ASAP)", pol: "Chennai", pod: "Port Klang", equip: "20GP × 1", rate: "$ 330", match: "Exact lane, Jul" },
  { raw: "TKD ICD > FXT 40ft, FOB", pol: "ICD Tughlakabad", pod: "Felixstowe", equip: "40GP × 1", rate: "$ 2,050", match: "Via Nhava Sheva" },
  { raw: "CCU-CGP lcl 6 cbm, 2.1 t", pol: "Kolkata", pod: "Chittagong", equip: "LCL 6 cbm", rate: "$ 38 / cbm", match: "Nearest: Haldia" },
];
