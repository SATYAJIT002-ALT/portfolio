"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Speech Translator",
    description: "A real-time speech-to-speech translator supporting multiple languages with accurate transcription, translation, and playback functionality.",
    image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Web Speech API", "Translation APIs"],
    github: "#",
    live: "#"
  },
  {
    title: "Shortest Path Finder",
    description: "Interactive web application to compute and visualize the shortest path between points using Dijkstra's Algorithm and BFS.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Algorithms", "Vercel"],
    github: "#",
    live: "#"
  },
  {
    title: "Text Analyzer",
    description: "Web-based text analysis tool with intuitive UI for processing user input, including word count, character count, and formatting options.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Netlify"],
    github: "#",
    live: "#"
  },
  {
    title: "Employee Management System",
    description: "Desktop application with login authentication, managing employee CRUD operations in a database.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    tech: ["Java Swing", "JDBC", "MySQL"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group rounded-2xl overflow-hidden glass-panel flex flex-col h-full"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          <a href={project.github} className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
            <FiGithub className="text-xl" />
            <span className="text-sm">Code</span>
          </a>
          <a href={project.live} className="text-foreground hover:text-secondary transition-colors flex items-center gap-2">
            <FiExternalLink className="text-xl" />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
