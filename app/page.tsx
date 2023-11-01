import Hero from "@/app/ui/hero";
import Token from "@/app/ui/token";
import Roadmap from "@/app/ui/roadmap";
import Footer from "@/app/ui/footer";
import Head from "next/head";
import { metadata } from "@/app/layout";

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
