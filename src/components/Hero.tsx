import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "M+", label: "Data Points Processed" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
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
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full gradient-bg opacity-20"
            style={{
              width: 4 + i * 3,
              height: 4 + i * 3,
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
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

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
            style={{
              borderColor: "hsl(160 84% 39% / 0.4)",
              backgroundColor: "hsl(160 84% 39% / 0.1)",
            }}
          >
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
            <span className="text-sm font-medium" style={{ color: "hsl(160 84% 80%)" }}>
              Data-Driven Transformation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] mb-8"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Shaping the{" "}
            <br className="hidden md:block" />
            Future{" "}
            <span className="gradient-text">with Data.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            style={{ color: "hsl(0 0% 100% / 0.7)" }}
          >
            We help leaders in business and society tackle their most important
            challenges and capture their greatest opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold text-base hover:opacity-90 transition-all duration-300 hero-glow"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all duration-300 hover:bg-white/10"
              style={{
                color: "hsl(0 0% 100%)",
                borderColor: "hsl(0 0% 100% / 0.2)",
              }}
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x max-w-3xl"
          style={{ borderColor: "hsl(0 0% 100% / 0.15)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center md:px-8"
              style={{ borderColor: "hsl(0 0% 100% / 0.15)" }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
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
