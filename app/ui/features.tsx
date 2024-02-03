"use client";

import { useInView } from "react-intersection-observer";
import "animate.css";

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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center">
              What's TrotelCoin?
            </h2>
            <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                <div className="lg:col-span-2 bg-transparent dark:bg-gray-900 bg-opacity-50 backdrop-blur-2xl border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex items-center">
                    <div className="lg:w-1/2 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          Courses
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-200 ring-1 ring-inset ring-green-700/10 dark:ring-green-200/30">
                          Beta
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Learn all the basics to start using crypto.
                      </span>
                    </div>
                    <div className="hidden lg:block lg:w-1/2 text-8xl text-center">
                      📚
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-2xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
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
                      Test your knowledge and earn TrotelCoins by answering
                      quizzes.
                    </span>
                  </div>
                </div>
                <div className="backdrop-blur-2xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                      <span>Videos 🎥 </span>
                      <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-200 ring-1 ring-inset ring-yellow-700/10 dark:ring-yellow-200/30">
                        Not available
                      </span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Watch videos and learn from another perspective.
                    </span>
                  </div>
                </div>
                <div className="backdrop-blur-2xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                      <span>Gamification 🎯 </span>
                      <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-200 ring-1 ring-inset ring-green-700/10 dark:ring-green-200/30">
                        Beta
                      </span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Enjoy learning more by completing challenges and earning badges.
                    </span>
                  </div>
                </div>
                <div className="backdrop-blur-2xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                      <span>AI 🤖 </span>
                      <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-200 ring-1 ring-inset ring-yellow-700/10 dark:ring-yellow-200/30">
                        Not available
                      </span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Get personalized learning recommendations.
                    </span>
                  </div>
                </div>
                <div className="backdrop-blur-2xl bg-transparent dark:bg-gray-900 bg-opacity-50 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                      <span>Community 🙈 </span>
                      <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-200 ring-1 ring-inset ring-yellow-700/10 dark:ring-yellow-200/30">
                        Not available
                      </span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Create your courses and learn from others.
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block lg:col-span-2 bg-transparent dark:bg-gray-900 bg-opacity-50 backdrop-blur-2xl border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 p-6 rounded-2xl">
                  <div className="flex">
                    <div className="lg:w-1/2 flex flex-col gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                        <span>Coming soon... </span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        We're constantly working on new features to make your
                        learning experience better.
                      </span>
                    </div>
                    <div className="hidden lg:block lg:w-1/2 text-8xl text-center">
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
