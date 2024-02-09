import React from "react";
import Link from "next/link";
import "animate.css";

const link: string = "https://docs.trotelcoin.com";

const featuresData = [
  {
    title: "📚 Courses",
    description: "The courses are made to be easy to understand.",
    status: "",
    color: "",
  },
  {
    title: "🤝 Social Login",
    description: "Login with your favorite social network without any wallet.",
    status: "",
    color: "",
  },
  {
    title: "📝 Quizzes",
    description: "Test your knowledge and earn crypto by answering quizzes.",
    status: "Beta",
    color: "green",
  },
  {
    title: "🎥 Videos",
    description: "Watch videos and learn from another perspective.",
    status: "Not available",
    color: "yellow",
  },
  {
    title: "🎯 Gamification",
    description:
      "Enjoy learning more by completing challenges and earning badges.",
    status: "Beta",
    color: "green",
  },
  {
    title: "🦄 Tailored",
    description: "Get personalized learning recommendations.",
    status: "Not available",
    color: "yellow",
  },
  {
    title: "🙈 Community",
    description: "Create your courses, earn more and learn from others.",
    status: "Not available",
    color: "yellow",
  },
  {
    title: "Coming soon...",
    description:
      "We're constantly working on new features to make your learning experience better.",
    status: "",
    color: "",
  },
];

export default function Features() {
  return (
    <div className="bg-white dark:bg-black py-24 sm:py-32">
      <div>
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
              {featuresData.map((feature, index) => (
                <Link
                  href={link}
                  target="_blank"
                  className={`${
                    feature.title === "Coming soon..." ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`flex bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-900/10 hover:border-gray-900/50 dark:border-transparent backdrop-blur-2xl p-6 rounded-xl`}
                  >
                    <div className="flex flex-col gap-2">
                      <span
                        className={`text-2xl font-bold text-gray-900 dark:text-gray-100 flex gap-2 items-center`}
                      >
                        <span>{feature.title}</span>
                        {feature.status && (
                          <span
                            className={`inline-flex items-center rounded-full bg-${feature.color}-50 dark:bg-${feature.color}-400/10 px-2 py-1 text-xs font-medium text-${feature.color}-700 dark:text-${feature.color}-200 ring-1 ring-inset ring-${feature.color}-600/20 dark:ring-transparent`}
                          >
                            {feature.status}
                          </span>
                        )}
                      </span>
                      <span className={`text-gray-700 dark:text-gray-300`}>
                        {feature.description}
                      </span>

                      <span className="text-blue-500 dark:text-blue-300">
                        Learn more &rarr;
                      </span>
                    </div>
                    {feature.title === "Coming soon..." && (
                      <div className="text-8xl w-1/2 flex justify-center items-center">
                        🦊
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
