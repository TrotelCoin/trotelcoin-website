import {
  WalletIcon,
  Cog6ToothIcon,
  CreditCardIcon,
} from "@heroicons/react/20/solid";
import "animate.css";
import Link from "next/link";

const features = [
  {
    name: "Choose your wallet",
    description:
      "Start by choosing a wallet that suits your needs and preferences. Your wallet will serve as the way you interact with decentralized applications.",
    href: "https://docs.trotelcoin.com/get-started/choose-your-wallet",
    icon: WalletIcon,
  },
  {
    name: "Configure your wallet",
    description:
      "Once you've chosen your wallet, configure it according to your preferences and security settings.",
    href: "https://docs.trotelcoin.com/get-started/configure-your-wallet",
    icon: Cog6ToothIcon,
  },
  {
    name: "Get some TrotelCoins",
    description:
      "Whether you earn, exchange, or buy TrotelCoins, having them in your wallet can accelerate and enrich your learning on the TrotelCoin platform.",
    href: "https://docs.trotelcoin.com/get-started/get-some-trotelcoin",
    icon: CreditCardIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GetStartedHero() {
  return (
    <>
      <div className="isolate overflow-hidden animate__animated animate__fadeIn">
        <div className="relative bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-base font-semibold leading-7 text-blue-500 dark:text-blue-300">
                    Learn & earn crypto
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                    Get started.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                    You can start learning and earning crypto without having any
                    TrotelCoin. However, holding TrotelCoin will make your
                    experience better.
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                          <feature.icon
                            className="h-5 w-5 flex-none text-blue-500 dark:text-blue-300"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-200">
                          <p className="flex-auto">{feature.description}</p>
                          <p className="mt-6">
                            <Link
                              href={feature.href}
                              target="_blank"
                              className="text-sm font-semibold leading-6 text-blue-500 dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-400"
                            >
                              Learn more <span aria-hidden="true">→</span>
                            </Link>
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
    </>
  );
}
