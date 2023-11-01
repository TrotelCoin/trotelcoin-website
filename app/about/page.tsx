import React from "react";
import FAQ from "@/app/ui/about/faq";
import Footer from "@/app/ui/footer";
import AboutHero from "@/app/ui/about/aboutHero";
import Mission from "@/app/ui/about/mission";
import Head from "next/head";
import { metadata } from "@/app/layout";

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
