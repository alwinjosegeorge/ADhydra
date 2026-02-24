import AnimatedSection from "./AnimatedSection";
import { MapPin } from "lucide-react";
import ajmiLogo from "@/assets/ajmi-logo.jpg";
import oxygenLogo from "@/assets/oxygen-logo.png";

const brands = [
  { name: "Ajmi", logo: ajmiLogo },
  { name: "Oxygen The Digital Expert", logo: oxygenLogo },
];

const locations = ["Kochi", "Kottayam", "Kozhikode", "Palai", "Thodupuzha", "Erratupeta", "Poonjar", "Muvattupuzha"];

const TrustSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Brand logos */}
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 text-center font-medium">
            Trusted by growing brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-20">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center gap-3">
                <img src={brand.logo} alt={brand.name} className="h-14 w-14 rounded-xl object-cover" />
                <span className="text-base font-heading font-semibold text-foreground/70">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Distribution locations */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card p-8 text-center">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Distribution Network</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {locations.map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary/60" />
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustSection;
