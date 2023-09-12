"use client";
import Image from "next/image";
import React from "react";
import FooterDark from "@/components/footerDark";
import GetStartedHero from "@/components/getStartedHero";

export default function getStarted() {
  return (
    <div>
      <GetStartedHero></GetStartedHero>
      <FooterDark></FooterDark>
    </div>
  );
}
