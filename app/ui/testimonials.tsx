"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const featuredTestimonial = {
  body: "Quite often, lack of understanding and the fear of losing money push users towards the exit. Thanks to TrotelCoin, users will have the keys in hand to take possession of this essential technology for our economic future.",
  author: {
    name: "Cryptonaute",
    handle: "cryptonaute_btc",
    imageUrl: "🦄",
    logoUrl:
      "https://cryptonaute.fr/wp-content/themes/sage/public/images/logo-cryptonaute.1bb4d1.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "I appreciate the effort you've put into creating a user-friendly and secure platform for cryptocurrency transactions.",
        author: {
          name: "Atenajos",
          handle: "atenajos",
          imageUrl: "🐒",
        },
      },
      {
        body: "Hello how can i buy the token?",
        author: {
          name: "Jasperman",
          handle: "jasperman",
          imageUrl: "🐣",
        },
      },
      {
        body: "You are doing a good job!",
        author: {
          name: "Bully27",
          handle: "bully2727",
          imageUrl: "🐒",
        },
      },
      {
        body: "I'm ready to learn, seems easy enough.",
        author: {
          name: "DigiSkrilla",
          handle: "digiskrilla_55679",
          imageUrl: "🐣",
        },
      },
    ],
    [
      {
        body: "Great community!",
        author: {
          name: "Kitkat2171",
          handle: "kitkat2771",
          imageUrl: "🐣",
        },
      },
      {
        body: "The founder is very very involved/motivated and it's what I can observe with what you've already created here with TrotelCoin. Well done by the way!",
        author: {
          name: "Panda 🐼",
          handle: "panda974",
          imageUrl: "🐼",
        },
      },
    ],
  ],
  [
    [
      {
        body: "The course on creating a wallet is good, I didn't even know you could have a paper wallet.",
        author: {
          name: "Lekloug",
          handle: "lekloug",
          imageUrl: "🐒",
        },
      },
      {
        body: "So far so good!",
        author: {
          name: "prosparkky",
          handle: "prosparkky",
          imageUrl: "🐣",
        },
      },
    ],
    [
      {
        body: "Bullish on Trotel",
        author: {
          name: "cryptohunter145",
          handle: "cryptohunter145",
          imageUrl: "🐒",
        },
      },
      {
        body: "I commend your mission sir, if you truly wish to make Web3 a less shitty place because let's be real crypto is fucking rough.",
        author: {
          name: "godmonkey",
          handle: "godmonkey",
          imageUrl: "🐒",
        },
      },
      {
        body: "It's very pretty, clean, and the quizzes are great for validating knowledge and awarding rewards.",
        author: {
          name: "Benoitded",
          handle: "benoitded",
          imageUrl: "🐸",
        },
      },
      {
        body: "Nice app!",
        author: {
          name: "PetitKhronos",
          handle: "petitkhronos",
          imageUrl: "🐣",
        },
      },
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white dark:bg-gray-900 pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#74b9ff] to-[#0984e3]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#74b9ff] to-[#0984e3] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-500 dark:text-blue-300">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            What people say about us?
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 dark:text-gray-100 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <Tilt
            perspective={800}
            glareEnable={true}
            glareMaxOpacity={0.15}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className="rounded-2xl bg-white dark:bg-gray-800 border border-transparent hover:border-gray-900/50 dark:hover:border-gray-100/50 shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
          >
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/20 dark:border-gray-100/20 px-6 py-4 sm:flex-nowrap">
              <span className="flex-none text-4xl">
                {featuredTestimonial.author.imageUrl}
              </span>
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-700 dark:text-gray-100">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <Link
                href="https://cryptonaute.fr/entretien-avec-fondateur-trotelcoin-gagner-largent-apprenant-crypto/"
                target="_blank"
              >
                <Image
                  className="h-6 w-auto flex-none"
                  src={featuredTestimonial.author.logoUrl}
                  alt="Cryptonaute"
                  width={120}
                  height={32}
                />
              </Link>
            </figcaption>
          </Tilt>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              className="space-y-8 xl:contents xl:space-y-0"
              key={columnGroupIdx}
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial, index) => (
                    <Tilt
                      perspective={800}
                      glareEnable={true}
                      glareMaxOpacity={0.15}
                      tiltMaxAngleX={5}
                      tiltMaxAngleY={5}
                      key={index}
                      className="rounded-2xl bg-white dark:bg-gray-800 border border-transparent hover:border-gray-900/50 dark:hover:border-gray-100/50 p-6 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-100/5"
                    >
                      <blockquote className="text-gray-900 dark:text-gray-100">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <span className="flex-none text-4xl">
                          {testimonial.author.imageUrl}
                        </span>
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-700 dark:text-gray-300">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </Tilt>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
