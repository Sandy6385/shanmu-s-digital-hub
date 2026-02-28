import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative py-8">
      <div className="gradient-line mb-8" />
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Shanmuganathan T. All rights reserved.
        </p>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground neon-glow hover:opacity-90 transition-all z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
