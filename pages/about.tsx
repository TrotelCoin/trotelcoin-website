"use client";
import React from "react";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import AboutHero from "@/components/aboutHero";

export default function About() {
  return (
    <div>
      <AboutHero></AboutHero>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}
