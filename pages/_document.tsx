import { Html, Head, Main, NextScript } from "next/document";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Hotjar from "@hotjar/browser";
import { Metadata } from "next";

const siteId = 3583733;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export const metadata: Metadata = {
  title: "TrotelCoin | Learn & earn crypto",
  description: "Learn & earn crypto.",
};

export default function Document() {
  return (
    <Html>
      <Head>
        {metadata.title && <title>{metadata.title as string}</title>}
        <meta name="description" content={metadata.description as string} />
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:image" content="/trotelcoin-banner.png" />
        <meta property="og:url" content="https://app.trotelcoin.com" />
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="Learn & earn crypto"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&family=Mooli&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk&display=swap"
          rel="stylesheet"
        ></link>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3583733,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </Head>
      <Suspense fallback={<Loading></Loading>}>
        <body>
          <Main />
          <NextScript />
        </body>
      </Suspense>
    </Html>
  );
}
