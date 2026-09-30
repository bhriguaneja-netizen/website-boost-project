import { motion } from "framer-motion";

const techStack = [
  {
    category: "Context & Vector Storage",
    description: "High-dimensional vector indexing and hybrid semantic search.",
    tools: ["Pinecone", "Qdrant", "Milvus", "pgvector", "Weaviate"],
  },
  {
    category: "Enterprise Data Estates",
    description: "Systems of record, tabular lakes, and unstructured object stores.",
    tools: ["Snowflake", "Databricks", "Apache Iceberg", "AWS S3 / GCP"],
  },
  {
    category: "Policy & Model Armor",
    description: "Deterministic guardrails, semantic fences, and PII masking proxies.",
    tools: ["Open Policy Agent (OPA)", "NeMo Guardrails", "Llama Guard", "Pydantic Logfire"],
  },
  {
    category: "Runtime Evals & Telemetry",
    description: "Continuous hallucination scoring, drift detection, and observability.",
    tools: ["Arize AI", "Phoenix", "Ragas", "LangSmith", "TruLens"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest font-mono">
            Ecosystem Integration
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground mt-4">
            Engineered for the Modern AI & Data Stack
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base">
            We don't replace your enterprise infrastructure. We deploy inline governance across the tools you already rely on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-border bg-card/60 hover:border-primary/40 hover:bg-card transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1.5">{item.category}</h3>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{item.description}</p>
              </div>
              <ul className="space-y-2.5 border-t border-border/50 pt-4">
                {item.tools.map((tool) => (
                  <li key={tool} className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
