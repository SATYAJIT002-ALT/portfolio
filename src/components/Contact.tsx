"use client";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Button from "./Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s <span className="text-primary">Connect</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-12" />
          
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Ready to start a project?</h3>
            <p className="text-foreground/70 mb-10 text-lg max-w-2xl mx-auto">
              Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            
            <a href="mailto:satyajitsasmal022@gmail.com">
              <Button variant="primary" className="mb-12 py-4 px-10 text-lg">Say Hello</Button>
            </a>
            
            <div className="flex flex-col items-center gap-4 mb-8 text-foreground/80">
              <p>📍 Daspur, Paschim Mednipur</p>
              <p>📞 8327220262</p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <SocialLink href="mailto:satyajitsasmal022@gmail.com" icon={<FiMail />} label="Email" />
              <SocialLink href="https://github.com/SATYAJIT002-ALT" icon={<FiGithub />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/satyajit-sasmal" icon={<FiLinkedin />} label="LinkedIn" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      className="flex flex-col items-center justify-center p-6 glass rounded-2xl hover:bg-white/5 transition-colors group"
    >
      <div className="text-3xl mb-3 text-foreground/80 group-hover:text-primary transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{label}</span>
    </a>
  );
}
