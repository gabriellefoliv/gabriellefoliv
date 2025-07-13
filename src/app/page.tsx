import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      
    </div>
  );
}
