import company1 from "@/assets/company/company.svg";
import company2 from "@/assets/company/company1.svg";
import company3 from "@/assets/company/company2.svg";
import company4 from "@/assets/company/company3.svg";
import company5 from "@/assets/company/company4.svg";
import company6 from "@/assets/company/company5.svg";

function SocialProofSection() {
  return (
    <div className="px-4 pb-14 font-inter lg:my-28 lg:px-20  lg:pb-0">
      <div className="w-full">
        <p className="mb-7 text-center text-base font-semibold text-cgrey-600">
          Join 4,000+ companies already growing
        </p>
        <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          <img
            src={company1}
            alt="company1"
            className="mx-auto scale-75 lg:scale-100"
          />
          <img
            src={company2}
            alt="company2"
            className="mx-auto scale-75 lg:scale-100"
          />
          <img
            src={company3}
            alt="company3"
            className="mx-auto scale-75 lg:scale-100"
          />
          <img
            src={company4}
            alt="company4"
            className="mx-auto scale-75 lg:scale-100"
          />
          <img
            src={company5}
            alt="company5"
            className="mx-auto scale-75 lg:scale-100"
          />
          <img
            src={company6}
            alt="company6"
            className="mx-auto scale-75 lg:scale-100"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialProofSection;
