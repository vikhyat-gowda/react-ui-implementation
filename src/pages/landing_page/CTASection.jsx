function CTASection() {
  return (
    <div className="flex w-full flex-col gap-y-8 bg-[#F9FAFB] px-4 py-16  font-inter lg:gap-y-10 lg:px-28 lg:py-24">
      <div className="text-center">
        <h3 className="mb-4 text-3xl font-semibold tracking-tight lg:mb-5 lg:text-4xl">
          Start your free trial
        </h3>
        <p className="text-lg text-[#475467] lg:text-xl">
          Join over 4,000+ startups already growing with Untitled.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-y-3 lg:flex-row-reverse lg:gap-x-3 lg:gap-y-0">
        <button className="w-full whitespace-nowrap rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white lg:w-min  lg:px-7 lg:py-4 lg:text-lg">
          Get started
        </button>
        <button className="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg px-5 py-3 font-semibold outline outline-cgrey-300 lg:w-min lg:px-7 lg:py-4 lg:text-lg">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default CTASection;
