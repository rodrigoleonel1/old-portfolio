import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <Footer />
    </>
  );
}
