"use client";
import React from "react";
import FooterDark from "@/components/footerDark";
import GetStartedHero from "@/components/getStartedHero";
import Head from "next/head";
import { metadata } from "./_document";

export default function getStarted() {
  return (
    <>
      <Head>{metadata.title && <title>{metadata.title as string}</title>}</Head>
      <div>
        <GetStartedHero></GetStartedHero>
        <FooterDark></FooterDark>
      </div>
    </>
  );
}
