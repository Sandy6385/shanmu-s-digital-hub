import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_ujo9he7",
        "template_vtcy0j7",
        form,
        "4UNDoZrnTD0QgTxkM"
      );
      setSent(true);
      toast.success("Message sent successfully!");
      form.reset();
      setTimeout(() => setSent(false), 3000);
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="gradient-line w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!
            </p>
            {[
              { icon: Mail, label: "santtt8973@gmail.com", href: "mailto:santtt8973@gmail.com" },
              { icon: Phone, label: "+91 6385923835", href: "tel:+916385923835" },
              { icon: MapPin, label: "Coimbatore, Tamil Nadu", href: "#" },
              { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/shanmuganathan-t-812873384" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:neon-glow transition-all">
                  <item.icon size={18} />
                </div>
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              maxLength={100}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              maxLength={255}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all neon-glow disabled:opacity-50"
            >
              {sent ? (
                <>
                  <CheckCircle size={18} /> Sent!
                </>
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
