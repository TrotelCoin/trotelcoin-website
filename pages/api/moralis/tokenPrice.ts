import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";
import { polygon } from "viem/chains";
import { trotelCoinAddress } from "@/data/addresses";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!Moralis.Core.isStarted) {
      await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY,
      });
    }

    const response = await Moralis.EvmApi.token.getTokenPrice({
      chain: polygon.id,
      address: trotelCoinAddress,
      include: "percent_change",
    });

    const tokenPrice = response.raw.usdPrice;

    res.status(200).json({ tokenPrice });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching token information from Moralis" });
  }
}
