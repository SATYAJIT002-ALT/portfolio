"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              My <span className="text-gradient">Journey</span>
              <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-primary/0 rounded-full mt-3" />
            </h3>
            <p className="text-foreground/70 leading-[1.9] mb-5 text-[17px] tracking-wide" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
              Satyajit Sasmal is a B.Tech CSE student at Adamas University who is passionate about web development and technology.
            </p>
            <p className="text-foreground/70 leading-[1.9] text-[17px] tracking-wide" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
              He enjoys creating responsive websites, learning modern frameworks, and exploring innovative solutions through programming. With a strong foundation in both frontend and backend technologies, Satyajit strives to build seamless digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="absolute w-full h-full glass rounded-full filter blur-3xl opacity-20 bg-primary" />
            
            {/* Floating Icons */}
            <FloatingIcon icon={<FaReact className="text-5xl text-[#61DAFB]" />} delay={0} x={-100} y={-100} />
            <FloatingIcon icon={<SiNextdotjs className="text-5xl text-white" />} delay={0.2} x={100} y={-80} />
            <FloatingIcon icon={<SiTailwindcss className="text-5xl text-[#06B6D4]" />} delay={0.4} x={-80} y={100} />
            <FloatingIcon icon={<SiTypescript className="text-5xl text-[#3178C6]" />} delay={0.6} x={80} y={80} />
            <FloatingIcon icon={<FaPython className="text-5xl text-[#3776AB]" />} delay={0.8} x={0} y={-150} />
            <FloatingIcon icon={<FaNodeJs className="text-5xl text-[#339933]" />} delay={1} x={0} y={150} />

            <div className="z-10 text-center glass-panel p-8 rounded-full w-48 h-48 flex items-center justify-center">
              <span className="text-2xl font-bold text-gradient">Tech Stack</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({ icon, delay, x, y }: { icon: React.ReactNode, delay: number, x: number, y: number }) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ 
        x: [x - 10, x + 10, x - 10], 
        y: [y - 10, y + 10, y - 10],
        opacity: 1
      }}
      transition={{ 
        opacity: { duration: 1, delay },
        x: { repeat: Infinity, duration: 4 + delay, ease: "easeInOut" },
        y: { repeat: Infinity, duration: 3 + delay, ease: "easeInOut" }
      }}
      className="absolute glass p-4 rounded-xl shadow-lg"
    >
      {icon}
    </motion.div>
  );
}
