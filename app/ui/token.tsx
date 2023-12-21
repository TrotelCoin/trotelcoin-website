"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

const trotelCoinAddress = "0x85057d5a8d063f9075Ba963101D76352051675E5";

export default function Token() {
  const [tokenPrice, setTokenPrice] = useState<number | null>(0);
  const [totalSupply, setTotalSupply] = useState<number | null>(0);
  const [error, setError] = useState<string>("");
  const [tokenRewards, setTokenRewards] = useState<string>("0");

  const { ref, inView } = useInView({
    triggerOnce: true,
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

    const fetchTotalSupply = async () => {
      try {
        const response = await fetch("/api/totalSupply", {
          cache: "no-store",
        });
        const totalSupply = await response.json();
        setTotalSupply(totalSupply);
      } catch (error) {
        setError("Error fetching token information");
        setTotalSupply(0);
        console.error("Error fetching token information:", error);
      }
    };

    fetchTokenPrice();
    fetchTotalSupply();
  }, []);

  const stats = [
    {
      id: 1,
      name: "TrotelCoin Price",
      value:
        tokenPrice !== null && error === "" && tokenPrice
          ? `${tokenPrice?.toFixed(5)}`
          : "0",
    },
    {
      id: 2,
      name: "Market cap",
      value:
        tokenPrice !== null &&
        totalSupply !== null &&
        error === "" &&
        tokenPrice &&
        totalSupply
          ? `${(tokenPrice * parseFloat(totalSupply?.toString())).toFixed(0)}`
          : "0",
    },
    {
      id: 3,
      name: "Rewards distributed",
      value:
        tokenRewards !== "0" ? (
          <span>
            {`${parseFloat(tokenRewards).toFixed(0)}`}{" "}
            <span className="text-xs">TROTEL</span>
          </span>
        ) : (
          <span>
            0 <span className="text-xs">TROTEL</span>
          </span>
        ),
    },
    { id: 4, name: "Courses", value: "0" }, // add api call
  ];

  return (
    <>
      <div ref={ref} className="bg-white dark:bg-black py-24 sm:py-32">
        {inView ? (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                  A growing ecosystem.
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
                  TrotelCoin leads to a growing ecosystem of learners.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col bg-gray-900 hover:bg-gray-800 p-8"
                  >
                    <dt className="text-sm font-semibold leading-6 text-gray-300">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
