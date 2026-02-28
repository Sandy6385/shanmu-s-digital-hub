import { motion } from "framer-motion";
import { GraduationCap, Code, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="gradient-line w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              A passionate frontend developer with strong problem-solving skills, experience in internships,
              and exposure to machine learning and IoT-based real-world applications. Currently pursuing B.Tech
              in Artificial Intelligence and Data Science at RVS College of Engineering and Technology, graduating in 2026.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building interactive, user-friendly web applications using modern technologies
              like React.js. My background in AI & Data Science gives me a unique perspective on creating
              intelligent web experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {[
              { icon: GraduationCap, title: "Education", desc: "B.Tech AI & Data Science — RVS College, 2026" },
              { icon: Code, title: "Frontend Development", desc: "HTML, CSS, JavaScript, React.js" },
              { icon: Brain, title: "AI & ML", desc: "Python, Machine Learning, IoT Applications" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg neon-border hover:bg-primary/5 transition-colors">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
