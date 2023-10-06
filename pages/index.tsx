"use client";
import Hero from "@/components/hero";
import Token from "@/components/token";
import Roadmap from "@/components/roadmap";
import Footer from "@/components/footer";
import Head from "next/head";
import { metadata } from "./_document";

export default function Home() {
  return (
    <>
      <Head>{metadata.title && <title>{metadata.title as string}</title>}</Head>
      <div>
        <Hero></Hero>
        <Token></Token>
        <Roadmap></Roadmap>
        <Footer></Footer>
      </div>
    </>
  );
}
