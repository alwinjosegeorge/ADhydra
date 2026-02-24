import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import VisualFlow from "@/components/VisualFlow";
import HowItWorks from "@/components/HowItWorks";
import WhyAdvertise from "@/components/WhyAdvertise";
import BenefitsGrid from "@/components/BenefitsGrid";
import BottleShowcase from "@/components/BottleShowcase";
import NoPlasticSection from "@/components/NoPlasticSection";
import ImpactSection from "@/components/ImpactSection";
import WellAwareSection from "@/components/WellAwareSection";
import TrustSection from "@/components/TrustSection";
import WhyDifferent from "@/components/WhyDifferent";
import JoinMovement from "@/components/JoinMovement";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <VisualFlow />
      <HowItWorks />
      <WhyAdvertise />
      <BenefitsGrid />
      <BottleShowcase />
      <NoPlasticSection />
      <ImpactSection />
      <WellAwareSection />
      <TrustSection />
      <WhyDifferent />
      <JoinMovement />
      <CTAStrip />
      <Footer />
    </main>
  );
};

export default Index;
