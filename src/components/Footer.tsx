import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Data Analytics", href: "#services" },
      { label: "App Development", href: "#services" },
      { label: "AI Integration", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Approach", href: "#process" },
      { label: "Insights", href: "#insights" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="XO Data Co." className="h-10" />
              <span className="font-serif font-bold text-xl text-foreground">
                XO DATA CO.
              </span>
            </div>
            <p className="max-w-sm leading-relaxed mb-6 text-muted-foreground">
              We help leaders in business and society tackle their most important challenges
              and capture their greatest opportunities through data-driven solutions.
            </p>
            <a
              href="mailto:contact@xodataco.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              contact@xodataco.com
            </a>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-5 text-muted-foreground/60">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground/60">
            &copy; 2026 XO Data Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground/60 transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground/60 transition-colors hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
