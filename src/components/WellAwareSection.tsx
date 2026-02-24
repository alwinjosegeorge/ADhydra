import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";

const WellAwareSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="glass-card-hover p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>

            <p className="text-sm uppercase tracking-widest text-primary mb-3 font-medium">Our Impact Partner</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Partnered with <span className="gradient-text">WellAware</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              We donate <span className="text-foreground font-semibold">10% per beverage</span> to WellAware, an Austin-based non-profit that builds water wells in East Africa.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Every <span className="text-foreground font-semibold">150 beverages</span> we distribute donates enough money to provide one person with a safe water source <span className="text-foreground font-semibold">for the rest of their life</span>.
            </p>

            <motion.a
              href="https://wellawareworld.org/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 btn-outline-glow text-base"
            >
              Learn More About WellAware
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WellAwareSection;
