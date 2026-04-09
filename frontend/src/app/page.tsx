import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NeuralArchitecture from "@/components/NeuralArchitecture";
import Features from "@/components/Features";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      {/* Scanline effect for extra tech vibe */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <div className="scanline"></div>
      </div>
      <main className="relative z-10 w-full overflow-hidden blueprint-grid pt-25">
        <Hero />
        <NeuralArchitecture />
        <Features />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
