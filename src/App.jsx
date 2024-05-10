import HeroSection from "@/pages/landing_page/HeroSection";
import SocialProofSection from "@/pages/landing_page/SocialProofSection";
import FeaturesSection from "@/pages/landing_page/FeaturesSection";
import FeaturesSection2 from "@/pages/landing_page/FeatureSection2";
import TestimonialSection from "@/pages/landing_page/TestimonialSection";
import FaqSection from "@/pages/landing_page/FaqSection";
import BlogSection from "@/pages/landing_page/BlogSection";
import CTASection from "@/pages/landing_page/CTASection";
import Divider from "@/components/Divider";
import Footer from "@/pages/landing_page/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <Divider />
      <FeaturesSection />
      <TestimonialSection />
      <FeaturesSection2 />
      <Divider />
      <FaqSection />
      <Divider />
      <BlogSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
