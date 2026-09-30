import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users, 
  FileText, 
  Layers, 
  ShieldAlert, 
  Activity, 
  Sparkles,
  Database
} from "lucide-react";

const offers = [
  {
    id: "audit",
    badge: "Foundational Architecture • 4–6 Weeks",
    icon: Database,
    title: "AI Readiness Audit & Semantic Taxonomy Mapping",
    headline: "Make your enterprise data estate machine-readable for RAG and autonomous agents.",
    challenge:
      "Most enterprise AI initiatives stall because source data is trapped in contradictory confluence pages, legacy PDFs, and undocumented APIs. When engineers connect these sources to a model, the system retrieves noisy, outdated chunks—driving up token bills, triggering hallucinations, and triggering an immediate CISO veto.",
    blueprint: [
      {
        step: "01. Dark Data & Vector Readiness Assessment",
        desc: "Forensic audit of targeted unstructured and semi-structured assets to quantify signal-to-noise ratio, token density, and embedding feasibility.",
      },
      {
        step: "02. Semantic Taxonomy & Schema.org Alignment",
        desc: "Restructuring business schemas into standardized machine-readable JSON-LD entities and semantic knowledge graphs.",
      },
      {
        step: "03. llms.txt & Agentic Tool Cataloging",
        desc: "Deployment of standardized llms.txt documentation structures and MCP-ready OpenAPI specs for deterministic agent function calling.",
      },
      {
        step: "04. Vector Database & Index Topology Benchmark",
        desc: "Empirical benchmarking of chunk sizes, overlap parameters, and index configurations across Pinecone, Qdrant, Milvus, and pgvector.",
      },
    ],
    deliverables: [
      "Enterprise AI Data Readiness Scorecard & Gap Analysis",
      "Production-ready llms.txt directory & Schema.org data models",
      "Machine-actionable OpenAPI / MCP tool catalog for agents",
      "Vector indexing & chunking architecture specification",
    ],
    stakeholders: "Chief Data Officers, Heads of Enterprise Architecture, Principal Data Engineers",
  },
  {
    id: "rag",
    badge: "Runtime Trust & Integrity • 6–10 Weeks",
    icon: ShieldAlert,
    title: "RAG Pipeline Governance & Guardrail Implementation",
    headline: "Engineer data provenance, eliminate context poisoning, and enforce semantic fences.",
    challenge:
      "Connecting an LLM to a vector database without governance is an active security vulnerability. Standard vector similarity search does not respect relational permissions; an unprivileged user query will happily pull confidential HR files or sensitive pricing data if embeddings align. Furthermore, malicious prompt injections hiding in raw docs can hijack your agent's execution flow.",
    blueprint: [
      {
        step: "01. Retrieval Boundary Access Control (Dynamic RBAC/ABAC)",
        desc: "Engineering query-time metadata filtering that mathematically prevents users from retrieving vector chunks beyond their authorization.",
      },
      {
        step: "02. Context Window Poisoning & Injection Defenses",
        desc: "Deployment of automated sanitizers at the ingestion boundary to detect, flag, and quarantine adversarial syntax in raw documents.",
      },
      {
        step: "03. Deterministic Semantic Fences & Policy-as-Code",
        desc: "Implementing low-latency guardrails (NeMo Guardrails, Open Policy Agent) enforcing corporate policy, topic boundaries, and output format constraints.",
      },
      {
        step: "04. In-Flight PII / PHI Masking Proxy",
        desc: "Real-time entity recognition and redaction before token assembly to guarantee private data never enters external foundation models.",
      },
    ],
    deliverables: [
      "Entitlement-aware vector retrieval architecture with sub-15ms overhead",
      "Hardened semantic fence configuration with automated injection filters",
      "High-throughput PII/PHI sanitization proxy at the embedding boundary",
      "Immutable provenance ledger linking every answer to verified source chunks",
    ],
    stakeholders: "VPs of AI Ops, Chief Information Security Officers (CISOs), Principal RAG Engineers",
  },
  {
    id: "evals",
    badge: "Operational Excellence • 8–12 Weeks",
    icon: Activity,
    title: "AI Ops Orchestration & Continuous Evaluation",
    headline: "Transition from brittle prototypes to compliant GPU orchestration with closed-loop telemetry.",
    challenge:
      "A GenAI prototype that passes a 20-question manual test will inevitably fail in production as user inputs evolve, underlying documents change, and foundational models update their weights. Without automated, continuous evaluation, CDOs and risk committees govern blind—delaying enterprise rollouts indefinitely.",
    blueprint: [
      {
        step: "01. Production Observability Instrumentation (Arize AI / Phoenix)",
        desc: "Deep integration of runtime telemetry capturing execution traces, latency bottlenecks, token consumption, and user interaction signals.",
      },
      {
        step: "02. Golden Dataset Curation & Automated Eval Suites",
        desc: "Generating domain-specific benchmark datasets and CI/CD eval runners scoring Context Precision, Context Recall, Faithfulness, and Grounding.",
      },
      {
        step: "03. Compliant GPU Orchestration & Cost Optimization",
        desc: "Architecting resource-efficient inference routing, batching strategies, and token caching to maximize GPU utilization while maintaining auditability.",
      },
      {
        step: "04. Closed-Loop Remediation & Automated Circuit Breakers",
        desc: "Deterministic fallback systems that route low-confidence or policy-violating outputs to human review checkpoints in real time.",
      },
    ],
    deliverables: [
      "Live Arize AI runtime observability dashboard tracking grounding & latency",
      "Automated CI/CD eval suite benchmarked against domain golden datasets",
      "Deterministic circuit breaker and fallback routing architecture",
      "Regulatory compliance reporting ready for EU AI Act and NIST AI RMF audits",
    ],
    stakeholders: "VPs of AI Engineering, MLOps Directors, Enterprise Risk & Compliance Committees",
  },
];

const ServicesPlaybook = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Page Hero */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase">
                Enterprise Consulting & Implementation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]"
            >
              The AI Data Governance Playbook
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Three phased, production-focused engagements designed to move your enterprise data estate from AI vulnerability to bulletproof operational execution.
            </motion.p>
          </div>
        </section>

        {/* Offers Section */}
        <section className="container mx-auto px-6 space-y-24 max-w-6xl">
          {offers.map((offer, idx) => (
            <motion.div
              id={offer.id}
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />

              {/* Offer Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-border/70">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary text-primary font-mono text-xs font-semibold mb-3 border border-border">
                    <Clock size={12} />
                    <span>{offer.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground">
                    Offer {idx + 1}: {offer.title}
                  </h2>
                  <p className="text-base sm:text-lg font-medium text-foreground/80 mt-2 max-w-3xl">
                    {offer.headline}
                  </p>
                </div>

                <a
                  href="https://calendly.com/xodataco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-bg text-primary-foreground font-semibold text-sm whitespace-nowrap hover:opacity-90 transition-opacity shadow-lg self-start lg:self-center"
                >
                  Schedule Scope Discussion <ArrowRight size={16} />
                </a>
              </div>

              {/* Problem Section */}
              <div className="py-8 border-b border-border/50">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-destructive block mb-2">
                  The Enterprise Challenge
                </span>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {offer.challenge}
                </p>
              </div>

              {/* Blueprint & Steps */}
              <div className="py-8 border-b border-border/50">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-6">
                  Engagement Blueprint & Methodology
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {offer.blueprint.map((b) => (
                    <div key={b.step} className="p-5 rounded-xl border border-border/60 bg-background/50">
                      <h4 className="font-bold text-sm text-foreground mb-1.5">{b.step}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Stakeholders */}
              <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-4">
                    Key Production Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {offer.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 p-5 rounded-xl border border-border/80 bg-secondary/30">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    <Users size={14} className="text-primary" />
                    <span>Target Stakeholders</span>
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                    {offer.stakeholders}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Global Page CTA */}
        <section className="container mx-auto px-6 mt-28">
          <div className="max-w-4xl mx-auto rounded-3xl gradient-bg p-10 sm:p-14 text-primary-foreground text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Stop governing AI by committee. Engineer it by policy.
            </h2>
            <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a 45-minute architectural review with an XO Data Co. principal to map out your organization's AI Data Readiness timeline.
            </p>
            <a
              href="https://calendly.com/xodataco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-background text-foreground font-semibold text-base hover:bg-secondary transition-all shadow-xl"
            >
              Book an Architecture Review <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default ServicesPlaybook;
