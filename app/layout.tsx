import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shivang Sharma",
    template: "%s · Shivang Sharma",
  },
  description:
    "Ex-software engineer turned product strategist. MBA at Masters' Union. Building Why.AI. Obsessed with how teams actually adopt AI.",
  metadataBase: new URL("https://portflio-website.vercel.app"),
  openGraph: {
    title: "Shivang Sharma — PM & Product Strategist",
    description:
      "Ex-software engineer turned product strategist. MBA at Masters' Union. Building Why.AI.",
    type: "website",
    images: [{ url: "/og?title=Shivang+Sharma&subtitle=PM+%26+Product+Strategist", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivang Sharma — PM & Product Strategist",
    description:
      "Ex-software engineer turned product strategist. MBA at Masters' Union. Building Why.AI.",
    images: ["/og?title=Shivang+Sharma&subtitle=PM+%26+Product+Strategist"],
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
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      >
        <CursorGlow />
        <Nav />
        <main className="relative z-10 pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
