import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg-light.jpg";

const stats = [
  { value: 15, suffix: "ms", prefix: "< ", label: "Runtime Policy Interception" },
  { value: 100, suffix: "%", prefix: "", label: "Deterministic Chunk Lineage" },
  { value: 0, suffix: "%", prefix: "", label: "Context Window Data Leakage" },
];

const Counter = ({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (target === 0) {
            setCount(0);
            return;
          }
          const duration = 1500;
          const step = Math.max(1, target / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number">
      {prefix}{count}{suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full gradient-bg opacity-15"
            style={{
              width: 4 + i * 3,
              height: 4 + i * 3,
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.08, 0.2, 0.08],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wider text-primary uppercase">
              Enterprise Data Governance for AI Readiness
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-serif font-bold leading-[1.08] mb-8 text-foreground tracking-tight"
          >
            Your legacy data governance wasn't engineered for{" "}
            <span className="gradient-text">non-deterministic models.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-6 text-foreground/80 font-medium"
          >
            XO Data Co. transforms brittle enterprise data estates into model-ready context architectures. We enforce deterministic guardrails, zero-leakage RAG pipelines, and auditable action lineage across every agentic workflow, vector store, and fine-tuning run.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-mono mb-10"
          >
            Migrating Fortune 500 data teams from Collibra, Alation & static catalogs to production GenAI
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://calendly.com/xodataco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold text-base hover:opacity-90 transition-all duration-300 hero-glow shadow-lg"
            >
              Book an Architecture Review <ArrowRight size={18} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-border text-foreground transition-all duration-300 hover:bg-secondary"
            >
              Explore the Playbook
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border max-w-3xl p-6 rounded-2xl border border-border/60 bg-background/60 backdrop-blur-md"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:px-8">
              <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className="mt-2 text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
