import { poppins } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "@/app/globals.css";
import Wagmi from "@/app/wagmi";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "TrotelCoin | Learn & earn crypto",
  description: "Learn & earn crypto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="keywords"
          content="trotelcoin, learn, earn, crypto, bitcoin, ethereum"
        />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          name="keywords"
          content="trotelcoin, learn, earn, crypto, bitcoin, ethereum"
        />
        <meta
          property="og:image"
          content="/assets/banner/trotelcoin-banner.png"
        />
        <meta
          property="twitter:image"
          content="/assets/banner/trotelcoin-banner.png"
        />
        <meta
          property="twitter:card"
          content="/assets/banner/trotelcoin-banner.png"
        />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="og:url" content="https://app.trotelcoin.com" />
        <meta charSet="UTF-8"></meta>
        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/logo/trotelcoin.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="/globals.css"></link>
      </head>
      <Wagmi>
        <body
          className={`bg-white dark:bg-black ${poppins.className} antialiased`}
        >
          <Header />
          {children}
          <Analytics />
          <Footer />
        </body>
      </Wagmi>
    </html>
  );
}
