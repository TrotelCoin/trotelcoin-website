"use client";

import React, { useState, useEffect, useContext } from "react";
import "animate.css";
import CountUp from "react-countup";
import { polygon } from "wagmi/chains";
import {
  trotelCoinAddress,
  trotelCoinStakingV1,
  trotelCoinStakingV2,
} from "@/data/addresses";
import { useToken, useBalance, useBlockNumber } from "wagmi";
import axios from "axios";
import useSWR from "swr";
import TrotelPriceContext from "@/contexts/TrotelPrice";
import { formatEther } from "viem";

type Fetcher = (url: string) => Promise<any>;

const fetcher: Fetcher = (url: string) =>
  axios.get(url).then((res) => res.data);

export default function Community() {
  const [totalStakingBalance, setTotalStakingBalance] = useState<number | null>(
    null
  );

  const { storedTrotelPrice } = useContext(TrotelPriceContext);

  const { data: blockNumber } = useBlockNumber({
    chainId: polygon.id,
    watch: true,
  });

  const { data: numberOfLearnersData } = useSWR(
    "/api/numberOfLearners",
    fetcher,
    {
      revalidateOnReconnect: true,
      revalidateIfStale: true,
      revalidateOnMount: true,
      refreshInterval: 10000,
    }
  );

  const { data: totalPendingRewards } = useSWR(
    "/api/totalPendingRewards",
    fetcher,
    {
      revalidateOnReconnect: true,
      revalidateIfStale: true,
      revalidateOnMount: true,
      refreshInterval: 10000,
    }
  );

  const { data: numberOfQuizzesAnswered } = useSWR(
    "/api/numberOfQuizzesAnswered",
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnReconnect: true,
      revalidateOnMount: true,
      refreshInterval: 10000,
    }
  );

  const { data: stakingV1Balance, refetch: refetchStakingV1Balance } =
    useBalance({
      chainId: polygon.id,
      address: trotelCoinStakingV1,
      token: trotelCoinAddress,
    });

  const { data: stakingV2Balance, refetch: refetchStakingV2Balance } =
    useBalance({
      chainId: polygon.id,
      address: trotelCoinStakingV2,
      token: trotelCoinAddress,
    });

  useEffect(() => {
    if (stakingV1Balance || stakingV2Balance) {
      const totalStakingBalance =
        Number(
          formatEther(stakingV1Balance ? stakingV1Balance?.value : BigInt(0))
        ) +
        Number(
          formatEther(stakingV2Balance ? stakingV2Balance?.value : BigInt(0))
        );

      const totalStakingPrice =
        totalStakingBalance * (storedTrotelPrice as number);

      setTotalStakingBalance(totalStakingPrice);
    }
  }, [stakingV1Balance, stakingV2Balance]);

  useEffect(() => {
    refetchStakingV1Balance();
    refetchStakingV2Balance();
  }, [blockNumber, refetchStakingV1Balance, refetchStakingV2Balance]);

  const stats = [
    {
      id: 1,
      name: "Quizzes answered",
      value: (
        <>
          <CountUp
            start={0}
            end={Number(numberOfQuizzesAnswered) ?? 0}
            duration={1}
            decimal="."
          />
        </>
      ),
    },
    {
      id: 2,
      name: "Pending rewards",
      value: (
        <>
          <CountUp
            start={0}
            prefix="$"
            end={
              (totalPendingRewards as number) * (storedTrotelPrice as number)
            }
            duration={1}
            decimal="."
            decimals={2}
          />
        </>
      ),
    },
    {
      id: 3,
      name: "Staking TVL",
      value: (
        <>
          <CountUp
            start={0}
            prefix="$"
            end={totalStakingBalance as number}
            duration={1}
            decimal="."
            decimals={0}
          />
        </>
      ),
    },
    {
      id: 4,
      name: "Learners",
      value: (
        <>
          <CountUp
            start={0}
            end={numberOfLearnersData ?? 0}
            duration={1}
            decimal="."
            decimals={0}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
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
                    className="flex flex-col bg-gray-800 hover:bg-gray-700 p-8"
                  >
                    <dt className="text-sm font-semibold leading-6 text-gray-300">
                      {stat.name}
                    </dt>
                    <dd
                      className={`order-first text-3xl font-semibold tracking-tight text-gray-100 ${
                        !stat.value && "animate-pulse"
                      }`}
                    >
                      {stat.value}{" "}
                      <span className="text-xs">{!stat.value && "TROTEL"}</span>
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
