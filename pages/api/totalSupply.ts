import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiKey = process.env.POLYGONSCAN_API_KEY;
    const apiUrl = `https://api.polygonscan.com/api?module=stats&action=tokensupply&contractaddress=0x2275059f310E31C2F43B24A9932882196659e1C4&apikey=${apiKey}`;

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
