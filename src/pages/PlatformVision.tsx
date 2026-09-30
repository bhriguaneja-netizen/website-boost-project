import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Lock, 
  GitBranch, 
  AlertTriangle,
  Layers,
  Database
} from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Automated Unstructured Governance",
    subtitle: "Eliminating the 90% dark-data blindspot.",
    description:
      "Legacy data catalogs only index structured tables with clear SQL schemas. In contrast, 90% of enterprise GenAI context comes from unstructured documents—PDFs, slides, support tickets, audio transcripts, and internal wikis. Our platform scans object stores continuously, identifies semantic entities, detects sensitive information, and constructs clean, token-efficient chunk hierarchies automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Dynamic Retrieval Boundaries & Semantic Fencing",
    subtitle: "Zero-trust policy enforcement inside high-dimensional vector spaces.",
    description:
      "Vector databases calculate cosine similarity, not authorization rules. Our inline proxy intercepts every semantic query, applying cryptographic identity and dynamic RBAC/ABAC filtering in real time. If a user doesn't have clearance for specific data, those vectors are mathematically excluded before prompt assembly occurs.",
  },
  {
    icon: GitBranch,
    title: "Absolute Action & Provenance Lineage",
    subtitle: "Full-fidelity traceability from raw storage to generated tokens.",
    description:
      "When a probabilistic agent takes an action or generates advice, who is accountable? Our platform records an immutable directed acyclic graph (DAG) tracing every token back to its retrieved chunk, embedding model version, ingestion timestamp, and authoritative source database record.",
  },
  {
    icon: Zap,
    title: "Sub-15ms Deterministic Circuit Breakers",
    subtitle: "Low-latency runtime intervention that halts hallucinations in flight.",
    description:
      "We replace slow human review bottlenecks with sub-15ms programmatic circuit breakers. If live inference telemetry detects confidence drop-offs, prompt injection attempts, or semantic boundary violations, the request is immediately halted and routed to deterministic fallback logic.",
  },
];

const PlatformVision = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase">
                Platform Architecture Preview
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Moving Beyond the Static Catalog
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Data catalogs were built for humans browsing tables. We are engineering the autonomous control plane that governs enterprise context natively within data pipelines while models consume it.
            </motion.p>
          </div>
        </section>

        {/* Section 1: The Death of the Passive Catalog */}
        <section className="container mx-auto px-6 mb-24 max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl border border-border bg-card/60 backdrop-blur-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-destructive block mb-3">
              The Architectural Blindspot
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              Why the $10B Metadata Industry Failed the GenAI Era
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                The enterprise metadata industry was built around a singular assumption: that data governance is a human-speed activity. Tools like Collibra, Alation, and Informatica were designed to maintain static business glossaries, log data dictionaries for SQL analysts, and pass annual compliance audits.
              </p>
              <p className="font-semibold text-foreground">
                In an era of non-deterministic models and autonomous multi-agent systems, this entire paradigm breaks down.
              </p>
              <p>
                Autonomous agents do not browse web portals. They don't check data ownership tags before firing tool calls. They ingest high-dimensional vectors, execute dynamic multi-hop reasoning, and interact directly with production APIs. When governance lives in a disconnected web catalog, it is completely invisible to the model at inference time.
              </p>
            </div>

            {/* Contrast Callout */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border/70">
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                <AlertTriangle size={18} className="text-destructive mb-2" />
                <h4 className="font-bold text-sm text-foreground mb-1">Unstructured Void</h4>
                <p className="text-xs text-muted-foreground">Legacy catalogs ignore 90% of GenAI context stored in non-tabular documents.</p>
              </div>
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                <Lock size={18} className="text-destructive mb-2" />
                <h4 className="font-bold text-sm text-foreground mb-1">Zero Runtime Control</h4>
                <p className="text-xs text-muted-foreground">Catalogs document where data resides; they cannot intercept or sanitize prompts.</p>
              </div>
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                <Activity size={18} className="text-destructive mb-2" />
                <h4 className="font-bold text-sm text-foreground mb-1">Lagging Telemetry</h4>
                <p className="text-xs text-muted-foreground">Periodic annual audits cannot track probabilistic drift on 500 queries/sec.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Inline Control Plane Architecture */}
        <section className="container mx-auto px-6 mb-24 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary block mb-3">
              The XO Platform Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground">
              Automated Guardrails Built Natively Into the Pipeline
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We shift governance from an external reporting dashboard into an active, inline proxy that guarantees line-of-sight from raw databases directly to model outputs.
            </p>
          </div>

          {/* Interactive ASCII / Architecture Diagram */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-2xl overflow-x-auto">
            <pre className="font-mono text-xs sm:text-sm text-foreground/90 leading-relaxed overflow-x-auto">
{`┌────────────────────────────────────────────────────────────────────────┐
│                      RAW ENTERPRISE DATA ESTATE                        │
│          (Snowflake, S3 Buckets, ERP, PDFs, Transcripts, Docs)         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 XO INLINE CONTEXT INTERCEPTOR                          │
│  • Automated Parsing & Semantic Chunking Hierarchy                     │
│  • High-Throughput PII / PHI Masking Proxy                             │
│  • Ingestion-Time Context Poisoning & Prompt Injection Quarantine      │
│  • Cryptographic Source Hashing & Lineage Attribution                  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   ENTITLEMENT-AWARE VECTOR INDEX                       │
│              (Pinecone / Qdrant / Milvus / pgvector)                   │
│  • Dynamic Attribute-Based & Role-Based Access Fences (RBAC/ABAC)      │
│  • Embedding Space Drift Telemetry & Vector Topology Monitoring        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 XO RUNTIME POLICY INTERCEPTOR (<15ms)                  │
│  • Validates Caller Identity & Access Clearance at Retrieval Time      │
│  • Policy-as-Code Enforcement (Open Policy Agent / NeMo Guardrails)    │
│  • Context Assembly Sanitization & Token Density Minimization          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                    FOUNDATION MODEL ORCHESTRATION                      │
│             (LLMs, Multi-Agent Tool Execution, Fine-Tuning)            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│             CONTINUOUS EVALUATION & CLOSED-LOOP TELEMETRY              │
│  • Arize AI / Phoenix Runtime Grounding & Hallucination Scoring        │
│  • Automated Sub-15ms Circuit Breakers & Fallback Routing              │
│  • Regulatory Audit Trail Emission (EU AI Act & NIST AI RMF)           │
└────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </section>

        {/* Section 3: 4 Core Platform Capabilities */}
        <section className="container mx-auto px-6 mb-24 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-border bg-card/60 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground mb-6 shadow-md">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Design Partner Program Application */}
        <section className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-3xl border border-primary/40 bg-gradient-to-b from-card via-card to-primary/5 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary block mb-3">
              Private Design Partner Initiative
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              Build the future of enterprise AI governance with us.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              We are selecting a limited cohort of Fortune 500 enterprises, CDOs, and AI engineering teams to deploy our autonomous data governance engine in production environments.
            </p>

            <div className="max-w-md mx-auto p-4 rounded-xl border border-border/80 bg-background/80 mb-8 text-left text-xs font-mono space-y-2 text-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> Direct architectural co-design with our founding engineering team
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> Early access to the inline interceptor & runtime proxy
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> Custom policy-as-code modules for your industry regulatory regime
              </div>
            </div>

            <a
              href="https://calendly.com/xodataco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold text-base hover:opacity-90 transition-all shadow-lg"
            >
              Apply for Private Design Partner Access <ArrowRight size={18} />
            </a>
            <p className="text-xs text-muted-foreground mt-4 font-mono">
              Limited to 8 enterprise organizations per cohort. Direct architectural review required.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default PlatformVision;
