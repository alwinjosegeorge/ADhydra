import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import bottleProjection from "@/assets/bottle-projection.png";

const BottleShowcase = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-2 leading-tight">
            It's a Mini-
            <br />
            <span className="gradient-text">Billboard</span> in Your Hands
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl blur-2xl" />
            <img
              src={bottleProjection}
              alt="ADhydra branded water cartons floating in creative projection"
              className="relative w-full max-w-3xl mx-auto float-animation"
            />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BottleShowcase;
