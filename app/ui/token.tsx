"use client";

import React, { useState, useEffect } from "react";
import { useBlockNumber, useContractRead } from "wagmi";
import { polygon } from "wagmi/chains";
import TrotelCoinABI from "@/abi/trotelCoinABI";

const trotelCoinAddress = "0x85057d5a8d063f9075Ba963101D76352051675E5";

export default function Token() {
  const [tokenPrice, setTokenPrice] = useState<number | null>(0);
  const [error, setError] = useState<string>("");
  const [tokenRewards, setTokenRewards] = useState<string>("0");

  const { data: blockNumber } = useBlockNumber();

  console.log(blockNumber);

  const { data: totalSupply } = useContractRead({
    address: trotelCoinAddress,
    abi: TrotelCoinABI,
    functionName: "getPastTotalSupply",
    args: [blockNumber as bigint],
    chainId: polygon.id,
    watch: true,
    enabled: Boolean(blockNumber),
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
              {error !== "" ? "0" : !tokenPrice ? "0" : tokenPrice.toFixed(5)}{" "}
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
                : (
                    tokenPrice *
                    parseFloat(Number(totalSupply)?.toString() as string)
                  ).toFixed(5)}{" "}
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
                tokenRewards === null || tokenRewards === undefined
                  ? "animate-pulse"
                  : ""
              }`}
            >
              {tokenRewards === null || tokenRewards === undefined
                ? "0"
                : parseFloat(tokenRewards).toFixed(0)}{" "}
              TROTEL
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-black dark:text-white">
                Rewards distributed.
              </p>
              <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">
                These are tokens that have been distributed as rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
