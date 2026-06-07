import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/Techstack";
import FeaturedProjects from "./components/Featuredprojects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import SupplyChainEcosystem from "./components/SupplyChainEcosystem";
export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <SupplyChainEcosystem />
      <FeaturedProjects />
      <About />
      <TechStack />
      <Contact />
      <Footer />
      <AIAssistant />
    </main>
  );
}