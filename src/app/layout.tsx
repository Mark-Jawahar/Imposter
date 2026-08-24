import type { Metadata, Viewport } from "next";
import { GameProvider } from "@/context/GameContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMPOSTER — Pass-The-Phone Party Game",
  description: "One word. One liar. Find them. A mobile-first pass-the-phone social deduction game for parties and gatherings.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "IMPOSTER",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#090a10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#08090e] text-slate-100">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#08090e] text-slate-100 selection:bg-purple-500 selection:text-white">
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
