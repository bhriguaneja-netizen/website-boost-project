import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const comparisons = [
  {
    dimension: "Primary Objective",
    legacy: "Passive metadata cataloging & SQL discovery for human analysts",
    aiReady: "Active, model-ready context engineering for LLMs & agents",
  },
  {
    dimension: "Target Consumer",
    legacy: "Data analysts writing deterministic SQL queries",
    aiReady: "Autonomous agents, RAG retrieval pipelines & fine-tuning runs",
  },
  {
    dimension: "Data Modality",
    legacy: "Tabular, relational schemas in data warehouses",
    aiReady: "Multi-modal: Unstructured PDFs, transcripts, ERPs, vectors & APIs",
  },
  {
    dimension: "Access Control",
    legacy: "Static RBAC at the database/table boundary",
    aiReady: "Entitlement-aware vector retrieval & semantic attribute fencing",
  },
  {
    dimension: "Security Perimeter",
    legacy: "Network firewalls & data-at-rest encryption",
    aiReady: "Real-time prompt injection defense & context poisoning quarantine",
  },
  {
    dimension: "Quality Standard",
    legacy: "Null checks, row counts, and static schema validation",
    aiReady: "Embedding drift detection, token density, context recall & precision",
  },
  {
    dimension: "Audit & Evaluation",
    legacy: "Quarterly manual reviews and retroactive compliance checklists",
    aiReady: "Continuous Arize runtime telemetry & automated circuit breakers",
  },
];

const HowItWorks = () => {
  return (
    <section id="divide" className="relative py-28 overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest font-mono">
            The Generative Divide
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground mt-4 text-balance leading-tight">
            Catalogs store definitions. Models consume context. That difference is breaking your AI roadmap.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Legacy platforms like Collibra and Informatica were built for a predictable world: deterministic SQL queries, tabular data warehouses, and annual compliance checkboxes. They are passive registries—data cemeteries where schemas go to be cataloged, not utilized.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            When you connect an LLM or autonomous agent to enterprise systems, data is ingested, chunked, embedded, and synthesized into probabilistic outputs. A passive catalog cannot prevent context poisoning, token bloat, semantic drift, or unauthorized vector retrieval.
          </p>
        </motion.div>

        {/* Comparison Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-border bg-card/50 overflow-hidden shadow-xl"
        >
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-border bg-muted/40 font-semibold text-sm">
            <div className="p-4 md:col-span-3 text-muted-foreground uppercase tracking-wider text-xs flex items-center">
              Governance Vector
            </div>
            <div className="p-4 md:col-span-4 text-destructive/90 flex items-center gap-2 border-t md:border-t-0 md:border-l border-border bg-destructive/5">
              <AlertCircle size={16} />
              <span>Traditional Governance (Legacy Catalogs)</span>
            </div>
            <div className="p-4 md:col-span-5 text-primary flex items-center gap-2 border-t md:border-t-0 md:border-l border-border bg-primary/5">
              <CheckCircle2 size={16} />
              <span>AI-Ready Governance (XO Data Co.)</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border text-sm">
            {comparisons.map((row, idx) => (
              <div
                key={row.dimension}
                className={`grid grid-cols-1 md:grid-cols-12 transition-colors ${
                  idx % 2 === 0 ? "bg-background/40" : "bg-muted/10"
                } hover:bg-muted/30`}
              >
                <div className="p-4 md:col-span-3 font-semibold text-foreground flex items-center">
                  {row.dimension}
                </div>
                <div className="p-4 md:col-span-4 text-muted-foreground border-t md:border-t-0 md:border-l border-border/60 flex items-center">
                  <span className="md:hidden font-semibold text-xs text-destructive mr-2">Legacy: </span>
                  {row.legacy}
                </div>
                <div className="p-4 md:col-span-5 text-foreground font-medium border-t md:border-t-0 md:border-l border-border/60 flex items-center bg-primary/[0.02]">
                  <span className="md:hidden font-semibold text-xs text-primary mr-2">XO Standard: </span>
                  {row.aiReady}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Context callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-lg font-bold text-foreground">
              Collibra tells you where data sleeps. We engineer how data behaves when an agent wakes it up.
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Transition your data pipelines from passive documentation to active, model-ready context engineering.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            Review the Implementation Playbook <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
