import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquees from "./components/Marquees";
import TechStack from "./components/Techstack";
import FeaturedProjects from "./components/Featuredprojects";
import LatestInsights from "./components/LatestInsights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";

export default function Home() {
  return (
    <main className="bg-[#0c0b0a] text-[#efe9df] overflow-hidden">
      <Navbar />
      <Hero />
      <Marquees />
      {/* What we offer, then the proof */}
      <TechStack />
      {/* Dark sections grouped at the bottom for dramatic contrast */}
      <FeaturedProjects />
      <LatestInsights />
      <Contact />
      <Footer />
      <AIAssistant />
    </main>
  );
}
