import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Target, GlassWater, Leaf, Heart } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Affordable Advertising Reach",
    desc: "Place your brand directly in consumers' hands at a fraction of traditional ad costs. Real impressions, real engagement.",
  },
  {
    icon: GlassWater,
    title: "Free Clean Drinking Water",
    desc: "Every sponsored carton delivers clean water to communities, events, and public spaces — no cost to the consumer.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    desc: "Paper cartons and aluminum containers only. Zero plastic. Sustainability labels educate while reducing waste.",
  },
  {
    icon: Heart,
    title: "Real Social Impact",
    desc: "10% of all revenue funds permanent water infrastructure. Your brand doesn't just advertise — it builds.",
  },
];

const BenefitsGrid = () => {
  return (
    <section id="benefits" className="section-padding water-gradient-bg">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Why Partner With Us</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Everyone <span className="gradient-text">Benefits</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card-hover p-8 text-left group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-500">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
