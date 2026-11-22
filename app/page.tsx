import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PilotSteps from "./components/PilotSteps";
import FeaturedProjects from "./components/Featuredprojects";
import LatestInsights from "./components/LatestInsights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-paper text-ink">
        {/* The offer first, then how it works, then the proof behind it */}
        <Hero />
        <PilotSteps />
        <FeaturedProjects />
        <LatestInsights />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
}
