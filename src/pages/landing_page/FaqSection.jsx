import { useState } from "react";
import AvatarImg1 from "@/assets/avatar/avatar1.png";
import AvatarImg2 from "@/assets/avatar/avatar2.png";
import AvatarImg3 from "@/assets/avatar/avatar3.png";
import PlusCircle from "@/assets/icons/plus-circle.svg?react";
import MinusCircle from "@/assets/icons/minus-circle.svg?react";

const FaqQuestions = [
  {
    title: "Is there a free trial available?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What is your cancellation policy?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can other info be added to an invoice?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How does billing work?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How do I change my account email?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

function FaqSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-12 px-4 py-16 font-inter lg:gap-y-16 lg:px-20 lg:py-24">
      <div className="text-center">
        <h3 className="text-3xl font-semibold leading-[38px] lg:text-4xl lg:leading-[44px] lg:tracking-tight">
          Frequently asked questions
        </h3>
        <p className="mt-4 text-lg text-[#475467] lg:mt-5 lg:text-xl lg:leading-[30px]">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="flex w-full max-w-[768px] flex-col divide-y-2 divide-[#EAECF0]">
        {FaqQuestions.map((question, index) => (
          <AccordationItem
            key={index}
            question={question}
            defaultState={index === 0}
          />
        ))}
      </div>
      <div className="flex w-full max-w-[1216px] flex-col items-center justify-center gap-y-6 rounded-2xl bg-[#F9FAFB] py-8 text-center lg:gap-y-8 lg:rounded-none">
        <div className="flex items-end -space-x-4 rtl:space-x-reverse">
          <img
            src={AvatarImg2}
            alt="avatar img"
            className="  aspect-square h-12 w-12 rounded-full border-[1.5px] border-[#E0E0E0] bg-[#E0E0E0]"
          />
          <img
            src={AvatarImg1}
            alt="avatar img"
            className="z-30 aspect-square h-14 w-14 rounded-full border-[1.5px] border-[#FFFFFF] bg-white"
          />
          <img
            src={AvatarImg3}
            alt="avatar img"
            className=" aspect-square h-12 w-12 rounded-full  border-[1.5px] border-[#E0E0E0] bg-[#E0E0E0]"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold">Still have questions?</h4>
          <p className="mt-2 min-w-fit leading-6 text-[#475467] lg:text-lg">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <button className="rounded-lg border border-[#7F56D9] bg-[#7F56D9] px-5 py-3 text-white shadow-sm shadow-[#1018280D]">
          Get in touch
        </button>
      </div>
    </div>
  );
}

function AccordationItem({ question, defaultState = false }) {
  const { title, description } = question;
  const [isOpen, setIsOpen] = useState(defaultState);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex cursor-pointer items-start justify-between gap-x-2 pb-8 pt-6 font-inter first:pt-0 last:pb-0"
    >
      <div className="flex  flex-col items-start gap-y-2">
        <h3 className="text-lg font-semibold tracking-tight text-[#101828] ">
          {title}
        </h3>
        {isOpen && <p className="text-cgrey-60 text-base">{description}</p>}
      </div>
      <div className="h-6 w-6">
        {isOpen ? (
          <MinusCircle className="pt-[2px]" />
        ) : (
          <PlusCircle className="pt-[2px]" />
        )}
      </div>
    </div>
  );
}

export default FaqSection;
