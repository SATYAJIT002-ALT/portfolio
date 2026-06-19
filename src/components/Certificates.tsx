"use client";
import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiClock, FiHash, FiExternalLink } from "react-icons/fi";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "30 Jan 2026",
    description:
      "Industry-recognized certification validating expertise in AI and Machine Learning concepts, Generative AI, and Oracle Cloud Infrastructure AI services.",
    tags: ["AI", "Cloud", "Oracle"],
    accent: "from-[#f80000] to-[#ff6b35]",
    accentGlow: "#f80000",
  },
  {
    title: "Introduction to JavaScript I (PRDV401)",
    issuer: "Saylor Academy",
    date: "29 Jan 2026",
    score: "86.68%",
    duration: "17 Hours",
    ceus: "1.7 CEUs",
    description:
      "Comprehensive JavaScript foundations covering variables, functions, DOM manipulation, and modern ES6+ syntax with hands-on coding exercises.",
    tags: ["JavaScript", "Web Dev"],
    accent: "from-[#f7df1e] to-[#e8a400]",
    accentGlow: "#f7df1e",
  },
  {
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    issuer: "Simplilearn SkillUp",
    date: "19 Aug 2025",
    certCode: "8815766",
    description:
      "Mastered prompt engineering techniques for AI-assisted coding with GitHub Copilot, including effective prompting strategies for code generation and debugging.",
    tags: ["AI", "GitHub Copilot", "Prompt Engineering"],
    accent: "from-[#6e40c9] to-[#2ea44f]",
    accentGlow: "#6e40c9",
  },
  {
    title: "Data Analytics with Generative AI",
    issuer: "Simplilearn SkillUp",
    date: "19 Aug 2025",
    certCode: "8818519",
    description:
      "Advanced course covering data analytics fundamentals integrated with Generative AI concepts, including data visualization, statistical analysis, and AI-driven insights.",
    tags: ["Data Analytics", "GenAI"],
    accent: "from-[#00d4aa] to-[#0099ff]",
    accentGlow: "#00d4aa",
  },
  {
    title: "Machine Learning Using Python",
    issuer: "Simplilearn SkillUp",
    date: "19 Aug 2025",
    certCode: "8819247",
    description:
      "In-depth course on machine learning algorithms and their implementation in Python, covering supervised and unsupervised learning, model evaluation, and real-world applications.",
    tags: ["Machine Learning", "Python"],
    accent: "from-[#ff6f61] to-[#d946ef]",
    accentGlow: "#ff6f61",
  },
  {
    title: "SOAR – AI to be Aware – AI Fluency for All",
    issuer: "Microsoft & Skill India Digital Hub",
    date: "11 Jul 2025",
    duration: "15 Hours",
    description:
      "Microsoft-backed program building AI literacy and fluency, covering responsible AI principles, real-world AI applications, and the societal impact of artificial intelligence.",
    tags: ["AI", "Microsoft"],
    accent: "from-[#00a4ef] to-[#7fba00]",
    accentGlow: "#00a4ef",
  },
  {
    title: "Python for Data Science",
    issuer: "Reliance Foundation & Skill India",
    date: "12 Jul 2025",
    duration: "6 Hours",
    description:
      "Practical Python course focused on data science applications including NumPy, Pandas, data wrangling, and exploratory data analysis techniques.",
    tags: ["Python", "Data Science"],
    accent: "from-[#3776ab] to-[#ffd43b]",
    accentGlow: "#3776ab",
  },
  {
    title: "Web Design & Development (Bengali)",
    issuer: "NSDC & Skill India Digital Hub",
    date: "12 Jul 2025",
    duration: "3 Hours 39 Minutes",
    description:
      "Web design and development fundamentals covering HTML, CSS, responsive design principles, and modern web development best practices.",
    tags: ["Web Design", "HTML/CSS"],
    accent: "from-[#e44d26] to-[#264de4]",
    accentGlow: "#e44d26",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
            <FiAward className="text-lg" />
            Professional Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            A collection of professional certifications and courses completed across
            AI, cloud computing, data science, and web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              {/* Gradient border glow on hover */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${cert.accentGlow}40, transparent, ${cert.accentGlow}20)`,
                }}
              />

              <div className="relative glass-panel rounded-2xl p-6 h-full flex flex-col transition-all duration-300 group-hover:translate-y-[-2px]">
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${cert.accent} rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-white transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p
                      className="text-sm font-medium mt-1"
                      style={{ color: `${cert.accentGlow}cc` }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <FiAward
                      className="text-lg"
                      style={{ color: cert.accentGlow }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-1">
                  {cert.description}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/50 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <FiCalendar className="text-foreground/40" />
                    {cert.date}
                  </span>
                  {cert.duration && (
                    <span className="inline-flex items-center gap-1">
                      <FiClock className="text-foreground/40" />
                      {cert.duration}
                    </span>
                  )}
                  {cert.score && (
                    <span className="inline-flex items-center gap-1 text-green-400/80">
                      Score: {cert.score}
                    </span>
                  )}
                  {cert.ceus && (
                    <span className="inline-flex items-center gap-1">
                      {cert.ceus}
                    </span>
                  )}
                  {cert.certCode && (
                    <span className="inline-flex items-center gap-1">
                      <FiHash className="text-foreground/40" />
                      {cert.certCode}
                    </span>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-foreground/70 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-panel rounded-2xl p-6 flex flex-wrap justify-around gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient">{certificates.length}</div>
              <div className="text-sm text-foreground/50 mt-1">Certificates</div>
            </div>
            <div className="w-px bg-glass-border hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-gradient">5+</div>
              <div className="text-sm text-foreground/50 mt-1">Platforms</div>
            </div>
            <div className="w-px bg-glass-border hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-gradient">42+</div>
              <div className="text-sm text-foreground/50 mt-1">Hours of Learning</div>
            </div>
            <div className="w-px bg-glass-border hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-gradient">6</div>
              <div className="text-sm text-foreground/50 mt-1">Focus Areas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
