import { useState } from "react";
import { Dialog, RadioGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CheckIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "./" },
  {
    name: "Whitepaper",
    href: "https://github.com/TrotelCoin/trotelcoin-wiki/wiki/Whitepaper",
    target: "_blank",
  },
  { name: "Get started", href: "/getStarted" },
  { name: "About", href: "/about" },
];

export default function GetStartedHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="bg-gray-900">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">TrotelCoin</span>
              <img
                className="h-12 w-auto"
                src="trotelcoin-white.png"
                alt="TrotelCoin logo"
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.target}
                className="text-sm font-semibold leading-6 text-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <a
              href="https://app.trotelcoin.com"
              className="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm border-2 border-transparent hover:bg-gray-900 hover:text-gray-100 hover:border-white hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Launch App
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-gray-100" aria-hidden="true" />
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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">TrotelCoin</span>
                <img
                  className="h-12 w-auto"
                  src="trotelcoin-white.png"
                  alt="TrotelCoin logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-950"
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
    </div>
  );
}
