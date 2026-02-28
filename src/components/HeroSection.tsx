import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Frontend Developer", "AI & DS Student", "Problem Solver", "Creative Thinker"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-primary font-accent text-lg mb-2 tracking-widest uppercase">Hello, I'm</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Shanmuganathan{" "}
              <span className="text-gradient">T</span>
            </h1>
            <div className="h-10 mb-6">
              <span className="font-accent text-xl sm:text-2xl text-muted-foreground">
                {displayText}
                <span className="text-primary animate-pulse">|</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Building modern, responsive, and intelligent web experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity neon-glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg neon-border text-primary font-semibold hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-neon-purple opacity-50 blur-md" />
              <img
                src={profileImg}
                alt="Shanmuganathan T"
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top border-2 border-primary/30"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-primary/50" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
