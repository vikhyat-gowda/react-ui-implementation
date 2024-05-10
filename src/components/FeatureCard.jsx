import ArrowRight from "@/assets/icons/arrow-right.svg?react";

function FeaturesCard({ content }) {
  const { title, description, icons: Icons, link } = content;
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 text-center lg:gap-y-5">
      {Icons && <Icons className="h-10 w-10" />}
      <div className="max-w-96">
        <h4 className=" text-lg font-semibold text-[#101828] lg:mb-2">
          {title}
        </h4>
        <p className="text-cgrey-600 pt-1 ">{description}</p>
      </div>
      {link && (
        <a
          href="#"
          className="inline-flex items-center gap-x-2 font-semibold text-primary-700"
        >
          Learn more <ArrowRight />
        </a>
      )}
    </div>
  );
}

export default FeaturesCard;
