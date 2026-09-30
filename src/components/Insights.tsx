import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Database, Activity, ArrowRight } from "lucide-react";

const insights = [
  {
    icon: Database,
    title: "The Collibra Paradox in the LLM Era",
    description: "Why static data catalogs fail when confronted with high-dimensional vector spaces and probabilistic agents.",
    tag: "Analysis",
    href: "/platform",
  },
  {
    icon: ShieldCheck,
    title: "Defending Against Context Poisoning in RAG",
    description: "How indirect prompt injections weaponize internal documentation—and how to neutralize them at ingestion.",
    tag: "Security",
    href: "/services#rag",
  },
  {
    icon: Gauge,
    title: "Sub-15ms Policy-as-Code for Vector Stores",
    description: "Enforcing dynamic RBAC/ABAC and semantic attribute fencing at query time with Open Policy Agent.",
    tag: "Architecture",
    href: "/services#audit",
  },
  {
    icon: Activity,
    title: "Continuous Evals with Arize AI & Phoenix",
    description: "Replacing annual compliance audits with real-time faithfulness, grounding, and drift telemetry.",
    tag: "MLOps",
    href: "/services#evals",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-28 bg-secondary/40 border-t border-border/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest font-mono">
            Technical Perspectives
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-4 text-foreground text-balance">
            Featured Insights & Research
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Practical architectural insights on transitioning enterprise stacks from passive metadata management to model-ready context engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" as const }}
              whileHover={{ y: -6 }}
              className="card-elevated p-6 cursor-pointer group relative overflow-hidden block h-full border border-border bg-card hover:border-primary/40 transition-all"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <item.icon size={22} className="text-primary-foreground" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full text-primary bg-primary/10 border border-primary/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold mb-3 leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                  Read Analysis <ArrowRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
