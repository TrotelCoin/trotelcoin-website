import {
  CheckIcon,
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
      href: "https://app.uniswap.org/tokens/polygon/0x2275059f310e31c2f43b24a9932882196659e1c4",
      featured: false,
      description: "Free.",
      price: "0",
      mainFeatures: [
        "Free access to all educational courses and resources",
        "Governance decision-making based on the amount of govTrotelCoin in your possession",
      ],
    },
    {
      name: "Expert",
      id: "tier-expert",
      href: "https://app.uniswap.org/tokens/polygon/0x2275059f310e31c2f43b24a9932882196659e1c4",
      featured: true,
      description: "Price of 50k TrotelCoin.",
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
      href: "https://app.uniswap.org/tokens/polygon/0x2275059f310e31c2f43b24a9932882196659e1c4",
      featured: false,
      description: "Price of 10k TrotelCoin.",
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
        <div className="flow-root bg-black py-16 sm:pt-32 lg:pb-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10">
              <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                HODL TrotelCoin. Earn NFT.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
                Purchase TrotelCoin to benefit from the following NFTs.
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
                className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-black/80 lg:ring-1 lg:ring-white/10"
                aria-hidden="true"
              />
              {pricing.tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured
                      ? "z-10 bg-white shadow-xl ring-1 ring-gray-900/10"
                      : "bg-black/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
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
        <div className="relative bg-gray-50 dark:bg-gray-900 lg:pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
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
                              className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-200"
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
