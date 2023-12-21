import Hero from "@/app/ui/hero";
import Token from "@/app/ui/token";
import Roadmap from "@/app/ui/roadmap";
import Powered from "@/app/ui/powered";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Token />
        <Roadmap />
        <Powered />
      </main>
    </>
  );
}
