import Mainlogo from "@/assets/logo/mainlogo.svg?react";

const footerData = [
  [
    { name: "Product", link: "#" },
    { name: "Overview", link: "#" },
    { name: "Features", link: "#" },
    {
      name: "Solutions",
      chip: (
        <span className="ml-1 rounded-full border border-[#ABEFC6] bg-[#ECFDF3] px-2 py-[2px] text-xs font-medium text-[#067647]">
          New
        </span>
      ),
      link: "#",
    },
    { name: "Tutorials", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Releases", link: "#" },
  ],
  [
    { name: "Company", link: "#" },
    { name: "About us", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Press", link: "#" },
    { name: "News", link: "#" },
    { name: "Media kit", link: "#" },
    { name: "Contact", link: "#" },
  ],
  [
    { name: "Resources", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Newsletter", link: "#" },
    { name: "Events", link: "#" },
    { name: "Help centre", link: "#" },
    { name: "Tutorials", link: "#" },
    { name: "Support", link: "#" },
  ],
  [
    { name: "Use cases", link: "#" },
    { name: "Startups", link: "#" },
    { name: "Enterprise", link: "#" },
    { name: "Government", link: "#" },
    { name: "SaaS centre", link: "#" },
    { name: "Marketplaces", link: "#" },
    { name: "Ecommerce", link: "#" },
  ],
  [
    { name: "Social", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "Linkedln", link: "#" },
    { name: "Facebook", link: "#" },
    { name: "GitHub", link: "#" },
    { name: "AngelList", link: "#" },
    { name: "Dribbble", link: "#" },
  ],
  [
    { name: "Legal", link: "#" },
    { name: "Terms", link: "#" },
    { name: "Privacy", link: "#" },
    { name: "Cookies", link: "#" },
    { name: "Licenses", link: "#" },
    { name: "Settings", link: "#" },
    { name: "Contact", link: "#" },
  ],
];

function Footer() {
  return (
    <footer className="flex flex-col gap-y-12 px-4 py-12 font-inter lg:px-20 lg:py-16 ">
      <div className="mx-auto grid w-full grid-cols-2 gap-8 lg:grid-cols-6 lg:px-8">
        {footerData.map((list, i) => (
          <ul className="flex flex-col gap-y-3" key={i}>
            {list.map((item, i) => (
              <li
                className="font-semibold text-cgrey-600 first:mb-1 first:text-sm first:text-[#667085] first:pointer-events-none"
                key={i}
              >
                <a href={item.link}>
                  {item.name}
                  {item.chip && item.chip}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="flex flex-col items-start gap-y-6 border-t border-t-cgrey-200 pt-8 lg:flex-row lg:items-end lg:justify-between">
        <Mainlogo className=" ml-0" />
        <p className="text-base text-[#667085]">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
