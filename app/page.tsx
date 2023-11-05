import Hero from "@/app/ui/hero";
import Token from "@/app/ui/token";
import Roadmap from "@/app/ui/roadmap";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero></Hero>
        <Token></Token>
        <Roadmap></Roadmap>
        <Footer></Footer>
      </main>
    </>
  );
}
