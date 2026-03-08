import { motion } from "framer-motion";
import { Search, Lightbulb, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Deep Diagnosis",
    description:
      "We start by understanding the core of your challenge, conducting a rigorous analysis of your data, processes, and market landscape.",
  },
  {
    icon: Lightbulb,
    num: "02",
    title: "Tailored Strategy",
    description:
      "We design bespoke strategies and solutions, leveraging our deep industry expertise and analytical rigor to create a clear path to value.",
  },
  {
    icon: Handshake,
    num: "03",
    title: "Collaborative Implementation",
    description:
      "We work alongside your team to implement solutions, build capabilities, and ensure that the impact is sustainable and grows over time.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground mb-16"
        >
          Our Approach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-serif font-bold gradient-text">
                  {step.num}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
