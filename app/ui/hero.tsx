"use client";

import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const navigation = [
  { name: "Home", href: "./" },
  {
    name: "Whitepaper",
    href: "https://docs.trotelcoin.com/overview/whitepaper",
    target: "_blank",
  },
  {
    name: "Documentation",
    href: "https://docs.trotelcoin.com",
    target: "_blank",
  },
  { name: "Get started", href: "/getStarted" },
  { name: "About", href: "/about" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Array of strings to display
    const strings = [
      "Bitcoin",
      "Blockchain",
      "Ethereum",
      "dApps",
      "DAOs",
      "DeFi",
      "IPFS",
      "Stablecoins",
      "Smart Contracts",
      "Airdrops",
      "NFTs",
      "Web3",
      "EVM",
    ];

    const options = {
      strings: strings,
      typeSpeed: 100,
      loop: true,
      backSpeed: 50,
      cursorChar: ".",
      showCursor: true,
    };

    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative translate-y-72 left-[calc(50%-11rem) aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#74b9ff] to-[#0984e3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-200 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20">
            Buy TrotelCoin on PancakeSwap.{" "}
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5"
              target="_blank"
              className="font-semibold text-blue-600 dark:text-blue-200"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Invest now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
            Learn <span ref={typedTextRef} />
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
            Acquiring TrotelCoin opens you up to revolutionary development
            opportunities in the fields of finance and technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://app.trotelcoin.com"
              className="rounded-md bg-blue-600 hover:bg-blue-600/80 dark:bg-blue-200 px-3.5 py-2.5 text-sm font-semibold text-gray-100 dark:text-gray-900 shadow-sm dark:hover:bg-blue-200/80 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
            >
              Launch app
            </a>
            <a
              href="https://docs.trotelcoin.com"
              target="_blank"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#74b9ff] to-[#0984e3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
