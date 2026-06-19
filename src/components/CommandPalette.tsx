"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiHome, FiUser, FiCode, FiBriefcase, FiBook, FiMail, FiAward } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    { id: "home", name: "Home", icon: <FiHome />, href: "#" },
    { id: "about", name: "About", icon: <FiUser />, href: "#about" },
    { id: "skills", name: "Skills", icon: <FiCode />, href: "#skills" },
    { id: "projects", name: "Projects", icon: <FiBriefcase />, href: "#projects" },
    { id: "education", name: "Education", icon: <FiBook />, href: "#education" },
    { id: "certificates", name: "Certificates", icon: <FiAward />, href: "#certificates" },
    { id: "contact", name: "Contact", icon: <FiMail />, href: "#contact" },
  ];

  const filteredActions = query === "" 
    ? actions 
    : actions.filter((action) => action.name.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery("");
    window.location.href = href;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#0f0f0f] border border-glass-border rounded-2xl shadow-2xl overflow-hidden z-[101]"
          >
            <div className="flex items-center px-4 py-3 border-b border-glass-border">
              <FiSearch className="text-foreground/50 text-xl mr-3" />
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none text-foreground text-lg placeholder-foreground/30"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <div className="text-xs text-foreground/40 bg-white/5 px-2 py-1 rounded">ESC</div>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredActions.length === 0 ? (
                <div className="text-center py-6 text-foreground/50">No results found.</div>
              ) : (
                filteredActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleSelect(action.href)}
                    className="w-full flex items-center px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary text-foreground/80 transition-colors text-left group"
                  >
                    <span className="text-lg mr-3 group-hover:text-primary transition-colors">{action.icon}</span>
                    <span className="font-medium">{action.name}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
