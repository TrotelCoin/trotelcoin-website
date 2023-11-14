import { NextApiRequest, NextApiResponse } from "next";
import { polygon } from "wagmi/chains";
import { useToken } from "wagmi";

const trotelCoinAddress = "0x85057d5a8d063f9075Ba963101D76352051675E5";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data: token } = useToken({
      chainId: polygon.id,
      address: trotelCoinAddress,
      enabled: true,
    });

    if (token) {
      res.status(200).json(token?.totalSupply.formatted);
    } else {
      res.status(500).json({ error: "Invalid response from the API" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
