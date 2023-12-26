"use client";

import React, { useState, useEffect, use } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import CountUp from "react-countup";
import { useContractRead } from "wagmi";
import { polygon } from "viem/chains";
import { trotelCoinAddress, trotelCoinLearningAddress } from "@/data/addresses";
import trotelCoinLearningABI from "@/abi/trotelCoinLearningABI";

export default function Ecosystem() {
  const [tokenPrice, setTokenPrice] = useState<number | null>(0);
  const [totalSupply, setTotalSupply] = useState<number | null>(0);
  const [error, setError] = useState<string>("");
  const [coursesCount, setCoursesCount] = useState<number>(0);
  const [tokenRewards, setTokenRewards] = useState<string>("0");

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { data: tokenRewardsData } = useContractRead({
    chainId: polygon.id,
    address: trotelCoinLearningAddress,
    abi: trotelCoinLearningABI,
    functionName: "totalRewards",
    watch: true,
  });

  useEffect(() => {
    if (tokenRewardsData) {
      setTokenRewards(parseFloat(tokenRewardsData as string).toString());
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
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const totalSupply = await response.json();
        setTotalSupply(totalSupply);
      } catch (error) {
        setError("Error fetching token information");
        setTotalSupply(0);
        console.error("Error fetching token information:", error);
      }
    };

    const fetchCoursesCount = async () => {
      try {
        const response = await fetch(
          "https://app.trotelcoin.com/api/courses/coursesCount",
          {
            cache: "no-store",
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { totalCourses } = await response.json();
        setCoursesCount(totalCourses);
      } catch (error) {
        setError("Error fetching courses count");
        setCoursesCount(0);
        console.error("Error fetching courses count:", error);
      }
    };

    fetchTokenPrice();
    fetchTotalSupply();
    fetchCoursesCount();
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
              duration={5}
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
              duration={5}
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
      name: "Rewards distributed",
      value:
        tokenRewards !== "0" ? (
          <>
            <CountUp
              start={0}
              end={parseFloat(parseFloat(tokenRewards).toFixed(2))}
              duration={5}
              decimal="."
              decimals={2}
            />
            <span className="text-xs">TROTEL</span>
          </>
        ) : (
          <span>
            0 <span className="text-xs">TROTEL</span>
          </span>
        ),
    },
    {
      id: 4,
      name: "Courses",
      value:
        coursesCount !== null && coursesCount ? (
          <>
            <CountUp
              start={0}
              end={coursesCount}
              duration={5}
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
        <div ref={ref}>
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
          ) : null}
        </div>
      </div>
    </>
  );
}
