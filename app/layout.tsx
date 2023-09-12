import "./globals.css";
import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";

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
      <Suspense fallback={<Loading></Loading>}>
        <body>{children}</body>
      </Suspense>
    </html>
  );
}
