"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import "animate.css";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";

const tiers = [
  {
    name: "Intermediate",
    id: "tier-intermediate",
    href: "https://app.uniswap.org/tokens/polygon/0x85057d5a8d063f9075ba963101d76352051675e5",
    price: 10000,
    description: "Wanna learn more about crypto?",
    features: [
      "Access to more courses providing in-depth content and additional tutorials",
      "Gamification features to enhance your learning experience",
    ],
  },
  {
    name: "Expert",
    id: "tier-expert",
    href: "https://app.uniswap.org/tokens/polygon/0x85057d5a8d063f9075ba963101d76352051675e5",
    price: 50000,
    description: "Wanna be a crypto expert?",
    features: [
      "All the benefits of Intermediate level",
      "Early access to experimental features and projects",
      "Join an exclusive crypto community to network and more",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <div className="isolate overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl animate__animated animate__fadeIn">
            <h2 className="text-base font-semibold leading-7 text-blue-300 dark:text-blue-300">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Buy TrotelCoin.
            </p>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-200">
              Claim NFTs according to your TrotelCoin holdings.
            </p>
            <svg
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse
                cx={604}
                cy={512}
                fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                  <stop stopColor="#74b9ff" />
                  <stop offset={1} stopColor="#0984e3" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flow-root bg-white pb-24 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, index) => (
                  <Tilt
                    perspective={800}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    key={index}
                  >
                    <div className="flex flex-col animate__animated animate__bounceIn justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                      <div>
                        <h3
                          id={tier.id}
                          className="text-base font-semibold leading-7 text-blue-500"
                        >
                          {tier.name}
                        </h3>
                        <div className="mt-4 flex items-baseline gap-x-2">
                          <span className="text-5xl font-bold tracking-tight text-gray-900">
                            <CountUp
                              start={0}
                              end={tier.price}
                              duration={1}
                              decimal="."
                              decimals={0}
                            />{" "}
                            <span className="text-base">TROTEL</span>
                          </span>
                        </div>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                          {tier.description}
                        </p>
                        <ul
                          role="list"
                          className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                        >
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex gap-x-3">
                              <CheckIcon
                                className="h-6 w-5 flex-none text-blue-500"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={tier.href}
                        target="_blank"
                        aria-describedby={tier.id}
                        className="mt-8 block rounded-md bg-blue-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-gray-100 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                      >
                        Buy TrotelCoin
                      </Link>
                    </div>
                  </Tilt>
                ))}
                <div className="lg:col-span-2">
                  <div className="flex flex-col lg:flex-row lg:items-center animate__animated animate__bounceIn items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10">
                    <div className="lg:min-w-0 lg:flex-1">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-blue-500">
                        Are you eligible?
                      </h3>
                      <p className="mt-1 text-base leading-7 text-gray-700">
                        Claim the NFT that corresponds to your TrotelCoin
                        holdings.
                      </p>
                    </div>
                    <Link
                      href="https://app.trotelcoin.com/premium"
                      className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-gray-900 ring-1 ring-inset ring-blue-500 hover:ring-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                      Claim now <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
