import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PAXIT by MIS - Precision Microscopy Imaging Software & Hardware",
    template: "%s | PAXIT by MIS",
  },
  description:
    "PAX-it microscopy imaging software and PAXcam digital cameras by Midwest Information Systems. 35+ years serving Fortune 1000 companies in aerospace, pharmaceutical, semiconductor, and more.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PAXIT by MIS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
