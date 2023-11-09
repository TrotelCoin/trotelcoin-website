"use client";

import Moralis from "moralis";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Token() {
  const [tokenBalance, setTokenBalance] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      try {
        const balanceResponse = await axios.get("https://api.bscscan.com/api", {
          params: {
            module: "account",
            action: "tokenbalance",
            contractaddress: "0xf04ab1a43cBA1474160B7B8409387853D7Be02d5",
            address: "0xa9ddd1a0856051554f89c09b39b7bb7facb61538",
            tag: "latest",
            apiKey: process.env.BSCSCAN_API_KEY,
          },
        });

        // Check if Moralis is already started
        if (!Moralis.Core.isStarted) {
          // Initialize Moralis with the API key
          await Moralis.start({
            apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
          });
        }

        const response = await Moralis.EvmApi.token.getTokenPrice({
          chain: "0x38",
          include: "percent_change",
          address: "0xf04ab1a43cba1474160b7b8409387853d7be02d5",
        });

        const tokenBalance = parseFloat(balanceResponse.data.result) / 1e18;
        const tokenPrice = response.raw.usdPrice;

        setTokenBalance(tokenBalance);
        setTokenPrice(tokenPrice);
      } catch (error) {
        console.error("Error fetching token information:", error);
      }
    };

    fetchTokenInfo();
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
            <p className="flex-none text-3xl font-bold tracking-tight text-black dark:text-white">
              {tokenPrice.toFixed(3)} USD
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
            <p className="flex-none text-3xl font-bold tracking-tight text-black dark:text-white">
              {(tokenPrice * 1e5).toFixed(0).toLocaleString()} USD
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
            <p className="flex-none text-3xl font-bold tracking-tight text-black dark:text-white">
              {tokenBalance.toFixed(0).toLocaleString()} TROTEL
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
