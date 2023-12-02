"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
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
  { name: "Buy TrotelCoin", href: "/buy" },
  { name: "Get started", href: "/get-started" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`${
        pathname === "/get-started" ? "bg-black" : "bg-white dark:bg-black"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="sr-only">TrotelCoin</span>
          <Image
            className="h-12 w-auto"
            src="/trotelcoin-white.png"
            alt="TrotelCoin logo"
            width={100}
            height={100}
          />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.target}
              className={`text-sm font-semibold leading-6 ${
                pathname === "/get-started"
                  ? "text-gray-100"
                  : "text-gray-900 dark:text-gray-100"
              } `}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href="https://app.trotelcoin.com"
            className={`${
              pathname === "/get-started"
                ? "bg-white text-gray-900 hover:border-white hover:bg-slate-900 hover:text-gray-900"
                : "bg-black dark:bg-white text-gray-100 dark:text-gray-900 hover:border-black dark:hover:border-white hover:bg-slate-900 dark:hover:bg-gray-100 hover:text-gray-100 dark:hover:text-gray-900"
            } rounded-md  px-3 py-2 text-sm font-semibold shadow-sm duration-200 border border-transparent hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
          >
            Launch app
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              pathname === "/get-started" ? "text-gray-300" : "text-gray-700"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon
              className={`h-6 w-6 ${
                pathname === "/get-started"
                  ? "text-gray-100"
                  : "text-gray-900 dark:text-gray-100"
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 ring-gray-900/10 dark:ring-gray-100/10">
          <div className="flex items-center gap-x-6">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">TrotelCoin</span>
              <Image
                className="h-12 w-auto"
                src="/trotelcoin-white.png"
                alt="TrotelCoin logo"
                width={100}
                height={100}
              />
            </Link>
            <a
              href="https://app.trotelcoin.com"
              className="ml-auto rounded-md bg-black dark:bg-white px-3 py-2 text-sm font-semibold text-white dark:text-black duration-200 shadow-sm hover:scale-110 hover:duration-200 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-200"
            >
              Launch app
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900 dark:text-gray-100"
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
                    onClick={closeMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100"
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
  );
}
