import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import cartonSingle from "@/assets/carton-single.png";

const stats = [
  { value: 50000, suffix: "+", label: "Cartons Distributed" },
  { value: 25000, suffix: "L", label: "Litres of Water Shared" },
  { value: 120, suffix: "+", label: "Brands Participating" },
  { value: 15, suffix: "", label: "Water Taps Funded" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return count;
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold glow-text mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding relative overflow-hidden">
      {/* Background carton */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <img src={cartonSingle} alt="" className="h-[600px] float-animation-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">Our Goal</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground">
            Numbers That <span className="gradient-text">Matter</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <StatCard {...s} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center mt-16 text-xl md:text-2xl font-heading text-foreground/80 max-w-2xl mx-auto">
            "Every carton you sponsor builds <span className="text-primary font-semibold">real water access</span>."
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ImpactSection;
