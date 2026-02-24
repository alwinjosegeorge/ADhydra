import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Megaphone, Package, Droplets } from "lucide-react";

const steps = [
  {
    icon: Megaphone,
    step: "01",
    title: "Brands Place Ads",
    desc: "Businesses choose eco-friendly paper cartons or aluminum containers as their ad medium — affordable, tangible, and socially impactful.",
  },
  {
    icon: Package,
    step: "02",
    title: "Free Water Distributed",
    desc: "Ad-printed cartons are distributed free at public events, stations, offices, and community spaces across the city.",
  },
  {
    icon: Droplets,
    step: "03",
    title: "Water Taps Funded",
    desc: "10% of every campaign's revenue funds the installation of permanent public drinking water taps.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">The Process</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            How It <span className="gradient-text">Works</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover p-8 text-center relative group"
              >
                <span className="absolute top-4 right-4 text-5xl font-heading font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {s.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-shadow duration-500">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
