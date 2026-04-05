import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Last Updated: April 4, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-12">
              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by XO Data Co. ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We provide data analytics, custom application development, and AI integration services. We reserve the right to modify or discontinue any aspect of our services at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">3. Use of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You are responsible for ensuring that all information you provide to us is accurate and complete.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, logos, trademarks, and intellectual property on this site are the property of XO Data Co. or its licensors and are protected by applicable intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall XO Data Co. be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">6. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which the company is registered, without regard to its conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">7. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions regarding these Terms of Service, please reach out to us through our contact form.
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

export default Terms;
