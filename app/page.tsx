import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/service";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";

export default function home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

