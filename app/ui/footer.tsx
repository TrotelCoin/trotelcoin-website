import { JSX, SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = {
  trotelcoin: [
    { name: "Home", href: "/" },
    {
      name: "Governance",
      href: "https://vote.trotelcoin.com/#/alexandretrotel.eth",
      target: "_blank",
    },
    {
      name: "Whitepaper",
      href: "https://docs.trotelcoin.com/overview/whitepaper",
      target: "_blank",
    },
    { name: "Get started", href: "/get-started" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ],
  ecosystem: [
    {
      name: "Uniswap",
      href: "https://app.uniswap.org/tokens/polygon/0x85057d5a8d063f9075ba963101d76352051675e5",
      target: "_blank",
    },
    {
      name: "CoinMarketCap",
      href: "https://coinmarketcap.com/currencies/trotelcoin-v2/",
      target: "_blank",
    },
    {
      name: "Polygon Explorer",
      href: "https://polygonscan.com/token/0x85057d5a8d063f9075ba963101d76352051675e5",
      target: "_blank",
    },
    {
      name: "Gecko Terminal",
      href: "https://www.geckoterminal.com/polygon_pos/pools/0x360103feb052acda1f09bdfb3d73a0c1b9662c78",
      target: "_blank",
    },
  ],
  socials: [
    {
      name: "X / Twitter",
      href: "https://x.com/trotelcoin",
      target: "_blank",
    },
    {
      name: "Discord",
      href: "https://discord.gg/a33hjU5Usb",
      target: "_blank",
    },
    {
      name: "Blog / Mirror",
      href: "https://mirror.xyz/alexandretrotel.eth",
      target: "_blank",
    },
    { name: "Telegram", href: "https://t.me/TrotelCoin", target: "_blank" },
    {
      name: "YouTube",
      href: "https://youtube.com/@TrotelCoin",
      target: "_blank",
    },
  ],
  social: [
    {
      name: "Discord",
      href: "https://discord.gg/brpfYryFkV",
      target: "_blank",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          fill="currentColor"
          {...props}
        >
          <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
        </svg>
      ),
    },
    {
      name: "X / Twitter",
      href: "https://x.com/trotelcoin",
      target: "_blank",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/trotelcoin",
      target: "_blank",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-white dark:bg-gray-900"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 flex flex-col w-1/2">
            <Link href="/">
              <Image
                className="h-10 w-auto hidden dark:block"
                src="/trotelcoin.png"
                alt="TrotelCoin logo"
                width={100}
                height={100}
              />
              <Image
                className="h-10 w-auto block dark:hidden"
                src="/trotelcoin-white.png"
                alt="TrotelCoin logo"
                width={100}
                height={100}
              />
            </Link>
            <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
              Learn & earn crypto.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={item.target}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div>
              <Link
                href="https://www.producthunt.com/posts/trotelcoin?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-trotelcoin"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=442238&theme=light"
                  alt="Product Hunt"
                  className="hover:opacity-90"
                />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  TrotelCoin
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.trotelcoin.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        target={item.target}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >
                        <div className="flex items-center">
                          {item.name}{" "}
                          {item.target === "_blank" ? (
                            <span className="text-gray-900 dark:text-gray-100 ml-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                              </svg>
                            </span>
                          ) : null}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  Blockchain
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.ecosystem.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        target={item.target}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >
                        <div className="flex items-center">
                          {item.name}{" "}
                          {item.target === "_blank" ? (
                            <span className="text-gray-900 dark:text-gray-100 ml-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                              </svg>
                            </span>
                          ) : null}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  Social networks
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.socials.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        target={item.target}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >
                        <div className="flex items-center">
                          {item.name}{" "}
                          {item.target === "_blank" ? (
                            <span className="text-gray-900 dark:text-gray-100 ml-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                              </svg>
                            </span>
                          ) : null}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">{/* <Language /> */}</div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 dark:border-gray-100/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-700 dark:text-gray-300">
            &copy; 2023 TrotelCoin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
