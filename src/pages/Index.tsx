import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import PlatformPreview from "@/components/PlatformPreview";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <TechStack />
      <PlatformPreview />
      <Insights />
      <Contact />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
