import { motion } from "framer-motion";
import { BarChart3, Code2, Brain } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "We turn complex data into clear, actionable insights. Our Business Intelligence solutions provide a comprehensive view of your operations, enabling smarter, faster decision-making.",
  },
  {
    icon: Code2,
    title: "Custom App Development",
    description:
      "From enterprise platforms to customer-facing mobile apps, we engineer bespoke software solutions that drive efficiency, engagement, and growth.",
  },
  {
    icon: Brain,
    title: "AI & LLM Integration",
    description:
      "We leverage cutting-edge AI and Large Language Models to build intelligent systems and Model Context Platforms for AI LLM integrations that automate processes and unlock new capabilities.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground mb-16"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="card-elevated p-8 text-center group"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
