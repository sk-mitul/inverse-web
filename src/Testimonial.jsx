import React from 'react';
import { Quote } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    text: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skillA personal portfolio is a curated collection of an individual's professional work.",
    name: "Cameron Williamson",
    role: "Ui/Ux Designer",
    image: "/comma-icon.svg"
  },
  {
    text: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skillA personal portfolio is a curated collection of an individual's professional work.",
    name: "Jane Cooper",
    role: "Product Manager",
    image: "/comma-icon.svg"
  },
  {
    text: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skillA personal portfolio is a curated collection of an individual's professional work.",
    name: "Robert Fox",
    role: "Frontend Developer",
    image: "/comma-icon.svg"
  }
];

const TestimonialCard = ({ quote, name, role, quoteImage }) => (
  <div className="relative group mx-2 my-10"> {/* Added margin for shadow visibility */}
    {/* The Red Offset Shadow */}
    <div className="card-effect" />
    
    {/* Card Content */}
    <div className="relative h-full p-9.5 bg-card-bg rounded-[20px] flex flex-col gap-6">
      {/* Comma Image replacement */}
      <div className="flex items-center justify-start transition-transform duration-500 group-hover:rotate-5">
        <img 
          src={quoteImage} 
          alt="Quote Icon" 
          className="h-full w-auto object-contain"
        />
      </div>

      <p className="text-small-text font-rubik leading-[30.6px] text-[18px] pt-10.75">
        "{quote}"
      </p>

      <div className="mt-4 text-left">
        <h4 className="font-bold text-[18px] leading-[20.5px]">{name}</h4>
        <p className="text-small-text text-sm font-rubik leading-[22.4px] mt-2.75">{role}</p>
      </div>
    </div>
  </div>
);

function Testimonial() {
  return (
    <section id="testimonial" className="mx-auto max-w-326.25 px-3.75 lg:pt-22.5 py-7.5 mb-7.5 lg:mb-22.5">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="text-tomato font-rubik font-medium uppercase tracking-[1px] leading-7 text-[16px]">
          Our Testimonial
        </span>
        <h2 className="text-[22px] md:text-[48px] font-bold mt-[4.4px] leading-[30.8px] md:leading-15">
          Enhancing Collaboration <br className="hidden md:block" />between Remote
        </h2>
      </div>
      {/* Swiper Container */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          // When window width is >= 768px (Tablet)
          768: {
            slidesPerView: 2,
          },
        }}
        className="pb-16" // Space for pagination dots
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard 
              quote={item.text} 
              name={item.name} 
              role={item.role} 
              quoteImage="/comma-icon.svg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Pagination (Tailwind v4 compatible) */}
      <style>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ef4444 !important;
          width: 30px;
          border-radius: 6px;
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  );
}
export default Testimonial;