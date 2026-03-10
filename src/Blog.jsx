import React from 'react';
import { User, Calendar, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    image: "/src/assets/img/blog-img-1.png", 
    author: "Mesbah",
    date: "April 10",
    title: "Let's bring your ideas to life! Contact me, and let's",
  },
  {
    id: 2,
    image: "/src/assets/img/blog-img-2.png",
    author: "Mesbah",
    date: "April 10",
    title: "Inspiring the World, One Project at a Time for the man",
  },
  {
    id: 3,
    image: "/src/assets/img/blog-img-3.png",
    author: "Mesbah",
    date: "April 10",
    title: "Each one showcases my approach and dedication man",
  }
];

const BlogCard = ({ post }) => (
  <div className="group bg-white rounded-[20px] border-2 border-lavender-gray transition-all duration-300 hover:shadow-xl">
    {/* Image Container with Badges */}
    <div className="relative overflow-hidden rounded-[20px]">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full aspect-4/3 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Meta Badge Overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
        <div className="flex items-center gap-1.5 text-gray-900 text-[10px] md:text-xs font-bold border-r border-gray-300 pr-3">
          <User size={14} className="text-chinese-black font-rubik text-sm" />
          {post.author}
        </div>
        <div className="flex items-center gap-1.5 text-chinese-black text-[10px] md:text-xs font-bold">
          <Calendar size={14} className="text-chinese-black" />
          {post.date}
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div className="p-5 space-y-4">
      <h3 className="text-[24px] font-bold text-chinese-black leading-7.5 min-h-14 group-hover:text-tomato transition-colors">
        {post.title}
      </h3>
      
      <button className="flex items-center gap-3 text-[13px] leading-6.75 font-rubik uppercase tracking-[0.5px] text-black-coral group-hover:text-red-500 transition-colors">
        Read More <ChevronRight size={14} strokeWidth={3} />
      </button>
    </div>
  </div>
);

function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-326.25 px-3.75 py-7.5 mb-7.5 lg:mb-22.5">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="text-tomato font-rubik font-medium uppercase tracking-[1px] leading-7 text-[16px]">
          Blog and news
        </span>
        <h2 className="text-[22px] md:text-[48px] font-bold text-chinese-black mt-[4.4px] leading-[30.8px] md:leading-15">
          Elevating Personal Branding the <br className="hidden md:block" />through Powerful Portfolios
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-7.5">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
export default Blog;