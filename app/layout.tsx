import { poppins } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "@/app/globals.css";
import Wagmi from "@/app/wagmi";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/app/googleAnalytics";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrotelCoin | Learn & earn crypto",
  description:
    "We're building TrotelCoin - the best app to learn & earn crypto.",
  keywords:
    "trotelcoin, learn, earn, crypto, bitcoin, ethereum, learn & earn crypto, trotelcoin app, trotelcoin.com, trotelcoin app, trotelcoin website",
  openGraph: {
    type: "website",
    url: "https://trotelcoin.com",
    title: "TrotelCoin | Learn & earn crypto",
    description:
      "We're building TrotelCoin - the best app to learn & earn crypto.",
    images: [
      {
        url: "/assets/banner/trotelcoin-banner.png",
        width: 1200,
        height: 630,
        alt: "TrotelCoin | Learn & earn crypto",
      },
    ],
  },
  twitter: {
    site: "@trotelcoin",
    images: "/assets/banner/trotelcoin-banner.png",
    card: "summary_large_image",
    creator: "@trotelcoin",
  },
};

export const jsonLd = {
  "@context": "https://trotelcoin.com/",
  "@type": "Product",
  name: "TrotelCoin",
  image: "/assets/logo/trotelcoin.png",
  description:
    "We're building TrotelCoin - the best app to learn & earn crypto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/logo/trotelcoin.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="/globals.css"></link>
        <Script strategy="lazyOnload">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3583733,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <Wagmi>
        <body
          className={`bg-white dark:bg-black ${poppins.className} antialiased`}
        >
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
          <Header />
          {children}
          <Analytics />
          <Footer />
          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </body>
      </Wagmi>
    </html>
  );
}
