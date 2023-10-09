import Moralis from "moralis";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Token() {
  const [tokenBalance, setTokenBalance] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [tokenFDV, setTokenFDV] = useState(0);

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
            apiKey: "XB35XVQWJ47AS4IAMPTGFM233X1Q2UEAM1",
          },
        });

        await Moralis.start({
          apiKey: "YOUR_API_KEY",
        });

        const response = await Moralis.EvmApi.token.getTokenPrice({
          chain: "0x38",
          include: "percent_change",
          address: "0xf04ab1a43cba1474160b7b8409387853d7be02d5",
        });

        const geckoResponse = await axios.get(
          "https://api.geckoterminal.com/api/v2/networks/bsc/pools/0x3da23378d12ec40233a9f0a0e7c5194e2222b255"
        );

        const tokenBalance = parseFloat(balanceResponse.data.result) / 1e18;
        const tokenPrice = response.raw.usdPrice;
        const tokenFDV = parseFloat(geckoResponse.data.data.attributes.fdv_usd);

        setTokenBalance(tokenBalance);
        setTokenPrice(tokenPrice);
        setTokenFDV(tokenFDV);
      } catch (error) {
        console.error("Error fetching token information:", error);
      }
    };

    fetchTokenInfo();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tokenomics.
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            TrotelCoin serves as the token designed to incentivize your
            engagement with blockchain and related knowledge.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 hover:bg-white p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start border-2 border-black">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
              {tokenPrice.toFixed(3)} USD
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                Token price.
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                The token price is determined by user demand.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 hover:bg-gray-800 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 border-2 border-black">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              {tokenFDV.toFixed(0)} USD
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                Market cap.
              </p>
              <p className="mt-2 text-base leading-7 text-gray-400">
                The market cap signifies the overall value of TrotelCoin's token
                within the market.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-blue-600 hover:bg-blue-500 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 border-2 border-black">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              {tokenBalance.toFixed(0)} TROTEL
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                Remaining token rewards.
              </p>
              <p className="mt-2 text-base leading-7 text-blue-200">
                These are the tokens that still await distribution as rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
