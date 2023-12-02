"use client";

import React, { useState, useEffect } from "react";

const BuySection = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [window.matchMedia("(prefers-color-scheme: dark)").matches]);

  return (
    <>
      <div className="bg-white dark:bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Buy TrotelCoin.
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">
            Buying TrotelCoin will make your learning journey better.
          </p>
          <div className="flex flex-wrap mt-10 gap-6 justify-between">
            <div className="w-full md:w-7/12">
              {theme === "light" ? (
                <iframe
                  height={725}
                  style={{
                    overflow: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                  className="rounded-2xl w-full overflow-auto backdrop-blur-xl border border-black/10"
                  src="https://coinbrain.com/coins/poly-0x85057d5a8d063f9075ba963101d76352051675e5/lite?theme=light&padding=16&currency=USD"
                ></iframe>
              ) : (
                <iframe
                  height={722}
                  style={{
                    overflow: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                  className="rounded-2xl w-full overflow-auto backdrop-blur-xl border border-white/20"
                  src="https://coinbrain.com/coins/poly-0x85057d5a8d063f9075ba963101d76352051675e5/lite?theme=dark&padding=16&currency=USD"
                ></iframe>
              )}
            </div>
            <div className="w-full md:w-1/3 min-w-min">
              {theme === "light" ? (
                <iframe
                  height={722}
                  style={{
                    overflow: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                  className="rounded-2xl w-full overflow-auto backdrop-blur-xl border border-black/10"
                  allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
                  src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x85057d5a8d063f9075Ba963101D76352051675E5&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=true&onRampTokenAddress=0x85057d5a8d063f9075Ba963101D76352051675E5&onRampLockToken=true&stakeDisabled=true&network=polygon&lightMode=true&primaryColor=%235e38f4&backgroundColor=transparent&roundedCorners=10&padding=20&refId=WfjJqs"
                ></iframe>
              ) : (
                <iframe
                  height={725}
                  style={{
                    overflow: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                  className="rounded-2xl w-full overflow-auto backdrop-blur-xl border border-white/20"
                  allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
                  src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x85057d5a8d063f9075Ba963101D76352051675E5&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=true&onRampTokenAddress=0x85057d5a8d063f9075Ba963101D76352051675E5&onRampLockToken=true&stakeDisabled=true&network=polygon&lightMode=false&primaryColor=%235e38f4&backgroundColor=transparent&roundedCorners=10&padding=20&refId=WfjJqs"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuySection;
