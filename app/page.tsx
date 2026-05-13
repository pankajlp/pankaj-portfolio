import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/Techstack";
import FeaturedProjects from "./components/Featuredprojects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}