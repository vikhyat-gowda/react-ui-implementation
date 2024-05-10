import Navbar from "@/pages/landing_page/Navbar";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";
import PlayCircle from "@/assets/icons/play-circle.svg?react";
import HeroImg from "@/assets/HeroImg.png";

function Chip() {
  return (
    <span className="inline-flex max-w-min items-center  gap-x-2 whitespace-nowrap rounded-full bg-primary-50 p-1 pr-[10px] font-inter text-xs font-semibold ring-1 ring-primary-200 lg:text-sm ">
      <p className=" inline-flex  items-center justify-center rounded-full border border-primary-300 bg-white p-1 px-2 py-1 leading-none text-primary-700 ">
        New Feature
      </p>
      <span className="inline-flex items-center gap-x-1 text-primary-700">
        Check out the team dashboard
        <ArrowRight />
      </span>
    </span>
  );
}

function HeroSection() {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="flex h-full flex-col items-center justify-center gap-y-16 px-4 py-16 lg:mt-20 lg:gap-y-9 lg:px-20 lg:py-0">
        <div className="flex flex-grow flex-col items-center gap-y-8 lg:gap-y-12">
          <div className="flex flex-col items-center gap-y-3 lg:gap-y-6">
            <Chip />
            <h1 className="text-center text-4xl font-semibold leading-[44px] lg:text-6xl lg:leading-[72px] lg:tracking-tight">
              Beautiful analytics to grow smarter
            </h1>
            <p className="text-center text-lg text-cgrey-600 lg:max-w-3xl">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-y-3 lg:flex-row-reverse lg:gap-x-3 lg:gap-y-0">
            <button className="w-full whitespace-nowrap rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white lg:w-min  lg:px-7 lg:py-4 lg:text-lg">
              Sign up
            </button>
            <button className="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg px-5 py-3 font-semibold outline outline-cgrey-300 lg:w-min lg:px-7 lg:py-4 lg:text-lg">
              <PlayCircle />
              Demo
            </button>
          </div>
        </div>
        <img
          src={HeroImg}
          alt="heroimg"
          className="rounded-[4px] shadow-2xl ring-4 ring-[#101828] lg:hidden"
        />
        <div className="hidden max-h-[60vh] w-full overflow-hidden px-8 pt-8 lg:block">
          <img
            src={HeroImg}
            alt="heroimg"
            className="rounded-xl shadow-2xl ring-8 ring-[#101828]  "
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

