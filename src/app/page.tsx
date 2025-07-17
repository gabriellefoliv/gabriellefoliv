import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Stacks } from "@/components/Stacks";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Navbar />
      <About />
      <Stacks />
      <Projects />
      <Experience />
      <Footer/>
      
    </div>
  );
}
