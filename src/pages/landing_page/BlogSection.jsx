import BlogImg1 from "@/assets/blog/blog1.png";
import BlogImg2 from "@/assets/blog/blog2.png";
import BlogImg3 from "@/assets/blog/blog3.png";
import Avatar1 from "@/assets/avatar/avatar1.png";
import Avatar2 from "@/assets/avatar/avatar4.png";
import Avatar3 from "@/assets/avatar/avatar5.png";

function BlogSection() {
  return (
    <div className="flex w-full flex-col gap-y-12 px-4 py-16 font-inter lg:gap-y-16 lg:px-20 lg:py-24">
      <div className="flex w-full items-start  lg:px-8">
        <div className="w-full">
          <p className="mb-3 text-sm font-semibold text-[#6941C6] lg:text-base">
            Our blog
          </p>
          <h3 className="mb-4 text-3xl font-semibold leading-[38px] lg:mb-5 lg:text-4xl lg:leading-[44px] lg:tracking-tight">
            Latest blog posts
          </h3>
          <p className="text-cgrey-60 text-lg ">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="hidden whitespace-nowrap rounded-lg border border-[#7F56D9] bg-[#7F56D9] px-5 py-3 font-semibold  text-white shadow-sm shadow-[#1018280D] md:block">
          View all posts
        </button>
      </div>
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <BlogCard
          title="UX review presentations"
          content="How do you create compelling presentations that wow your colleagues and impress your managers?"
          img={BlogImg1}
          author="Olivia Rhye"
          date="20 Jan 2024"
          authorImg={Avatar1}
        />
        <BlogCard
          title="Migrating to Linear 101"
          content="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
          img={BlogImg2}
          author="Phoenix Baker"
          date="19 Jan 2024"
          authorImg={Avatar2}
        />
        <BlogCard
          title="Building your API stack"
          content="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          img={BlogImg3}
          author="Lana Steiner"
          date="18 Jan 2024"
          authorImg={Avatar3}
        />
        <button className=" w-full whitespace-nowrap rounded-lg border border-[#7F56D9] bg-[#7F56D9] px-5 py-3 font-semibold text-white  shadow-sm shadow-[#1018280D] md:hidden">
          View all posts
        </button>
      </div>
    </div>
  );
}

function BlogCard({ img, title, content, author, date, authorImg }) {
  return (
    <div className="flex flex-col gap-y-6">
      <img src={img} alt="blog img" className="w-full " />
      <div>
        <p className="mb-2 text-sm font-semibold text-[#6941C6]">Design</p>
        <h4 className="mb-2 text-2xl font-semibold">{title}</h4>
        <p className="text-[#475467]">{content}</p>
      </div>
      <div className="inline-flex items-center gap-x-3">
        <img src={authorImg} alt="avatar" className="h-10 w-10 rounded-full" />
        <span>
          <p className="text-sm font-semibold text-[#101828]">{author}</p>
          <p className="text-sm text-[#475467]">{date}</p>
        </span>
      </div>
    </div>
  );
}

export default BlogSection;
