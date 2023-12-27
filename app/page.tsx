import Hero from "@/app/ui/hero";
import Community from "@/app/ui/community";
import Roadmap from "@/app/ui/roadmap";
import Powered from "@/app/ui/powered";
import Features from "@/app/ui/features";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Community />
        <Roadmap />
        <Powered />
      </main>
    </>
  );
}
