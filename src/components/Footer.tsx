import adhydraLogo from "@/assets/adhydra-logo.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={adhydraLogo} alt="ADhydra" className="h-8" />
            </div>
            <p className="text-sm text-muted-foreground">Hydration. Visibility. Impact.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Contact", "Advertise", "Distribute"].map((link) => (
                <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/4dhydra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 ADhydra. Building universal water access through innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
