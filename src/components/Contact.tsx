import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Let's Create Value Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to unlock the power of your data? Get in touch and let's start a conversation.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us <ArrowRight size={16} />
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 px-8 rounded-xl bg-primary/10 border border-primary/20"
            >
              <p className="text-primary font-semibold text-lg">
                Thank you! We'll be in touch soon.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
