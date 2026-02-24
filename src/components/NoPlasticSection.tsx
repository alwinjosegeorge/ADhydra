import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import noPlasticImg from "@/assets/no-plastic-packaging.png";

const NoPlasticSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={noPlasticImg}
                alt="ADhydra eco packaging — aluminum bottles and paper cartons, no plastic"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              We Never Use <span className="gradient-text">Plastic</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              ADhydra comes in <span className="text-foreground font-semibold">aluminum bottles</span> and <span className="text-foreground font-semibold">paper cartons</span> of natural spring water because we didn't want to make water free and do it in a plastic bottle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our packaging is 100% recyclable and eco-friendly. We believe free water shouldn't cost the planet.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NoPlasticSection;
