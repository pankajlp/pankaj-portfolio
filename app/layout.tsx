import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "NordNeuron — AI & Enterprise Intelligence",
  description:  "NordNeuron builds intelligent analytics, automation, and AI systems for enterprise operations.",
  icons: {
    icon: "/nordneuron-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${grotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}