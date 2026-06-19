"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-glass-border" />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col md:flex-row items-center mb-12"
          >
            <div className="hidden md:flex w-1/2 justify-end pr-8 text-right text-foreground/60 font-mono">
              2023 - 2027
            </div>
            
            <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 shadow-[0_0_10px_#00e5ff]" />
            
            <div className="w-full md:w-1/2 pl-8 md:pl-8">
              <div className="glass-panel p-6 rounded-2xl">
                <div className="md:hidden text-primary font-mono mb-2 text-sm">2023 - 2027</div>
                <h3 className="text-2xl font-bold mb-1 text-foreground">B.Tech in Computer Science & Engineering</h3>
                <h4 className="text-lg text-primary/80 mb-3">Adamas University</h4>
                <p className="text-foreground/70">
                  Focusing on core computer science concepts, modern web development, and software engineering principles. Active participant in coding clubs and hackathons.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-1/2 pl-8 md:pr-8 md:pl-0 text-left md:text-right order-2 md:order-1">
              <div className="glass-panel p-6 rounded-2xl">
                <div className="md:hidden text-primary font-mono mb-2 text-sm">2015 - 2023</div>
                <h3 className="text-2xl font-bold mb-1 text-foreground">Schooling</h3>
                <h4 className="text-lg text-primary/80 mb-3">Daspur Vivekananda High School</h4>
                <p className="text-foreground/70">
                  Completed schooling with strong foundations in Mathematics and Science, building the academic groundwork for pursuing an engineering career.
                </p>
              </div>
            </div>

            <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full z-10 shadow-[0_0_10px_#bd00ff] order-1 md:order-2 mb-4 md:mb-0" />
            
            <div className="hidden md:flex w-1/2 justify-start pl-8 text-left text-foreground/60 font-mono order-3">
              2015 - 2023
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
