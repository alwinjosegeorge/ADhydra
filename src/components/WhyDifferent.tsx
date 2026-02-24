import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Globe, Repeat } from "lucide-react";

const points = [
  {
    icon: TrendingUp,
    title: "Advertising With Social Return",
    desc: "Every ad dollar directly funds public water access. Brands get visibility and measurable community impact.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact Metrics",
    desc: "Real-time tracking of cartons distributed, litres shared, and taps funded. Full transparency for investors and partners.",
  },
  {
    icon: Globe,
    title: "Scalable Public Distribution",
    desc: "Our model works in any city, any event, any public space. Built for nationwide and global expansion.",
  },
  {
    icon: Repeat,
    title: "Circular Sustainability Model",
    desc: "Eco-labels educate consumers. Paper & aluminum packaging minimizes waste. Revenue reinvests into water infrastructure.",
  },
];

const WhyDifferent = () => {
  return (
    <section className="section-padding water-gradient-bg">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Our Edge</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Why AdHydra Is <span className="gradient-text">Different</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {points.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                className="flex gap-5 glass-card-hover p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:shadow-glow transition-shadow duration-500">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
