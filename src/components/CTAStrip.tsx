import AnimatedSection from "./AnimatedSection";

const CTAStrip = () => {
  return (
    <section className="section-padding water-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Water Should Be Free.
            <br />
            <span className="gradient-text">Let's Make It Happen.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="#join" className="btn-glow ripple-effect text-base">
              Advertise Now
            </a>
            <a href="#join" className="btn-outline-glow text-base">
              Partner With Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTAStrip;
