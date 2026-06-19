"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./Button";
import { FiArrowDown } from "react-icons/fi";

const roles = ["B.Tech CSE Student", "Web Developer", "Frontend Enthusiast", "Lifelong Learner"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary-dark/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-lg text-primary tracking-widest uppercase mb-4">Welcome to my universe</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
            Hi, I&apos;m <span className="text-gradient">Satyajit Sasmal</span>
          </h1>
          
          <div className="h-12 flex justify-center items-center mb-8">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl text-foreground/80 font-light"
            >
              {roles[currentRole]}
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects">
              <Button variant="primary">View Projects</Button>
            </a>
            <a href="#contact">
              <Button variant="outline">Contact Me</Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-foreground/50 uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-primary text-xl"
          >
            <FiArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
