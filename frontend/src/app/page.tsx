import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Highlight from "@/components/Highlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Features />
        <Highlight />
      </main>
      <Footer />
    </>
  );
}
