import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Users, Brain, ArrowRight } from "lucide-react";

const insights = [
  {
    icon: Brain,
    title: "Mastering Agentic Workflows",
    description: "How to move from prompt engineering to fully autonomous AI agents.",
    tag: "Agentic AI",
  },
  {
    icon: Gauge,
    title: "The Power of RAG",
    description: "Unlocking enterprise-specific insights with Retrieval-Augmented Generation.",
    tag: "Advanced LLM",
  },
  {
    icon: ShieldCheck,
    title: "AI Security & Guardrails",
    description: "Implementing safety protocols for mission-critical AI integrations.",
    tag: "Governance",
  },
  {
    icon: Users,
    title: "Multi-Modal Business Apps",
    description: "Building systems that process text, image, and voice for real impact.",
    tag: "Innovation",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-28 bg-secondary">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Latest Thinking
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-foreground text-balance">
            Featured Insights
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Explore our latest thinking on data-driven transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" as const }}
              whileHover={{ y: -8 }}
              className="card-elevated p-6 cursor-pointer group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={22} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full text-primary bg-primary/10">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold mb-3 leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                  {item.description}
                </p>

                <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                  Read more <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
