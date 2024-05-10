import FeatureIcon0 from "@/assets/icons/featured-icon0.svg?react";
import FeatureIcon1 from "@/assets/icons/featured-icon1.svg?react";
import FeatureIcon2 from "@/assets/icons/featured-icon2.svg?react";
import FeatureIcon3 from "@/assets/icons/featured-icon3.svg?react";
import FeatureIcon4 from "@/assets/icons/featured-icon4.svg?react";
import FeatureIcon5 from "@/assets/icons/featured-icon5.svg?react";
import FeaturesCard from "@/components/FeatureCard";

const featureCardContent = [
  {
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icons: FeatureIcon0,
  },
  {
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icons: FeatureIcon1,
  },
  {
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and dropdown on the data in a couple clicks.",
    icons: FeatureIcon2,
  },
  {
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    icons: FeatureIcon3,
  },
  {
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    icons: FeatureIcon4,
  },
  {
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    icons: FeatureIcon5,
  },
];

function FeaturesSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-11 py-16 font-inter lg:gap-y-16 lg:px-20 lg:py-24">
      <div className="w-full px-4 text-center font-inter">
        <div className="mb-4 lg:mb-5">
          <h3 className="mb-3 text-sm font-semibold text-primary-700 lg:text-base">
            Features
          </h3>
          <h2 className="text-3xl font-semibold lg:text-4xl  lg:leading-[44px] lg:tracking-tight">
            Analytics that feels like it’s from the future
          </h2>
        </div>
        <p className="text-lg text-cgrey-600 lg:mx-auto lg:max-w-3xl lg:text-xl lg:leading-[30px]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="grid w-full gap-y-10 px-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 lg:px-0">
        {featureCardContent.map((content) => (
          <FeaturesCard key={content.title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
