import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import TransitionCurtain from "./components/TransitionCurtain";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "NordNeuron — AI & Enterprise Intelligence",
  description:
    "NordNeuron builds intelligent analytics, automation, and AI systems for enterprise operations.",
  icons: {
    icon: "/nordneuron-favicon.svg",
  },
  openGraph: {
    title: "NordNeuron — AI & Enterprise Intelligence",
    description: "NordNeuron builds intelligent analytics, automation, and AI systems for enterprise operations.",
    url: "https://nordneuron.com",
    siteName: "NordNeuron",
    images: [
      {
        url: "https://nordneuron.com/architecture.png",
        width: 1200,
        height: 630,
        alt: "NordNeuron Enterprise Intelligence Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NordNeuron — AI & Enterprise Intelligence",
    description: "NordNeuron builds intelligent analytics, automation, and AI systems for enterprise operations.",
    images: ["https://nordneuron.com/architecture.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>

        {/* Google Adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1339913868506845"
          crossOrigin="anonymous"
        />

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

      <body className={`${inter.variable} ${grotesk.variable} ${syne.variable}`}>
        <Preloader />
        <CustomCursor />
        <TransitionCurtain />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>

    </html>
  );
}