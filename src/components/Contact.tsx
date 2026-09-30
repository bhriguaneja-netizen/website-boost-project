import { motion } from "framer-motion";
import { Mail, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || result.error?.message || "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Something went wrong. Please try again or book a call directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full gradient-bg opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full gradient-bg opacity-5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest font-mono">
              Initiate Engagement
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground mt-4 text-balance">
              Stop treating AI governance like a legal checklist. Build it as core infrastructure.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              Connect directly with an AI Governance Principal to review your RAG pipelines, vector architectures, and continuous evaluation protocols.
            </p>
            <div className="mt-6">
              <a
                href="https://calendly.com/xodataco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
              >
                Instant Booking: 45-Min Technical Review →
              </a>
            </div>
          </motion.div>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="card-elevated p-8 md:p-12 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>
              
              {error && (
                <p className="text-destructive text-sm mb-4 font-medium text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold text-base transition-all duration-300 hero-glow ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="card-elevated p-12 max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Thank You!
              </h3>
              <p className="text-muted-foreground text-lg">
                We've received your message and will be in touch within 24 hours.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
