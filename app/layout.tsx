import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://superuserholdings.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Super User Holdings | Supercore OS — Trustworthy AI Infrastructure",
  description:
    "Super User Holdings builds Supercore OS: a purpose-built operating system for AI infrastructure with a hardware-enforced off switch no AI workload can disable or reach.",
  icons: {
    icon: "/brand/emblem.png",
    shortcut: "/brand/emblem.png",
  },
  openGraph: {
    title: "Give AI a foundation you can trust.",
    description:
      "Supercore OS: a purpose-built operating system for AI infrastructure, with a hardware-enforced off switch built in.",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Supercore OS by Super User Holdings" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Give AI a foundation you can trust.",
    description:
      "Supercore OS: a purpose-built operating system for AI infrastructure, with a hardware-enforced off switch built in.",
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
