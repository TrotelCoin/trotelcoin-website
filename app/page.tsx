import Hero from "@/app/ui/hero";
import Ecosystem from "@/app/ui/ecosystem";
import Roadmap from "@/app/ui/roadmap";
import Powered from "@/app/ui/powered";
import Features from "@/app/ui/features";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Ecosystem />
        <Roadmap />
        <Powered />
      </main>
    </>
  );
}
