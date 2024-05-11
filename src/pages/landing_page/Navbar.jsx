import { useState } from "react";

import AvatarImg from "@/assets/avatar/avatar1.png";
import Mainlogo from "@/assets/logo/mainlogo.svg?react";
import ChevronDown from "@/assets/icons/chevron-down.svg?react";
import MenuIcon from "@/assets/icons/menu.svg?react";
import BookClosedIcon from "@/assets/icons/book-closed.svg?react";
import StarIcon from "@/assets/icons/stars-02.svg?react";
import PlayCircleIcon from "@/assets/icons/play-circle-purple.svg?react";
import PersonImg from "@/assets/Image.png";
import ChevronUpIcon from "@/assets/icons/chevron-up.svg?react";
import { User, Settings, Users, MailPlus, Zap, LogOut } from "lucide-react";

const HoverCardContent = [
  {
    title: "Blog",
    description: "The latest industry news, updates and info.",
    Icon: BookClosedIcon,
  },
  {
    title: "Customer stories",
    description: "Learn how our customers are making big changes.",
    Icon: StarIcon,
  },
  {
    title: "Video tutorials",
    description: "Get up and running on new features and techniques.",
    Icon: PlayCircleIcon,
  },
];

function Navbar() {
  return (
    <nav className="border-b py-4 lg:px-20 lg:py-5">
      <div className="flex items-center justify-between pl-3 pr-4 lg:px-8 ">
        <div className="flex gap-x-10">
          <Mainlogo />
          <ul className="hidden items-center gap-x-8 font-inter  font-semibold text-cgrey-600 lg:flex">
            <li>Home</li>
            <DropDownCard text="Products" />
            <DropDownCard text="Resources" />
            <li>Pricing</li>
          </ul>
        </div>
        <SmallScreenMenu />
        {/* <MenuIcon className="lg:hidden" /> */}
        <LargeScreenMenu />
      </div>
    </nav>
  );
}

function DropDownCard({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseLeave={() => setIsOpen(false)}
        className="relative inline-flex cursor-pointer select-none items-center gap-x-2 px-4 py-3 font-inter font-semibold lg:px-0 lg:py-0 lg:text-cgrey-900"
      >
        {text} {isOpen ? <ChevronUpIcon /> : <ChevronDown />}
        {isOpen && (
          <div className="absolute z-30  top-8 lg:top-6 grid  grid-cols-1 -translate-x-4 rounded-xl bg-white px-4 shadow-lg lg:w-[640px] lg:-translate-x-1/3 lg:grid-cols-2 lg:p-5">
            <div className="flex flex-col items-start py-4">
              {HoverCardContent.map((item,i) => {
                const { title, description, Icon } = item;
                return (
                  <div key={i} className="flex gap-x-4 p-3">
                    <Icon />
                    <div className="flex flex-col ">
                      <h3 className="text-base font-semibold">{title}</h3>
                      <p className="min-w-min lg:w-auto text-sm font-normal text-cgrey-600">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-[F9FAFB] p-0 lg:p-5 pb-0">
              <div className="p-3 mx-auto w-min lg:w-auto">
                <img
                  className="rounded-md"
                  src={PersonImg}
                  alt="Person Image"
                />
                <div className="mt-6">
                  <h3 className="mb-1 whitespace-nowrap text-base font-semibold">
                    We&apos;ve just released an update!
                  </h3>
                  <p className="mb-3 text-sm font-normal text-cgrey-600">
                    Check out the all new dashboard view. Pages now load faster.
                  </p>
                  <span className="mr-3 text-sm font-semibold text-cgrey-600">
                    Dismiss
                  </span>
                  <span className="text-sm font-semibold text-primary-700">
                    Changelog
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  );
}

function LargeScreenMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative  hidden lg:block">
      <img
        onClick={() => setIsOpen(!isOpen)}
        src={AvatarImg}
        className="hidden h-10 w-10 cursor-pointer rounded-full lg:block "
        alt="avatar"
      />
      {isOpen && (
        <div className="absolute right-0 top-10 w-[240px] rounded-lg  bg-white shadow-lg">
          <LargeScreenListItem title="User Profile" Icon={User} shortcut="?" />
          <LargeScreenListItem
            title="Keyboard shortcuts"
            Icon={Settings}
            shortcut="?"
          />
          <LargeScreenListItem
            title="Keyboard Shortcut"
            Icon={Zap}
            shortcut="⌘K→P"
          />
          <hr className="h-[2px] bg-cgrey-200" />
          <LargeScreenListItem title="Team" Icon={Users} shortcut="⌘K→P" />
          <LargeScreenListItem
            title="Invite Colleagues"
            Icon={MailPlus}
            shortcut="⌘K→P"
          />
          <LargeScreenListItem title="Change log" Icon={LogOut} shortcut="Q" />
          <hr className="h-[2px] bg-cgrey-200" />
          <LargeScreenListItem title="Logout" Icon={LogOut} shortcut="Q" />
        </div>
      )}
    </div>
  );
}

function LargeScreenListItem({ title, Icon, shortcut }) {
  return (
    <li className="flex w-full items-center gap-x-2 px-4 py-[10px] text-sm">
      <Icon className="h-4 w-4" />
      <h3 className="flex-grow-1 w-full text-sm ">{title}</h3>
      <p className="text-xs text-[#667085]">{shortcut}</p>
    </li>
  );
}

const SmallScreenMenuContent = [
  ["Home", "Press", "Careers", "Legal"],
  ["Support", "Contact", "Sitemap", "Cookie settings"],
];
function SmallScreenMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="relative lg:hidden">
      <MenuIcon className="cursor-pointer" />
      {isOpen && (
        <div className=" absolute right-0 top-10 w-[calc(100vw-32px)] bg-white">
          <ul className=" flex flex-col gap-x-2 py-6">
            <li className="px-4 py-3 font-semibold text-cgrey-900">Home</li>
            {/* <li className="px-4 py-3 font-semibold text-cgrey-900">Products</li> */}
            <DropDownCard text="Products" />
            <DropDownCard text="Resources" />
            <li className="px-4 py-3 font-semibold text-cgrey-900">Pricing</li>
          </ul>
          <hr />
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 px-4 py-6">
            {SmallScreenMenuContent.map((list,index) => (
              <div key={index}>
                {list.map((item, i) => (
                  <p key={i} className=" font-semibold text-cgrey-600">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
