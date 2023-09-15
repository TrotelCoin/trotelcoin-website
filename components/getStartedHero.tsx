import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CheckIcon,
  WalletIcon,
  Cog6ToothIcon,
  CreditCardIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "./" },
  {
    name: "Whitepaper",
    href: "https://docs.trotelcoin.com/overview/whitepaper",
    target: "_blank",
  },
  { name: "Get started", href: "/getStarted" },
  { name: "About", href: "/about" },
];

const features = [
  {
    name: "Choose your wallet.",
    description:
      "Begin by selecting a suitable wallet that suits your needs and preferences. Your wallet will serve as the secure hub for your TrotelCoin transactions.",
    href: "https://docs.trotelcoin.com/get-started/choose-your-wallet",
    icon: WalletIcon,
  },
  {
    name: "Configure your wallet.",
    description:
      "Once you've chosen your wallet, configure it according to your preferences and security settings.",
    href: "https://docs.trotelcoin.com/get-started/configure-your-wallet",
    icon: Cog6ToothIcon,
  },
  {
    name: "Get some TrotelCoin.",
    description:
      "Whether you earn, trade, or purchase TrotelCoin, having it in your wallet can accelerate and enrich your learning and earning opportunities.",
    href: "https://docs.trotelcoin.com/get-started/get-some-trotelcoin",
    icon: CreditCardIcon,
  },
];

const pricing = {
  tiers: [
    {
      name: "Beginner",
      id: "tier-beginner",
      href: "https://pancakeswap.finance/swap?outputCurrency=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5",
      featured: false,
      description: "No Token Holding Requirement.",
      price: "0",
      mainFeatures: [
        "Free access to all educational courses and resources",
        "Participation in interactive quizzes and activities",
        "Making governance decisions based on the quantity of TrotelCoin in your possession",
      ],
    },
    {
      name: "Expert",
      id: "tier-expert",
      href: "https://pancakeswap.finance/swap?outputCurrency=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5",
      featured: true,
      description: "Holders of 5,000 TrotelCoin or more for 90 days.",
      price: "5000",
      mainFeatures: [
        "All benefits from the Beginner and Intermediate Tiers",
        "Early access to experimental features and projects",
        "Invitation to our annual crypto summit",
        "Join an exclusive crypto community to network, collaborate on ventures, and explore curated TrotelCoin projects",
      ],
    },
    {
      name: "Intermediate",
      id: "tier-intermediate",
      href: "https://pancakeswap.finance/swap?outputCurrency=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5",
      featured: false,
      description: "Holders of 1,000 TrotelCoin or more for 90 days.",
      price: "1000",
      mainFeatures: [
        "All benefits from the Beginner Tier",
        "Exclusive updates on project developments",
        "Access to courses that provide additional in-depth content and tutorials",
      ],
    },
  ],
  sections: [
    {
      name: "Catered for business",
      features: [
        {
          name: "Tax Savings",
          tiers: { Starter: true, Scale: true, Growth: true },
        },
        {
          name: "Easy to use accounting",
          tiers: { Starter: true, Scale: true, Growth: true },
        },
        {
          name: "Multi-accounts",
          tiers: {
            Starter: "3 accounts",
            Scale: "Unlimited accounts",
            Growth: "7 accounts",
          },
        },
        {
          name: "Invoicing",
          tiers: {
            Starter: "3 invoices",
            Scale: "Unlimited invoices",
            Growth: "10 invoices",
          },
        },
        {
          name: "Exclusive offers",
          tiers: { Starter: false, Scale: true, Growth: true },
        },
        {
          name: "6 months free advisor",
          tiers: { Starter: false, Scale: true, Growth: true },
        },
        {
          name: "Mobile and web access",
          tiers: { Starter: false, Scale: true, Growth: false },
        },
      ],
    },
    {
      name: "Other perks",
      features: [
        {
          name: "24/7 customer support",
          tiers: { Starter: true, Scale: true, Growth: true },
        },
        {
          name: "Instant notifications",
          tiers: { Starter: true, Scale: true, Growth: true },
        },
        {
          name: "Budgeting tools",
          tiers: { Starter: true, Scale: true, Growth: true },
        },
        {
          name: "Digital receipts",
          tiers: { Starter: true, Scale: true, Growth: true },
        },
        {
          name: "Pots to separate money",
          tiers: { Starter: false, Scale: true, Growth: true },
        },
        {
          name: "Free bank transfers",
          tiers: { Starter: false, Scale: true, Growth: false },
        },
        {
          name: "Business debit card",
          tiers: { Starter: false, Scale: true, Growth: false },
        },
      ],
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GetStartedHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="bg-gray-900">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">TrotelCoin</span>
              <Image
                className="h-12 w-auto"
                src="/trotelcoin-white.png"
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
                className="text-sm font-semibold leading-6 text-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <a
              href="https://app.trotelcoin.com"
              className="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                <Image
                  className="h-12 w-auto"
                  src="/trotelcoin-white.png"
                  alt="TrotelCoin logo"
                  width={100}
                  height={100}
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

      <main>
        <div className="isolate overflow-hidden">
          <div className="flow-root bg-gray-900 py-16 sm:pt-32 lg:pb-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                  HODL TrotelCoin. Earn NFTs.
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
                  Keep your TrotelCoin investment for 90 days to get the NFTs below.
                </p>
                <div className="mt-16 flex justify-center">
                  <div className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"></div>
                </div>
              </div>
              <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                >
                  <ellipse
                    className="invisible lg:visible xl:visible 2xl:visible"
                    cx={604}
                    cy={512}
                    fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
                    rx={604}
                    ry={512}
                  />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor="#74b9ff" />
                      <stop offset={1} stopColor="#0984e3" />
                    </radialGradient>
                  </defs>
                </svg>
                <div
                  className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                  aria-hidden="true"
                />
                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.featured
                        ? "z-10 bg-white shadow-xl ring-1 ring-gray-900/10"
                        : "bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
                      "relative rounded-2xl"
                    )}
                  >
                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                      <h2
                        id={tier.id}
                        className={classNames(
                          tier.featured ? "text-gray-900" : "text-white",
                          "text-sm font-semibold leading-6"
                        )}
                      >
                        {tier.name}
                      </h2>
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                        <div className="mt-2 flex items-center gap-x-4">
                          <p
                            className={classNames(
                              tier.featured ? "text-gray-900" : "text-white",
                              "text-4xl font-bold tracking-tight"
                            )}
                          >
                            {tier.price}
                          </p>
                          <div className="text leading-5">
                            <p
                              className={
                                tier.featured ? "text-gray-900" : "text-white"
                              }
                            >
                              TROTEL
                            </p>
                          </div>
                        </div>
                        <a
                          href="https://pancakeswap.finance/swap?outputCurrency=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5"
                          target="_blank"
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? "bg-blue-600 shadow-sm hover:bg-blue-500 hover:no-underline focus-visible:outline-blue-600"
                              : "bg-white/10 hover:bg-white/20 hover:no-underline focus-visible:outline-white",
                            "rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                          )}
                        >
                          Buy TrotelCoin
                        </a>
                      </div>
                      <div className="mt-8 flow-root sm:mt-10">
                        <ul
                          role="list"
                          className={classNames(
                            tier.featured
                              ? "divide-gray-900/5 border-gray-900/5 text-gray-600"
                              : "divide-white/5 border-white/5 text-white",
                            "-my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
                          )}
                        >
                          {tier.mainFeatures.map((mainFeature) => (
                            <li key={mainFeature} className="flex gap-x-3 py-2">
                              <CheckIcon
                                className={classNames(
                                  tier.featured
                                    ? "text-blue-600"
                                    : "text-gray-500",
                                  "h-6 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                              {mainFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-gray-50 lg:pt-14">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">
                      HODL TrotelCoin.
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Start learning now.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      You can begin your learning and earning journey without
                      possessing any TrotelCoin. However, you can enhance and
                      expedite your learning progress by owning TrotelCoin.
                    </p>
                  </div>
                  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                      {features.map((feature) => (
                        <div key={feature.name} className="flex flex-col">
                          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                            <feature.icon
                              className="h-5 w-5 flex-none text-blue-600"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>
                          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            <p className="flex-auto">{feature.description}</p>
                            <p className="mt-6">
                              <a
                                href={feature.href} target="_blank"
                                className="text-sm font-semibold leading-6 text-blue-600"
                              >
                                Learn more <span aria-hidden="true">→</span>
                              </a>
                            </p>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
