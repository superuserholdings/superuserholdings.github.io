import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://superuserholdings.com"),
  title: "Super User Holdings",
  description: "Our website is being updated. Please check back soon.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/brand/emblem.png",
    shortcut: "/brand/emblem.png",
  },
  openGraph: {
    title: "Super User Holdings",
    description: "Our website is being updated. Please check back soon.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
