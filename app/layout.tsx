import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chiperstudio.vercel.app"),
  title: "Modern Websites and Digital Systems | Chiper Studio",
  description:
    "Chiper Studio builds fast, modern websites and digital systems for businesses that want more leads, better first impressions, and smoother operations.",
  keywords: [
    "web designer",
    "small business websites",
    "website developer",
    "websites for local businesses",
  ],
  openGraph: {
    title: "Modern Websites and Digital Systems | Chiper Studio",
    description:
      "Fast, modern websites and digital systems for businesses looking to win more enquiries and run more smoothly.",
    url: "/",
    siteName: "Chiper Studio",
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
