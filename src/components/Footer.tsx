const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="XO Data Co." className="h-8" />
            <span className="font-serif font-bold text-foreground">XO DATA CO.</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#process" className="hover:text-primary transition-colors">Approach</a>
            <a href="#insights" className="hover:text-primary transition-colors">Insights</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 XO Data Co. All rights reserved.
          </p>
          <a
            href="mailto:contact@xodataco.com"
            className="text-sm text-primary font-semibold hover:underline"
          >
            contact@xodataco.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
