"use client";

import React, { useState, useEffect } from "react";
import { useBalance } from "wagmi";
import { bsc } from "wagmi/chains";

const trotelCoinRewardsAddress = "0xA9Ddd1a0856051554f89C09B39B7bB7fAcB61538";
const trotelCoinAddress = "0xf04ab1a43cBA1474160B7B8409387853D7Be02d5";

export default function Token() {
  const [tokenPrice, setTokenPrice] = useState<number | null>(0);
  const [error, setError] = useState<string>("");

  const { data: tokenBalance } = useBalance({
    address: trotelCoinRewardsAddress,
    token: trotelCoinAddress,
    chainId: bsc.id,
    watch: true,
    enabled: true,
  });

  useEffect(() => {
    const fetchTokenPrice = async () => {
      try {
        const response = await fetch("/api/moralis/tokenPrice", {
          cache: "no-store",
        });
        const data = await response.json();
        setTokenPrice(data.tokenPrice);
      } catch (error) {
        setError("Error fetching token information");
        setTokenPrice(0);
        console.error("Error fetching token information:", error);
      }
    };

    fetchTokenPrice();
  }, []);

  function format(number: string): string {
    const numberFixed = parseFloat(number).toFixed(0).toString();

    const formattedNumber: string = numberFixed.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      " "
    );

    return formattedNumber;
  }

  return (
    <div className="bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Tokenomics.
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">
            TrotelCoin is a token designed to encourage your engagement in
            blockchain and related knowledge.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl backdrop-blur-xl bg-gray-50 dark:bg-gray-900 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50">
            <p
              className={`flex-none text-3xl font-bold tracking-tight text-black dark:text-white ${
                error !== "" || !tokenPrice ? "animate-pulse" : ""
              }`}
            >
              {error !== "" ? "0" : !tokenPrice ? "0" : tokenPrice.toFixed(3)}{" "}
              USD
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-black dark:text-white">
                TrotelCoin price.
              </p>
              <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">
                The token's price is determined by user demand.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl backdrop-blur-xl bg-gray-50 dark:bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50">
            <p
              className={`flex-none text-3xl font-bold tracking-tight text-black dark:text-white ${
                error !== "" || !tokenPrice ? "animate-pulse" : ""
              }`}
            >
              {error !== ""
                ? "0"
                : !tokenPrice
                ? "0"
                : format((tokenPrice * 1e5).toFixed(0))}{" "}
              USD
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-black dark:text-white">
                Market cap.
              </p>
              <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">
                The market capitalization represents the overall value of the
                TrotelCoin token in the market.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl backdrop-blur-xl bg-gray-50 dark:bg-gray-900 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 border border-black/10 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50">
            <p
              className={`flex-none text-3xl font-bold tracking-tight text-black dark:text-white ${
                tokenBalance === null || tokenBalance === undefined
                  ? "animate-pulse"
                  : ""
              }`}
            >
              {tokenBalance === null || tokenBalance === undefined
                ? "0"
                : format(parseFloat(tokenBalance.formatted).toFixed(0))}{" "}
              TROTEL
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-black dark:text-white">
                Available rewards.
              </p>
              <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">
                These are tokens that have not yet been distributed as rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
