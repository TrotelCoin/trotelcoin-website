"use client";
import React from "react";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import AboutHero from "@/components/aboutHero";
import Mission from "@/components/mission";
import Head from "next/head";
import { metadata } from "./_document";

export default function About() {
  return (
    <>
      <Head>{metadata.title && <title>{metadata.title as string}</title>}</Head>
      <div>
        <AboutHero></AboutHero>
        <Mission></Mission>
        <FAQ></FAQ>
        <Footer></Footer>
      </div>
    </>
  );
}
