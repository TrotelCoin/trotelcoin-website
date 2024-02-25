"use client";

import React, { useState, useEffect } from "react";
import "animate.css";
import CountUp from "react-countup";
import { polygon } from "wagmi/chains";
import { trotelCoinAddress } from "@/data/addresses";
import { useToken } from "wagmi";

export default function Community() {
  const [tokenPrice, setTokenPrice] = useState<number | null>(0);
  const [totalSupply, setTotalSupply] = useState<number | null>(0);
  const [trotelCoinsDistributed, setTrotelCoinsDistributed] = useState<
    number | null
  >(0);
  const [numberOfLearners, setNumberOfLearners] = useState<number | null>(0);

  const { data: tokenRewardsData } = useToken({
    chainId: polygon.id,
    address: trotelCoinAddress,
  });

  useEffect(() => {
    const fetchNumberOfLearners = async () => {
      try {
        const response = await fetch("/api/numberOfLearners", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });
        const data = await response.json();
        setNumberOfLearners(data.length);
      } catch (error) {
        setNumberOfLearners(0);
      }
    };

    fetchNumberOfLearners();

    const interval = setInterval(() => {
      fetchNumberOfLearners();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (tokenRewardsData) {
      const tokenTotalSupply = parseFloat(
        tokenRewardsData.totalSupply.formatted
      );
      const initialSupply = 100000000;

      setTrotelCoinsDistributed(tokenTotalSupply - initialSupply);
    }
  }, [tokenRewardsData]);

  useEffect(() => {
    const fetchTokenPrice = async () => {
      try {
        const response = await fetch("/api/moralis/tokenPrice", {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTokenPrice(data.tokenPrice);
      } catch (error) {
        setTokenPrice(0);
      }
    };

    const fetchTotalSupply = async () => {
      try {
        const response = await fetch("/api/totalSupply", {
          cache: "no-store",
          headers: {
            "cache-control": "no-store",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const totalSupply = await response.json();
        setTotalSupply(totalSupply);
      } catch (error) {
        setTotalSupply(0);
      }
    };

    fetchTokenPrice();
    fetchTotalSupply();

    const interval = setInterval(() => {
      fetchTokenPrice();
      fetchTotalSupply();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      id: 1,
      name: "TrotelCoin price",
      value:
        tokenPrice !== null && tokenPrice ? (
          <>
            $
            <CountUp
              start={0}
              end={parseFloat(tokenPrice?.toFixed(5))}
              duration={1}
              decimal="."
              decimals={5}
            />
          </>
        ) : (
          "$0"
        ),
    },
    {
      id: 2,
      name: "Market cap",
      value:
        tokenPrice !== null &&
        totalSupply !== null &&
        tokenPrice &&
        totalSupply ? (
          <>
            $
            <CountUp
              start={0}
              end={parseFloat(
                (tokenPrice * parseFloat(totalSupply?.toString())).toFixed(0)
              )}
              duration={1}
              decimal="."
              decimals={0}
            />
          </>
        ) : (
          "$0"
        ),
    },
    {
      id: 3,
      name: "TrotelCoins distributed",
      value: trotelCoinsDistributed ? (
        <>
          <CountUp
            start={0}
            end={trotelCoinsDistributed}
            duration={1}
            decimal="."
            decimals={0}
          />
        </>
      ) : (
        <span>0</span>
      ),
    },
    {
      id: 4,
      name: "Learners",
      value:
        numberOfLearners !== null && numberOfLearners ? (
          <>
            <CountUp
              start={0}
              end={numberOfLearners}
              duration={1}
              decimal="."
              decimals={0}
            />
          </>
        ) : (
          "0"
        ),
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-black py-24 sm:py-32">
        {" "}
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                  A growing community.
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
                  TrotelCoin is a community-driven project.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-gray-900 hover:bg-gray-800 p-8"
                  >
                    <dt className="text-sm font-semibold leading-6 text-gray-300">
                      {stat.name}
                    </dt>
                    <dd
                      className={`order-first text-3xl font-semibold tracking-tight text-gray-100 ${
                        (stat.value === "0" ||
                          stat.value ===
                          (
                            <span>
                              0 <span className="text-xs">TROTEL</span>
                            </span>
                          ) ||
                          stat.value === "$0") &&
                        "animate-pulse"
                      }`}
                    >
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
