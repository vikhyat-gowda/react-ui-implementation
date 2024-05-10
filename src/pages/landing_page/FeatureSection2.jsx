import FeaturesCard from "@/components/FeatureCard";

import DeviceImg from "@/assets/Content.svg?react";
import FeatureIcon0 from "@/assets/icons/featured-icon0.svg?react";
import FeatureIcon1 from "@/assets/icons/featured-icon1.svg?react";
import FeatureIcon2 from "@/assets/icons/featured-icon2.svg?react";
import IphoneImg from "@/assets/iphone.svg?react";

const featuresCardContent = [
  {
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icons: FeatureIcon0,
    link: "#",
  },
  {
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icons: FeatureIcon1,
    link: "#",
  },
  {
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    icons: FeatureIcon2,
    link: "#",
  },
];

function FeaturesSection2() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-12 overflow-x-clip px-4 py-16 font-inter lg:gap-y-16 lg:px-20 lg:py-24">
      <div className="w-full text-center">
        <div className="mx-auto lg:w-min">
          <span className="me-2 rounded-full border border-[#E9D7FE] bg-[#F9F5FF] px-2.5 py-0.5 text-sm font-medium text-[#6941C6]">
            Features
          </span>
          <h3 className="mt-4 text-3xl font-semibold leading-10 lg:whitespace-nowrap lg:text-4xl ">
            Cutting-edge features for advanced analytics
          </h3>
          <p className="mt-5 text-lg text-[#475467] lg:text-xl">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>
      <div className="">
        <DeviceImg className="hidden overflow-hidden lg:block " />
        <IphoneImg className="overflow-hidden lg:hidden" />
        <div className="mt-12 grid gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
          {featuresCardContent.map((content) => (
            <FeaturesCard key={content.title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection2;
