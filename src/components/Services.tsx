import { motion } from "framer-motion";
import { BarChart3, Code2, Brain, ArrowUpRight } from "lucide-react";
import serviceAnalytics from "@/assets/service-analytics.jpg";
import serviceDev from "@/assets/service-dev.jpg";
import serviceAi from "@/assets/service-ai.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "We turn complex data into clear, actionable insights. Our Business Intelligence solutions provide a comprehensive view of your operations, enabling smarter, faster decision-making.",
    image: serviceAnalytics,
  },
  {
    icon: Code2,
    title: "Custom App Development",
    description:
      "From enterprise platforms to customer-facing mobile apps, we engineer bespoke software solutions that drive efficiency, engagement, and growth.",
    image: serviceDev,
  },
  {
    icon: Brain,
    title: "AI & LLM Integration",
    description:
      "We leverage cutting-edge AI and Large Language Models to build intelligent systems and Model Context Platforms for AI LLM integrations that automate processes and unlock new capabilities.",
    image: serviceAi,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 text-balance">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }}
              className="card-elevated group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                  <service.icon size={22} className="text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
