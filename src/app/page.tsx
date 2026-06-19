import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <CustomCursor />
      <PageLoader />
      <CommandPalette />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      
      <footer className="py-8 border-t border-glass-border text-center text-foreground/50">
        <p>© {new Date().getFullYear()} Satyajit Sasmal. All rights reserved.</p>
        <p className="text-sm mt-2">Press <kbd className="px-2 py-1 bg-white/5 rounded mx-1">Ctrl</kbd> + <kbd className="px-2 py-1 bg-white/5 rounded mx-1">K</kbd> to open command palette</p>
      </footer>
    </main>
  );
}
