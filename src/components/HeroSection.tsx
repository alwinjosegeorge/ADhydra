import { motion } from "framer-motion";
import heroCartons from "@/assets/hero-cartons.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 water-gradient-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Ad-Funded Free Water — Zero Plastic
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-4">
              Your Ad Can Fund
              <br />
              <span className="gradient-text">Free Drinking Water.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              Put your brand on eco-friendly water cartons. Distributed free at events, offices &amp; public spaces.
            </p>
            <p className="text-sm text-muted-foreground/70 max-w-md mb-10">
              Ads fund the water. 10% of revenue builds permanent public water taps. Paper &amp; aluminum only — zero plastic.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#join" className="btn-glow ripple-effect text-base">
                Advertise With Us
              </a>
              <a href="#join" className="btn-outline-glow text-base">
                Become a Distributor
              </a>
            </div>

          </motion.div>

          {/* Right: Cartons visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]" />
            <img
              src={heroCartons}
              alt="AdHydra ad-printed water cartons — eco paper packaging with brand advertisements"
              className="relative w-full max-w-2xl float-animation rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
