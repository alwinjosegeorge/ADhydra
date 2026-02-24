import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cartonSingle from "@/assets/carton-single.png";

const steps = [
  {
    label: "Ad-Printed Carton",
    desc: "Your brand printed on premium eco cartons",
  },
  {
    label: "Free Water Distributed",
    desc: "Handed out at events, offices & public spaces",
  },
  {
    label: "Water Taps Funded",
    desc: "10% of revenue builds permanent water access",
  },
];

const VisualFlow = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">The Model</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-16">
            From Ad to <span className="gradient-text">Impact</span>
          </h2>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="flex items-center gap-4">
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card-hover p-6 md:p-8 text-center w-64 flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-4 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl" />
                  <img src={cartonSingle} alt="" className="relative w-full h-full object-contain" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{step.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-primary/40 shrink-0" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualFlow;
