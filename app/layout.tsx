import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Editorial serif display face. Exposed as --font-display so existing
// `.font-display` markup picks it up with no churn. Labels reuse Inter
// via the .class, so no separate mono face is loaded.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "NordNeuron | RFQ pricing for freight forwarders",
  description:
    "NordNeuron turns RFQs in any format into clean lane tables priced from your own rate history. Built for Indian freight forwarders and NVOCCs.",
  icons: {
    icon: "/nordneuron-favicon.svg",
  },
  openGraph: {
    title: "NordNeuron | RFQ pricing for freight forwarders",
    description: "NordNeuron turns RFQs in any format into clean lane tables priced from your own rate history. Built for Indian freight forwarders and NVOCCs.",
    url: "https://nordneuron.com",
    siteName: "NordNeuron",
    images: [
      {
        url: "https://nordneuron.com/architecture.png",
        width: 1200,
        height: 630,
        alt: "NordNeuron: RFQ pricing for freight forwarders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NordNeuron | RFQ pricing for freight forwarders",
    description: "NordNeuron turns RFQs in any format into clean lane tables priced from your own rate history. Built for Indian freight forwarders and NVOCCs.",
    images: ["https://nordneuron.com/architecture.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">

      <head>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MF276Y5NRC"
          strategy="afterInteractive"
        />

        {/* Analytics Config */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-MF276Y5NRC');
          `}
        </Script>

      </head>

      <body className={`${inter.variable} ${fraunces.variable}`}>
        {children}
      </body>

    </html>
  );
}