"use client";

import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is TrotelCoin?",
    answer:
      "TrotelCoin is a platform designed to offer an interactive way to understand how cryptocurrencies work. It was launched with the aim of providing educational resources and practical experiences related to cryptocurrencies.",
  },
  {
    question: "How can I earn TrotelCoin on the platform?",
    answer:
      "You can earn TrotelCoin by participating in interactive quizzes and activities as you progress through the learning process on the TrotelCoin platform.",
  },
  {
    question:
      "How are rewards calculated for users on the TrotelCoin platform?",
    answer:
      "User rewards are calculated using a formula that considers the number of quizzes answered. The reward decreases as users answer more quizzes.",
  },
  {
    question: "How does TrotelCoin prevent fraud and abuse in its quiz system?",
    answer:
      "TrotelCoin implements a system of unique quiz participation and validation of captcha to prevent potential fraud and abuse. There are also plans to consider the use of Worldcoin ID for enhanced authentication in the future.",
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
        <div className="mx-auto max-w-4xl divide-y divide-stone-900/10 dark:divide-stone-100/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-stone-900 dark:text-stone-100">
            FAQ
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-stone-900/10 dark:divide-stone-100/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    className="flex w-full items-start justify-between text-left text-stone-900 dark:text-stone-100"
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
                    <p className="text-base leading-7 text-stone-600 dark:text-stone-200">
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
