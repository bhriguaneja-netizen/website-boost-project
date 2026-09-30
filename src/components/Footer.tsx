import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Tri-Fold Framework",
    links: [
      { label: "AI Data Readiness & Lineage", href: "/#framework", isRoute: false },
      { label: "Model Armor & Compliance", href: "/#framework", isRoute: false },
      { label: "Runtime Observability & Evals", href: "/#framework", isRoute: false },
      { label: "Inline Control Plane", href: "/platform", isRoute: true },
    ],
  },
  {
    title: "Playbook & Platform",
    links: [
      { label: "AI Readiness Audit", href: "/services#audit", isRoute: true },
      { label: "RAG Pipeline Governance", href: "/services#rag", isRoute: true },
      { label: "AI Ops & Continuous Eval", href: "/services#evals", isRoute: true },
      { label: "Design Partner Program", href: "/platform", isRoute: true },
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
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="XO Data Co." className="h-7 w-7" />
              <span className="text-base font-semibold tracking-tight text-foreground font-mono">
                xo data co.
              </span>
            </div>
            <p className="max-w-sm leading-relaxed mb-4 text-muted-foreground text-sm">
              Enterprise Data Governance for AI Readiness. Moving from passive metadata catalogs to active, model-ready context engineering.
            </p>
            <p className="text-xs font-mono text-muted-foreground/80 mb-6">
              San Francisco Bay Area | AI Architecture & Data Governance
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-muted-foreground/70 font-mono">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; 2026 XO Data Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground/60 transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground/60 transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
