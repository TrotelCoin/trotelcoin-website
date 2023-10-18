import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Typed from "react-typed";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const navigation = [
  { name: "Accueil", href: "./" },
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
  { name: "Se lancer", href: "/getStarted" },
  { name: "A propos", href: "/about" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation("index");

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                className=" w-auto"
                src="/trotelcoin.svg"
                alt="TrotelCoin logo"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.target}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <a
              href="https://app.trotelcoin.com"
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-800 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Lancer l'app
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Image
                  className=" w-auto"
                  src="/trotelcoin.svg"
                  alt="TrotelCoin logo"
                  width={100}
                  height={100}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.target}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

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
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Achetez des TrotelCoin sur PancakeSwap.{" "}
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5"
                target="_blank"
                className="font-semibold text-blue-500"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Investir maintenant <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Découvrez{" "}
              <Typed
                strings={[
                  "Bitcoin",
                  "la Blockchain",
                  "Ethereum",
                  "les dApps",
                  "les DAOs",
                  "la DeFi",
                  "IPFS",
                  "les Stablecoins",
                  "les Smart Contracts",
                  "les Airdrops",
                  "les NFTs",
                  "le Web3",
                  "EVM",
                ]}
                typeSpeed={100}
                loop
                backSpeed={50}
                cursorChar="."
                showCursor={true}
              />
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Acquérir des TrotelCoin en vous ouvrant à des opportunités de
              développements révolutionnaires dans les domaines de la finance et
              de la technologie.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://app.trotelcoin.com"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Lancer l'app
              </a>
              <a
                href="https://docs.trotelcoin.com"
                target="_blank"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                En savoir plus <span aria-hidden="true">→</span>
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
    </div>
  );
}
