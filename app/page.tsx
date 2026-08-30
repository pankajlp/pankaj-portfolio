import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquees from "./components/Marquees";
import About from "./components/About";
import TechStack from "./components/Techstack";
import SupplyChainEcosystem from "./components/SupplyChainEcosystem";
import Testimonials from "./components/Testimonials";
import FeaturedProjects from "./components/Featuredprojects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";

export default function Home() {
  return (
    <main className="bg-[#08080b] text-zinc-100 overflow-hidden">
      <Navbar />
      <Hero />
      <Marquees />
      <About />
      <SupplyChainEcosystem />
      <TechStack />
      <Testimonials />
      {/* Dark sections grouped at the bottom for dramatic contrast */}
      <FeaturedProjects />
      <Contact />
      <Footer />
      <AIAssistant />
    </main>
  );
}
