import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import Hotjar from "@hotjar/browser";
import Head from "next/head";
import { poppins } from "@/app/ui/fonts";

const siteId = 3583733;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export const metadata: Metadata = {
  title: "TrotelCoin - Learn & earn crypto.",
  description: "Learn & earn crypto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Suspense fallback="">
        <body className={`${poppins.className}`}>{children}</body>
      </Suspense>
    </html>
  );
}
