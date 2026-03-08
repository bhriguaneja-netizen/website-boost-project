import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Users, Truck, ArrowRight } from "lucide-react";

const insights = [
  {
    icon: ShieldCheck,
    title: "AI-Powered Fraud Detection",
    description: "How to move from reactive to predictive fraud prevention.",
    tag: "Security",
  },
  {
    icon: Gauge,
    title: "The Future of Maintenance",
    description: "Unlocking operational efficiency with predictive analytics.",
    tag: "Operations",
  },
  {
    icon: Users,
    title: "Hyper-Personalization at Scale",
    description: "Using AI to understand and serve individual customer needs.",
    tag: "Marketing",
  },
  {
    icon: Truck,
    title: "Resilient Supply Chains",
    description: "Building an intelligent, agile, and predictive supply network.",
    tag: "Logistics",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-28 section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 gradient-bg blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "hsl(160 84% 60%)" }}
          >
            Latest Thinking
          </span>
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mt-4 text-balance"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Featured Insights
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
            Explore our latest thinking on data-driven transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" as const }}
              whileHover={{ y: -8 }}
              className="rounded-2xl p-6 border cursor-pointer group relative overflow-hidden"
              style={{
                backgroundColor: "hsl(220 25% 11%)",
                borderColor: "hsl(220 25% 18%)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(160 84% 39% / 0.08), transparent 60%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: "0 4px 16px hsl(160 84% 39% / 0.2)" }}
                  >
                    <item.icon size={22} className="text-primary-foreground" />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      color: "hsl(160 84% 60%)",
                      backgroundColor: "hsl(160 84% 39% / 0.12)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3
                  className="text-lg font-serif font-bold mb-3 leading-snug"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
                  {item.description}
                </p>

                <div
                  className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-300"
                  style={{ color: "hsl(160 84% 60%)" }}
                >
                  Read more <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
