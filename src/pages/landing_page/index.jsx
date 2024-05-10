import Divider from "@/components/Divider";
import HeroSection from "@/pages/landing_page/HeroSection";
import SocialProofSection from "@/pages/landing_page/SocialProofSection";
import FeaturesSection from "@/pages/landing_page/FeaturesSection";
import TestimonialSection from "@/pages/landing_page/TestimonialSection";
import FeaturesSection2 from "@/pages/landing_page/FeatureSection2";
import FaqSection from "@/pages/landing_page/FaqSection";
import BlogSection from "@/pages/landing_page/BlogSection";
import CTASection from "@/pages/landing_page/CTASection";
import Footer from "@/pages/landing_page/Footer";

function LandingPage() {
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

export default LandingPage;
