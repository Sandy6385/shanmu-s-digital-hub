import { motion } from "framer-motion";
import { Monitor, Layout, Smartphone, Palette } from "lucide-react";

const services = [
  { icon: Monitor, title: "Responsive Websites", desc: "Pixel-perfect, mobile-first websites that look great on all devices." },
  { icon: Palette, title: "Modern UI Design", desc: "Clean, futuristic interfaces with smooth animations and interactions." },
  { icon: Layout, title: "React Web Apps", desc: "Dynamic single-page applications built with React.js and modern tools." },
  { icon: Smartphone, title: "Interactive UIs", desc: "Engaging user interfaces with motion, transitions, and micro-interactions." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-2">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="gradient-line w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl neon-border text-center hover:bg-primary/5 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:neon-glow transition-all">
                <service.icon size={24} />
              </div>
              <h3 className="font-heading text-sm font-semibold mb-2">{service.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
