import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";
import { polygon } from "viem/chains";

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
      address: "0x85057d5a8d063f9075ba963101d76352051675e5",
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
