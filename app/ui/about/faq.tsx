"use client";

import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import "animate.css";

const faqs = [
  {
    question: "What is TrotelCoin?",
    answer:
      "TrotelCoin is a platform designed to offer an interactive way to understand how cryptocurrencies work. It was launched with the aim of providing educational resources and practical experiences related to cryptocurrencies, Web3 and blockchain technology.",
  },
  {
    question: "How can I earn TrotelCoin on the platform?",
    answer:
      "You can earn TrotelCoin by participating in interactive quizzes and activities as you progress through the learning process on the TrotelCoin platform.",
  },
  {
    question: "How do I get my TrotelCoins on my wallet?",
    answer:
      "You can claim your TrotelCoins whenever you want from the application. You earn rewards off chain so you don't have to pay gas fees for each quiz answered.",
  },
  {
    question:
      "How are rewards calculated for learners on the TrotelCoin platform?",
    answer:
      "Learner rewards are calculated using an algorithm that considers the total number of quizzes answered by all users. The reward decreases as users answer more quizzes however it is reinitialized every day.",
  },
  {
    question: "How does TrotelCoin prevent fraud and abuse in its quiz system?",
    answer:
      "TrotelCoin implements a system of unique quiz participation and validation of captcha to prevent potential fraud and abuse.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div>
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100/10 animate__animated animate__fadeIn">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-100">
                FAQ
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
                {faqs.map((faq, index) => (
                  <div key={index} className="pt-6">
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
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </button>
                    </dt>
                    {activeIndex === index && (
                      <dd className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
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
      </div>
    </>
  );
}
