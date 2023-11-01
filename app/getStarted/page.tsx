import React from "react";
import Footer from "@/app/ui/footer";
import GetStartedHero from "@/app/ui/getStarted/getStartedHero";
import Head from "next/head";
import { metadata } from "@/app/layout";

export default function getStarted() {
  return (
    <>
      <Head>{metadata.title && <title>{metadata.title as string}</title>}</Head>
      <div>
        <GetStartedHero></GetStartedHero>
        <Footer></Footer>
      </div>
    </>
  );
}
