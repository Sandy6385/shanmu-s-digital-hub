import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Edunet Foundation (IBM SkillBuild)",
    date: "Aug 2025 – Sep 2025",
    points: ["Developed responsive UI components", "Worked on real-world frontend tasks"],
  },
  {
    title: "Data Science Intern",
    company: "Gateway Software Solutions, Coimbatore",
    date: "Aug 2024 – Sep 2024",
    points: ["Built ML model using Iris dataset", "Achieved 95% accuracy"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-2">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="gradient-line w-24 mx-auto mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[11px] md:left-auto md:right-[-8px] top-0 w-4 h-4 rounded-full bg-primary neon-glow"
                style={i % 2 !== 0 ? { left: "-8px", right: "auto" } : {}} />

              <div className="p-5 rounded-lg neon-border hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Briefcase size={14} />
                  <span className="font-heading text-xs font-semibold">{exp.title}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} />
                  {exp.date}
                </div>
                <ul className="space-y-1">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
