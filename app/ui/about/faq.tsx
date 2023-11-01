"use client";

import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is TrotelCoin?",
    answer:
      "TrotelCoin is a platform designed to offer an interactive way to understand how cryptocurrencies work. It was launched in May 2023 with the aim of providing educational resources and practical experiences related to cryptocurrencies.",
  },
  {
    question: "Who created TrotelCoin?",
    answer:
      "TrotelCoin was created by a passionate engineering student dedicated to educating about cryptocurrency and its potential to empower individuals.",
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
    question: "How is the TrotelCoin token ($TROTEL) distributed?",
    answer:
      "At its launch, TrotelCoin has a total supply of 100,000 tokens. These tokens are allocated for various purposes, including liquidity on PancakeSwap, rewards for engagement on the platform, private sales, and strategic initiatives.",
  },
  {
    question:
      "How are rewards calculated for users on the TrotelCoin platform?",
    answer:
      "User rewards are calculated using a formula that considers the number of quizzes answered and a base reward for the quizzes. The reward decreases as users answer more quizzes.",
  },
  {
    question:
      "Why is token burning not implemented in the TrotelCoin project strategy?",
    answer:
      "TrotelCoin has chosen not to implement token burning to maintain the existing token supply and avoid potential disruptions to the ecosystem. This ensures the stability of the token's value and its continued utility within the project's ecosystem.",
  },
  {
    question: "How does TrotelCoin prevent fraud and abuse in its quiz system?",
    answer:
      "TrotelCoin implements a system of unique quiz participation and links phone numbers to wallets to prevent potential fraud and abuse. There are also plans to consider the use of Worldcoin ID for enhanced authentication in the future.",
  },
  {
    question:
      "Where can I learn more about TrotelCoin and details of its project?",
    answer:
      "You can find more information about TrotelCoin and details of its project in the provided whitepaper and on the official TrotelCoin platform.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-100">
            FAQ
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    className="flex w-full items-start justify-between text-left text-gray-900 dark:text-gray-100"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {activeIndex === index ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                {activeIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-200">
                      {faq.answer}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
