import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is TrotelCoin?",
    answer:
      "TrotelCoin is a platform designed to provide an interactive way of understanding how cryptocurrencies work. It was launched in May 2023 with the goal of offering educational resources and practical experiences related to cryptocurrencies.",
  },
  {
    question: "Who created TrotelCoin?",
    answer:
      "TrotelCoin was created by one engineering student who is passionate about crypto education and its potential to empower individuals.",
  },
  {
    question: "What does TrotelCoin's educational platform offer?",
    answer:
      "The TrotelCoin platform offers comprehensive educational resources, interactive quizzes, and activities to help users understand cryptocurrencies, blockchain technology, and decentralized finance (DeFi).",
  },
  {
    question: "How can I earn TrotelCoin on the platform?",
    answer:
      "You can earn TrotelCoin by participating in interactive quizzes and activities as you progress through the learning process on the TrotelCoin platform.",
  },
  {
    question: "How is TrotelCoin's token ($TROTEL) distributed?",
    answer:
      "At its inception, TrotelCoin has a total supply of 100,000 tokens. These tokens are allocated to various purposes, including liquidity in PancakeSwap, rewards for platform engagement, private sales, and strategic initiatives.",
  },
  {
    question:
      "How are rewards calculated for users on the TrotelCoin platform?",
    answer:
      "Rewards for users are calculated using a formula that takes into account the number of quizzes answered and a base quiz reward. The reward decreases as users answer more quizzes.",
  },
  {
    question:
      "Why is token burning not implemented in TrotelCoin's project strategy?",
    answer:
      "TrotelCoin has chosen not to implement token burning to maintain the existing token supply and avoid potential disruptions to the ecosystem. This ensures stability in token value and continued utility within the project's ecosystem.",
  },
  {
    question: "How does TrotelCoin prevent fraud and abuse in its quiz system?",
    answer:
      "TrotelCoin implements a one-time quiz participation system and connects phone numbers to Wallets to prevent potential fraud and abuse. There are also plans to consider using Worldcoin ID for enhanced authentication in the future.",
  },
  {
    question:
      "Where can I learn more about TrotelCoin and its project details?",
    answer:
      "You can find more information about TrotelCoin and its project details in the provided whitepaper and on the official TrotelCoin platform.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
