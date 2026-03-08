import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full gradient-bg opacity-10 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Shaping the Future{" "}
            <span className="gradient-text">with Data.</span>
          </h1>
          <p className="text-lg md:text-xl mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            We help leaders in business and society tackle their most important
            challenges and capture their greatest opportunities.
          </p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-lg gradient-bg text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Get Started <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
