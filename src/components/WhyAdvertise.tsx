import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Eye, DollarSign, HeartHandshake, Brain, Hand } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Hyper-Visible Placement",
    desc: "Your ad is literally in the consumer's hand — not scrolled past, not skipped. Maximum attention guaranteed.",
  },
  {
    icon: DollarSign,
    title: "Affordable vs Billboards",
    desc: "Fraction of the cost of traditional OOH advertising with higher recall and longer dwell time.",
  },
  {
    icon: HeartHandshake,
    title: "CSR + Marketing Combined",
    desc: "One campaign delivers brand exposure and social impact. Your ad funds free water — consumers remember that.",
  },
  {
    icon: Brain,
    title: "Unmatched Brand Recall",
    desc: "People hold, read, and keep the carton. Average interaction time far exceeds any digital ad.",
  },
  {
    icon: Hand,
    title: "Measurable Social Impact",
    desc: "Track cartons distributed, litres shared, and communities served. Real metrics for ESG reporting.",
  },
];

const WhyAdvertise = () => {
  return (
    <section className="section-padding water-gradient-bg">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">For Brands</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Why Advertise on <span className="gradient-text">AdHydra?</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card-hover p-7 group h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-500">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-14">
            <a href="#join" className="btn-glow ripple-effect text-base inline-block">
              Start Advertising
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyAdvertise;
