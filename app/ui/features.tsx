"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { useInView } from "react-intersection-observer";
import "animate.css";

const features = [
  {
    name: "Courses",
    description:
      "Learn all you need to become a web3 expert and navigate confidently.",
    beta: false,
    unavailable: false,
  },
  {
    name: "Quizzes",
    description:
      "Test your knowledge and earn TrotelCoin by answering quizzes.",
    beta: false,
    unavailable: false,
  },
  {
    name: "Videos",
    description:
      "Not into text? Acquire knowledge via carefully crafted videos.",
    beta: false,
    unavailable: true,
  },
  {
    name: "Personalized",
    description: "Craft your own learning journey based on your interests.",
    beta: false,
    unavailable: true,
  },
  {
    name: "Community",
    description: "Burn TrotelCoins to submit your courses for voting.",
    beta: false,
    unavailable: true,
  },
  {
    name: "Gamification",
    description: "Earn badges and XPs by completing courses and quizzes.",
    beta: false,
    unavailable: true,
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="bg-white dark:bg-black py-24 sm:py-32">
      {inView ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-200">
                The best way to learn fast & well
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                All-in-one dApp.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-700 dark:text-gray-300">
                From learning to earning, TrotelCoin is the dApp for growing
                your crypto knowledge and navigate safely in the web3 world.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-700 dark:text-gray-300 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900 dark:text-gray-100">
                    <CheckIcon
                      className="absolute left-0 top-1 h-5 w-5 text-blue-500 dark:text-blue-100"
                      aria-hidden="true"
                    />
                    <div className="flex items-center gap-2">
                      {feature.name}{" "}
                      {feature.unavailable ? (
                        <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-200 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-200/30">
                          Not available yet
                        </span>
                      ) : null}
                    </div>
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : null}
    </div>
  );
}
