import { poppins } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "@/app/globals.css";
import Wagmi from "@/app/wagmi";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/app/googleAnalytics";
import Script from "next/script";
import { gsap } from "gsap";

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
          <div className="hidden lg:block"></div>
          <Header />
          {children}
          <Analytics />
          <Footer />
          <Script strategy="lazyOnload">
            {`document.addEventListener("DOMContentLoaded", function(event) {
            var cursor = document.querySelector(".custom-cursor");
            var links = document.querySelectorAll("a");
            var initCursor = false;

            for (var i = 0; i < links.length; i++) {
              var selfLink = links[i];

              selfLink.addEventListener("mouseover", function() {
                cursor.classList.add("custom-cursor--link");
              });
              selfLink.addEventListener("mouseout", function() {
                cursor.classList.remove("custom-cursor--link");
              });
            }

            window.onmousemove = function(e) {
              var mouseX = e.clientX;
              var mouseY = e.clientY;

              if (!initCursor) {
                // cursor.style.opacity = 1;
                gsap.to(cursor, 0.3, {
                  opacity: 1
                });
                initCursor = true;
              }

              gsap.to(cursor, 0, {
                top: mouseY + "px",
                left: mouseX + "px"
              });
            };

            window.onmouseout = function(e) {
              gsap.to(cursor, 0.3, {
                opacity: 0
              });
              initCursor = false;
            };
          });
          `}
          </Script>
          <div className="custom-cursor"></div>
        </body>
      </Wagmi>
    </html>
  );
}
