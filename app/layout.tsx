import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// One engineered family for everything: Plex Sans for headings and text,
// Plex Mono only where text is raw input (RFQ lines as they arrive).
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
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
    <html lang="en" className={`${plex.variable} ${plexMono.variable}`}>

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

      <body>
        {children}
      </body>

    </html>
  );
}