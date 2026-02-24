import AnimatedSection from "./AnimatedSection";
import { AlertTriangle, Lightbulb } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section id="problem" className="section-padding water-gradient-bg">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">
            The Challenge & Our Answer
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Problem */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 md:p-10 h-full">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">The Problem</h3>
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li className="flex gap-3">
                  <span className="w-1 bg-destructive/40 rounded-full shrink-0" />
                  <span>Billions lack consistent access to free, clean drinking water in public spaces.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1 bg-destructive/40 rounded-full shrink-0" />
                  <span>Small businesses can't afford traditional advertising channels like billboards or digital ads.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1 bg-destructive/40 rounded-full shrink-0" />
                  <span>Single-use plastic bottles devastate ecosystems. We need a plastic-free solution.</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Solution */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card-hover p-8 md:p-10 h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">The AdHydra Model</h3>
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li className="flex gap-3">
                  <span className="w-1 bg-primary/40 rounded-full shrink-0" />
                  <span>Brands place ads on eco paper cartons &amp; aluminum containers — affordable, high-visibility reach.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1 bg-primary/40 rounded-full shrink-0" />
                  <span>Free water distributed in public spaces, events, offices, and communities.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1 bg-primary/40 rounded-full shrink-0" />
                  <span>10% of ad revenue funds permanent public drinking water taps.</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
