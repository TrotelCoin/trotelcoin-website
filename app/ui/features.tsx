"use client";

import { useInView } from "react-intersection-observer";
import "animate.css";
import Link from "next/link";

const link: string = "https://docs.trotelcoin.com";

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
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                What's TrotelCoin?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
                A lot of features so you can learn better.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                <Link href={link} target="_blank">
                  <div className="bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            📚 Courses
                          </span>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          The courses are made to be easy to understand.
                        </span>
                        <span className="text-blue-500 dark:text-blue-300">
                          Learn more &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={link} target="_blank">
                  <div className="bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            🤝 Social Login
                          </span>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Login with your favorite social network without any
                          wallet.
                        </span>
                        <span className="text-blue-500 dark:text-blue-300">
                          Learn more &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={link} target="_blank">
                  <div className="bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          📝 Quizzes
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-200 ring-1 ring-inset ring-green-600/20 dark:ring-transparent">
                          Beta
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Test your knowledge and earn crypto by answering
                        quizzes.
                      </span>
                      <span className="text-blue-500 dark:text-blue-300">
                        Learn more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href={link} target="_blank">
                  <div className="bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl">
                    <div className="flex flex-col gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                        <span>🎥 Videos </span>
                        <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-200 ring-1 ring-inset ring-yellow-600/20 dark:ring-transparent">
                          Not available
                        </span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Watch videos and learn from another perspective.
                      </span>
                      <span className="text-blue-500 dark:text-blue-300">
                        Learn more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href={link} target="_blank">
                  <div className="bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl">
                    <div className="flex flex-col gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                        <span>🎯 Gamification </span>
                        <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-200 ring-1 ring-inset ring-green-600/20 dark:ring-transparent">
                          Beta
                        </span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Enjoy learning more by completing challenges and earning
                        badges.
                      </span>
                      <span className="text-blue-500 dark:text-blue-300">
                        Learn more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href={link} target="_blank">
                  <div className="bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl">
                    <div className="flex flex-col gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                        <span>🦄 Tailored </span>
                        <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-200 ring-1 ring-inset ring-yellow-600/20 dark:ring-transparent">
                          Not available
                        </span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Get personalized learning recommendations.
                      </span>
                      <span className="text-blue-500 dark:text-blue-300">
                        Learn more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href={link} target="_blank">
                  <div className="bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl">
                    <div className="flex flex-col gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                        <span>🙈 Community </span>
                        <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-200 ring-1 ring-inset ring-yellow-600/20 dark:ring-transparent">
                          Not available
                        </span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Create your courses, earn more and learn from others.
                      </span>
                      <span className="text-blue-500 dark:text-blue-300">
                        Learn more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="lg:col-span-2" href={link} target="_blank">
                  <div className="bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl">
                    <div className="flex">
                      <div className="lg:w-1/2 flex flex-col gap-2">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center">
                          <span>Coming soon... </span>
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          We're constantly working on new features to make your
                          learning experience better.
                        </span>
                        <span className="text-blue-500 dark:text-blue-300">
                          Learn more &rarr;
                        </span>
                      </div>
                      <div className="hidden lg:block lg:w-1/2 text-8xl text-center">
                        🦊
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
