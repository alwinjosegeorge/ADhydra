import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Megaphone, Truck, Heart, TrendingUp } from "lucide-react";

const roles = [
  { value: "Brand", label: "Brand", icon: Megaphone, desc: "Advertise on cartons" },
  { value: "Distributor", label: "Distributor", icon: Truck, desc: "Distribute free water" },
  { value: "Volunteer", label: "Volunteer", icon: Heart, desc: "Join the mission" },
  { value: "Investor", label: "Investor", icon: TrendingUp, desc: "Fund the future" },
];

const JoinMovement = () => {
  const [form, setForm] = useState({ name: "", email: "", city: "", role: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Get Involved</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Join the <span className="gradient-text">Movement</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Whether you're a brand, distributor, volunteer, or investor — there's a role for you in the water revolution.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {submitted ? (
            <div className="glass-card p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Welcome to ADhydra</h3>
              <p className="text-muted-foreground">We'll reach out to you shortly. Together, let's make water free.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-5 text-left">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">City</label>
                <input
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  placeholder="Your city"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">I want to join as</label>
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((r) => {
                    const Icon = r.icon;
                    const selected = form.role === r.value;
                    return (
                      <motion.button
                        key={r.value}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setForm({ ...form, role: r.value })}
                        className={`flex flex-col items-center gap-1.5 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                          selected
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-border bg-muted/30 hover:border-primary/30"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${selected ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={`text-sm font-semibold ${selected ? "text-primary" : "text-foreground"}`}>
                          {r.label}
                        </span>
                        <span className="text-xs text-muted-foreground">{r.desc}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
              <button
                type="submit"
                disabled={!form.role}
                className="w-full btn-glow ripple-effect text-base py-4 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Join ADhydra
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default JoinMovement;
