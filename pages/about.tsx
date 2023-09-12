"use client";
import React from "react";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import AboutHero from "@/components/aboutHero";
import Mission from "@/components/mission";

export default function About() {
  return (
    <div>
      <AboutHero></AboutHero>
      <Mission></Mission>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}
