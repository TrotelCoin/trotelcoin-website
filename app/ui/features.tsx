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
    name: "Gamification",
    description: "Earn badges and XPs by completing courses and quizzes.",
    beta: true,
    unavailable: false,
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
];

export default function Features() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-white dark:bg-black py-24 sm:py-32">
      <div ref={ref1}>
        {inView1 && (
          <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                <div className="lg:col-span-2 bg-transparent dark:bg-gray-900 bg-opacity-50 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex items-center">
                    <div className="w-1/2 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          Courses 📚
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-200 ring-1 ring-inset ring-green-700/10 dark:ring-green-200/30">
                          Beta
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Learn all you need to become a web3 expert and navigate
                        confidently.
                      </span>
                    </div>
                    <div className="w-1/2 text-8xl text-center pointer-events-none">
                      🎓
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Quizzes ✨
                      </span>
                      <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-200 ring-1 ring-inset ring-green-700/10 dark:ring-green-200/30">
                        Beta
                      </span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Test your knowledge and earn TrotelCoin by answering
                      quizzes.
                    </span>
                  </div>
                </div>
                <div className="backdrop-blur-xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                      <span>Videos 🎥 </span>
                      <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-200 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-200/30">
                        Not available
                      </span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Not into text? Acquire knowledge via carefully crafted
                      videos.
                    </span>
                  </div>
                </div>
                <div className="backdrop-blur-xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                      <span>Gamification 🎯 </span>
                      <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-200 ring-1 ring-inset ring-green-700/10 dark:ring-green-200/30">
                        Beta
                      </span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Earn badges and XPs by completing courses and quizzes.
                    </span>
                  </div>
                </div>
                <div className="backdrop-blur-xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                      <span>AI 🤖 </span>
                      <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-200 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-200/30">
                        Not available
                      </span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Craft your own learning journey based on your interests.
                    </span>
                  </div>
                </div>
                <div className="backdrop-blur-xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                      <span>Community 🙈 </span>
                      <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-200 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-200/30">
                        Not available
                      </span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Burn TrotelCoins to submit your courses for voting.
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-transparent dark:bg-gray-900 bg-opacity-50 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex">
                    <div className="w-1/2 flex flex-col gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                        <span>Coming soon... </span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        We're constantly working on new features to make your
                        learning experience better.
                      </span>
                    </div>
                    <div className="w-1/2 text-8xl text-center pointer-events-none">
                      🦊
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
