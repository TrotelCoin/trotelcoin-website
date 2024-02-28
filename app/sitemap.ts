import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://trotelcoin.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://trotelcoin.com/get-started",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://trotelcoin.com/pricing",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://trotelcoin.com/about",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
