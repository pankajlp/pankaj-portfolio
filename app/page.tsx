import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/Techstack";
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
        <Hero />
        {/* The work leads, then what it is built with */}
        <FeaturedProjects />
        <TechStack />
        <LatestInsights />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
}
