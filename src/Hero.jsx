import React, { useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import { X, Phone, Mail, MapPin } from 'lucide-react'; // Added for sidebar icons
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Hero = () => {
  // 1. State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 2. Effect to close sidebar on 'Escape' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSidebarOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="hero" className="max-w-322.5 mx-auto lg:flex lg:items-center lg:justify-between lg:relative">
      
      {/* 3. Messenger Button: Replaced static img with button to trigger sidebar */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setIsSidebarOpen(true);
        }}
        className="fixed bottom-6 right-5 z-50 transition-transform active:scale-90 cursor-pointer"
      >
        <img src="/messenger.png" className="w-10" alt="messenger toggle" />
      </button>

      {/* 4. Backdrop & Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)} // Close when clicking anywhere on site
        >
          {/* Sidebar Panel */}
          <div 
            className={`absolute top-0 right-0 h-full w-full sm:w-112.5 bg-[#f8f8f8] shadow-2xl transition-transform duration-500 p-8 overflow-y-auto ${
              isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside panel
          >
            {/* Sidebar Header with Close Button */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-tomato rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full" />
                </div>
                <span className="text-2xl font-black text-gray-900">Reeni</span>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-tomato hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Sidebar Content (Profile & Details) */}
            <div className="rounded-2xl overflow-hidden mb-10">
              <img src="/hero-img.png" alt="Profile" className="w-full bg-gray-200" />
            </div>
            
            <h2 className="text-2xl font-black text-gray-900 leading-tight mb-6">
              Freelancer delivering exceptional solutions.
            </h2>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-red-500">Call Now</p>
                  <p className="font-bold">+92 (8800) - 98670</p>
                </div>
              </div>
              {/* Add more contact rows (Mail, Address) here following the same pattern */}
            </div>
          </div>
        </div>
      )}

      {/* --- Existing Hero Layout --- */}
      <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-7 lg:order-2 z-10">
        <img src="/hero-img.png" alt="hero-image" className="max-w-full h-auto mx-auto object-contain"/>
      </div>
      <h1 className="stroke-front hidden lg:block absolute font-bold uppercase text-[150px] leading-[172.5px] top-150 xl:top-180 left-40 xl:left-65 z-20">web design</h1>
      <h1 className="stroke-back hidden lg:block absolute font-bold uppercase text-[170px] xl:text-[212.9px] leading-[244.8px] top-130 xl:top-150 left-25 xl:left-35 z-0">web design</h1>
      
      <div className="flex flex-col pb-7.5 lg:pb-0 px-3.75 pt-7.5 lg:pt-60 lg:order-1 relative z-20 items-start lg:w-1/3">
        <h3 className="text-chinese-black text-[20px] lg:text-[28px] font-bold uppercase leading-9.5">
          hello i'm
        </h3>
        <h1 className="text-chinese-black text-[38px] lg:text-[70px] xl:text-[90px] font-bold capitalize leading-12 lg:leading-[103.5px] pb-5">
          brooklyn simmons
        </h1>
        <button className="btn group">
          <span>view portfolio</span>
          <IoArrowForward
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      <div className="flex flex-col pb-7.5 px-3.75 lg:order-3 relative z-20 lg:w-1/4 mt-12 lg:mt-0 lg:pt-50">
        <h4 className="text-chinese-black text-[16px] font-rubik capitalize leading-7.5 pb-1 lg:pb-5">
          about me
        </h4>
        <h4 className="text-black-coral text-[16px] font-rubik leading-7.5 pb-10 lg:pb-10">
          A personal <span className="text-tomato">portfolio</span> is a
          collection of to your work, that is achievements, and a skills that{" "}
          <span className="text-tomato">web design</span> highlights in your
        </h4>
        <h4 className="text-chinese-black text-[16px] font-rubik leading-7.5 pb-2.5">
          Follow me on
        </h4>
        <div className="flex items-center gap-1.5">
          {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
            (Icon, i) => (
              <button
                key={i}
                className="p-3 bg-lavender-gray hover:bg-tomato hover:text-white rounded-full transition-all cursor-pointer"
              >
                <Icon size={14} />
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;