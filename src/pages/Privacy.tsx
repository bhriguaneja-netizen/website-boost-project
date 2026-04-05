import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Last Updated: April 4, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-12">
              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  XO Data Co. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, xodataco.com, and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Fill out a contact form or request a consultation</li>
                  <li>Interact with our AI Assistant (XO Assistant)</li>
                  <li>Sign up for our insights or newsletters</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Communicate with you about our services and insights</li>
                  <li>Analyze trends and usage to enhance your experience</li>
                  <li>Ensure the security and integrity of our platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement robust technical and organizational measures to protect your personal information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">5. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy, please reach out to us through our contact form.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
