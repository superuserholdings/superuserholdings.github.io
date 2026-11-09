import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://superuserholdings.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Super User Holdings | Websites, Apps, Automation & AI",
  description:
    "Websites, apps, automations, AI assistants, dashboards, and ongoing care built as one accountable system for growing businesses.",
  icons: {
    icon: "/brand/emblem.png",
    shortcut: "/brand/emblem.png",
  },
  openGraph: {
    title: "Build what your business should already have.",
    description:
      "Software that fits the way your business works, with a real person staying accountable.",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Super User Holdings product ecosystem" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build what your business should already have.",
    description:
      "Software that fits the way your business works, with a real person staying accountable.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
