import Hero from "@/app/ui/hero";
import Token from "@/app/ui/token";
import Roadmap from "@/app/ui/roadmap";
import Powered from "@/app/ui/powered";
import Features from "@/app/ui/features";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Token />
        <Roadmap />
        <Powered />
      </main>
    </>
  );
}
