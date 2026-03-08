import { motion } from "framer-motion";
import { Search, Lightbulb, Handshake } from "lucide-react";
import approachBg from "@/assets/approach-bg.jpg";

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
    <section id="process" className="relative py-28 overflow-hidden">
      {/* Split background: image on right */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute right-0 top-0 bottom-0 w-1/2">
          <img src={approachBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 text-balance">
            Our Approach
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" as const }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon size={26} className="text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary tracking-widest">{step.num}</span>
                    <div className="h-px w-8 bg-primary/30" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:hidden rounded-2xl overflow-hidden"
          >
            <img src={approachBg} alt="Team collaboration" className="w-full h-64 object-cover rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
