import { motion } from "framer-motion";
import { ArrowRight, Cpu, Shield, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PlatformPreview = () => {
  return (
    <section id="platform-preview" className="py-28 bg-gradient-to-b from-background via-secondary/30 to-background border-t border-border/50 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase">
              Technology Preview & Research
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight"
          >
            Moving Beyond the Static Catalog
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed"
          >
            XO Data Co. isn't just an advisory firm. We are engineering the autonomous control plane that builds deterministic guardrails natively into data pipelines—providing absolute line-of-sight from raw databases directly to model tokens.
          </motion.p>
        </div>

        {/* Platform Diagram Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b border-border/60 gap-4">
            <div>
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">Architecture</span>
              <h3 className="text-xl font-bold text-foreground">The Inline Context Governance Pipeline</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-Time Policy Enforcement (&lt; 15ms)</span>
            </div>
          </div>

          {/* Interactive / Visual Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-border/80 bg-background/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-muted-foreground block mb-2">Stage 01</span>
                <h4 className="font-bold text-sm text-foreground mb-1">Raw Enterprise Estate</h4>
                <p className="text-xs text-muted-foreground">Snowflake, S3 Buckets, ERP, PDFs & Docs.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-mono text-primary">
                Ingestion boundary
              </div>
            </div>

            <div className="p-5 rounded-xl border border-primary/40 bg-primary/5 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono text-primary font-bold block mb-2">Stage 02 • XO Engine</span>
                <h4 className="font-bold text-sm text-foreground mb-1">Context Interceptor</h4>
                <p className="text-xs text-muted-foreground">Automated parsing, PII scrubbing & prompt injection quarantine.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/20 text-[11px] font-mono text-primary">
                Deterministic sanitization
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border/80 bg-background/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-muted-foreground block mb-2">Stage 03</span>
                <h4 className="font-bold text-sm text-foreground mb-1">Entitlement Vector Store</h4>
                <p className="text-xs text-muted-foreground">Pinecone / Qdrant with dynamic RBAC/ABAC metadata fencing.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-mono text-primary">
                Query-time access control
              </div>
            </div>

            <div className="p-5 rounded-xl border border-primary/40 bg-primary/5 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono text-primary font-bold block mb-2">Stage 04 • Runtime</span>
                <h4 className="font-bold text-sm text-foreground mb-1">Telemetry & Circuit Breakers</h4>
                <p className="text-xs text-muted-foreground">Arize AI evals, hallucination scoring & automated fallback routing.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/20 text-[11px] font-mono text-primary">
                Closed-loop safety
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature highlight row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="p-6 rounded-xl border border-border bg-card/40">
            <Cpu className="text-primary mb-3" size={24} />
            <h4 className="font-bold text-base text-foreground mb-2">Automated Unstructured Governance</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fills market gaps for complex non-tabular data—classifying multi-page PDFs, transcripts, and internal tickets at line speed.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card/40">
            <Shield className="text-primary mb-3" size={24} />
            <h4 className="font-bold text-base text-foreground mb-2">Deterministic Semantic Fences</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prevents context window poisoning and halts unauthorized tool execution before the agent sends instructions to internal databases.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card/40">
            <Zap className="text-primary mb-3" size={24} />
            <h4 className="font-bold text-base text-foreground mb-2">Sub-15ms Circuit Breakers</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lightweight runtime interception that trips immediately when outputs violate grounding thresholds or regulatory guardrails.
            </p>
          </div>
        </div>

        {/* Bottom CTA for Platform */}
        <div className="text-center">
          <Link
            to="/platform"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold text-base hover:opacity-90 transition-all shadow-lg"
          >
            Explore Platform Architecture & Design Partner Program <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
