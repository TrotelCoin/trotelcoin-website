import Hero from "@/app/ui/hero";
import Community from "@/app/ui/community";
import Powered from "@/app/ui/powered";
import Features from "@/app/ui/features";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Community />
        <Powered />
      </main>
    </>
  );
}
