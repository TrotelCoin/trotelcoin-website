import { NextApiRequest, NextApiResponse } from "next";

import { trotelCoinAddress } from "@/data/addresses";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiKey = process.env.POLYGONSCAN_API_KEY;
    const apiUrl = `https://api.polygonscan.com/api?module=stats&action=tokensupply&contractaddress=0x85057d5a8d063f9075ba963101d76352051675e5&apikey=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === "1" && data.result) {
      const numericalValue = parseFloat(data.result) * 1e-18;
      res.status(200).json(numericalValue);
    } else {
      res.status(500).json({ error: "Invalid response from the API" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
