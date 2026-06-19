"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 95 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.title} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="glass-panel p-8 rounded-2xl h-full transition-shadow hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]"
      >
        <h3 className="text-2xl font-semibold mb-6 text-gradient">{category.title}</h3>
        <div className="space-y-6">
          {category.skills.map((skill: any) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-foreground/80 font-medium">{skill.name}</span>
                <span className="text-primary text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-glass-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
