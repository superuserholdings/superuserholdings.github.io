import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://superuserholdings.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Super User Holdings | Websites, Apps, Automation & AI",
  description:
    "Practical websites, applications, automations, AI agents, dashboards, and ongoing care-built as one accountable product system.",
  icons: {
    icon: "/brand/emblem.png",
    shortcut: "/brand/emblem.png",
  },
  openGraph: {
    title: "Build what your business should already have.",
    description: "Websites, apps, automation, and accountable AI from Super User Holdings.",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Super User Holdings product ecosystem" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build what your business should already have.",
    description: "Websites, apps, automation, and accountable AI from Super User Holdings.",
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
