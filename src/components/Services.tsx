import { motion } from "framer-motion";
import { Database, ShieldCheck, Activity, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import serviceAnalytics from "@/assets/service-analytics.jpg";
import serviceDev from "@/assets/service-dev.jpg";
import serviceAi from "@/assets/service-ai.jpg";

const pillars = [
  {
    icon: Database,
    pillarNum: "Pillar 01",
    tag: "Data Ingestion & Context Engineering",
    title: "AI Data Readiness & Lineage",
    subtitle: "Transform dark enterprise data into high-signal training & RAG vectors.",
    description:
      "Raw enterprise data is 80% unstructured, noisy, and unindexed for vector search. We build deterministic ingestion pipelines that extract, parse, clean, and enrich complex documents into dense, token-efficient vector representations. Every vector embeds cryptographic lineage: source hash, timestamp, and entitlement policy.",
    highlights: [
      "Semantic parent-child chunking & token optimization",
      "Schema.org, OpenAPI & llms.txt standardization",
      "Benchmarked indexing on Pinecone, Qdrant, Milvus & pgvector",
      "Cryptographic action lineage back to source records",
    ],
    image: serviceAnalytics,
    ctaLink: "/services#audit",
  },
  {
    icon: ShieldCheck,
    pillarNum: "Pillar 02",
    tag: "Policy Enforcement & Runtime Security",
    title: "Model Armor & Compliance",
    subtitle: "Stop context window poisoning and data leakage at the retrieval boundary.",
    description:
      "You cannot govern a non-deterministic transformer with a corporate policy PDF. Model Armor enforces zero-trust, Policy-as-Code guardrails between data stores and the model layer. We enforce dynamic RBAC/ABAC at query time, strip PII/PHI in flight, and detect indirect prompt injections before prompt assembly.",
    highlights: [
      "Entitlement-aware vector retrieval (Dynamic RBAC/ABAC)",
      "Real-time semantic firewalls & NeMo / OPA guardrails",
      "In-flight PII, PHI & credential token masking proxy",
      "Automated indirect prompt injection neutralization",
    ],
    image: serviceDev,
    ctaLink: "/services#rag",
  },
  {
    icon: Activity,
    pillarNum: "Pillar 03",
    tag: "Model Observability & Source Grounding",
    title: "Runtime Observability & Closed-Loop Evals",
    subtitle: "Continuous evaluation of live model outputs against ground truth.",
    description:
      "Deploying AI without runtime observability is flying blind in production. We integrate enterprise evaluation harnesses (Arize AI, Phoenix, Ragas) directly into your inference stack to monitor context recall, context precision, faithfulness, and answer relevance on live production traffic with automated circuit breakers.",
    highlights: [
      "Production Arize AI & Phoenix telemetry instrumentation",
      "Continuous evaluation for Faithfulness & Hallucination index",
      "Vector & embedding drift monitoring over time",
      "Automated circuit breakers & human-in-the-loop fallback",
    ],
    image: serviceAi,
    ctaLink: "/services#evals",
  },
];

const Services = () => {
  return (
    <section id="framework" className="py-28 bg-secondary/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest font-mono">
            The Architectural Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground mt-4 text-balance">
            The Tri-Fold Framework for Enterprise AI Readiness
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            We bridge the chasm between raw enterprise data storage and autonomous model consumption through three deterministic operational pillars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-elevated group flex flex-col justify-between overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
              <div>
                {/* Header image banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-mono font-semibold text-primary">
                    {pillar.pillarNum}
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                    <pillar.icon size={22} className="text-primary-foreground" />
                  </div>
                </div>

                {/* Content body */}
                <div className="p-7">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                    {pillar.tag}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Highlights */}
                  <div className="border-t border-border/60 pt-5 space-y-2.5">
                    {pillar.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium">
                        <Check size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-7 pt-0 mt-auto">
                <Link
                  to={pillar.ctaLink}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 duration-200"
                >
                  Explore Pillar Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA button below framework */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            View Full Consulting Offers & Playbook <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
