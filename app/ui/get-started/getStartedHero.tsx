import {
  WalletIcon,
  Cog6ToothIcon,
  CreditCardIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Choose your Wallet",
    description:
      "Start by choosing a wallet that suits your needs and preferences. Your wallet will serve as a secure hub for your TrotelCoin transactions.",
    href: "https://docs.trotelcoin.com/get-started/choose-your-wallet",
    icon: WalletIcon,
  },
  {
    name: "Configure your Wallet",
    description:
      "Once you've chosen your wallet, configure it according to your preferences and security settings.",
    href: "https://docs.trotelcoin.com/get-started/configure-your-wallet",
    icon: Cog6ToothIcon,
  },
  {
    name: "Get TrotelCoin",
    description:
      "Whether you earn, exchange, or buy TrotelCoin, having them in your wallet can accelerate and enrich your learning and earning opportunities.",
    href: "https://docs.trotelcoin.com/get-started/get-some-trotelcoin",
    icon: CreditCardIcon,
  },
];

const pricing = {
  tiers: [
    {
      name: "Beginner",
      id: "tier-beginner",
      href: "/buy",
      featured: false,
      description: "No holding requirement.",
      price: "0",
      mainFeatures: [
        "Free access to all educational courses and resources",
        "Governance decision-making based on the amount of TrotelCoin in your possession",
      ],
    },
    {
      name: "Expert",
      id: "tier-expert",
      href: "/buy",
      featured: true,
      description: "Hold 50k TrotelCoin.",
      price: "50000",
      mainFeatures: [
        "All Beginner and Intermediate level advantages",
        "Access to more courses providing in-depth content and additional tutorials",
        "Early access to experimental features and projects",
        "Join an exclusive crypto community to network, collaborate on projects and explore TrotelCoin projects",
      ],
    },
    {
      name: "Intermediate",
      id: "tier-intermediate",
      href: "/buy",
      featured: false,
      description: "Hold 10k TrotelCoin.",
      price: "10000",
      mainFeatures: [
        "All Beginner level benefits",
        "Access to more courses providing in-depth content and additional tutorials",
        "Gamification features to enhance your learning experience",
      ],
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GetStartedHero() {
  return (
    <>
      <div className="isolate overflow-hidden">
        <div className="relative bg-white dark:bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-200">
                    HODL TrotelCoin
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                    Learn now.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                    You can start learning and earning crypto without owning
                    TrotelCoin. However, you can enhance your learning by owning
                    TrotelCoin.
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                      <div key={feature.name} className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                          <feature.icon
                            className="h-5 w-5 flex-none text-blue-600 dark:text-blue-200"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-200">
                          <p className="flex-auto">{feature.description}</p>
                          <p className="mt-6">
                            <a
                              href={feature.href}
                              target="_blank"
                              className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100"
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
    </>
  );
}
