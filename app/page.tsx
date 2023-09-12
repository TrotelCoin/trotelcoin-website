"use client";
import Image from "next/image";
import Hero from "@/components/hero";
import Token from "@/components/token";
import Roadmap from "@/components/roadmap";
import Powered from "@/components/powered";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Token></Token>
      <Roadmap></Roadmap>
      <Powered></Powered>
      <Footer></Footer>
    </div>
  );
}
