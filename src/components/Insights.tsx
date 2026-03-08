import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Users, Truck } from "lucide-react";

const insights = [
  {
    icon: ShieldCheck,
    title: "AI-Powered Fraud Detection",
    description: "How to move from reactive to predictive fraud prevention.",
  },
  {
    icon: Gauge,
    title: "The Future of Maintenance",
    description: "Unlocking operational efficiency with predictive analytics.",
  },
  {
    icon: Users,
    title: "Hyper-Personalization at Scale",
    description: "Using AI to understand and serve individual customer needs.",
  },
  {
    icon: Truck,
    title: "Resilient Supply Chains",
    description: "Building an intelligent, agile, and predictive supply network.",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 gradient-bg-dark">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-4"
          style={{ color: "hsl(0 0% 100%)" }}
        >
          Featured Insights
        </motion.h2>
        <p className="text-center mb-16 text-lg" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
          Explore our latest thinking on data-driven transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              style={{
                backgroundColor: "hsl(220 25% 14%)",
                borderColor: "hsl(220 25% 20%)",
              }}
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-serif font-bold mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                {item.title}
              </h3>
              <p style={{ color: "hsl(0 0% 100% / 0.6)" }} className="text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
