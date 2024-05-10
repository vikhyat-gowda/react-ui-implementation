import Companylogo from "@/assets/company/company6.svg?react";
import Avatar6 from "@/assets/avatar/avatar6.png";

function TestimonialSection() {
  return (
    <div className="bg-[#F9FAFB] px-4 py-16 font-inter lg:px-28 lg:py-24">
      <div className=" flex h-full w-full flex-col items-center justify-center gap-y-9 text-center">
        <Companylogo />
        <p className="text-3xl font-semibold leading-9 lg:text-5xl lg:leading-[60px]">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </p>
        <div>
          <img
            className="mx-auto mb-4 h-16 w-16 rounded-full border-[0.75px] border-[#E0E0E0] bg-[#E0E0E0]"
            src={Avatar6}
            alt="profile"
          />
          <div>
            <h3 className="text-lg font-semibold">Candice Wu</h3>
            <p className="text-cgrey-600">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestimonialSection;
