import { useTheme } from "./provider/ThemeProvider";
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
  const { theme } = useTheme(); // Added 'theme' from context
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
    <section
      id="hero"
      className="max-w-322.5 mx-auto lg:flex lg:items-center lg:justify-between lg:relative"
    >
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
          className="fixed inset-0 z-60 bg-black/5 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)} // Close when clicking anywhere on site
        >
          {/* Sidebar Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-full sm:w-112.5 shadow-2xl bg-card-bg transition-transform duration-500 overflow-y-auto ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside panel
          >
            {/* Sidebar Header with Close Button */}
            <div className="flex justify-between items-center mb-10 bg-[#ededed] dark:bg-chinese-black px-5 py-4">
              <div className="shrink-0 flex items-center">
              <img
                src={theme === "dark" ? "/logo-dark.png" : "/logo.png"}
                alt="Logo"
                className="h-10 w-auto transition-opacity duration-300"
              />
            </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center hover:bg-tomato hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Sidebar Content (Profile & Details) */}
            <div className="overflow-hidden m-7.5">
              <img src="/sidebar-img.png" alt="Profile" className="w-full" />
            </div>

            <h2 className="text-[20px] font-rubik font-bold leading-7 mx-7.5 mb-[19.4px]">
              Freelancer delivering exceptional Webflow, and Next.js solutions.
            </h2>

            <p className="text-[16px] font-rubik text-small-text leading-[25.6px] mx-7.5 mb-9.75">
              I am a skilled freelancer specializing in Webflow development,
              Figma design, and Next.js projects. I deliver creative, dynamic,
              and user-centric web solutions.
            </p>

            {/* Contact Details */}
            <div className="space-y-4.75 mx-7.5">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-[5px] border-2 border-lavender-gray dark:border-white/9 flex items-center justify-center dark:text-white group-hover:bg-tomato group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold uppercase leading-[26.3px] text-tomato">
                    Call Now
                  </p>
                  <p className="font-rubik text-[16px] leading-7">
                    +92 (8800) - 98670
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-[5px] border-2 border-lavender-gray dark:border-white/9 flex items-center justify-center dark:text-white group-hover:bg-tomato group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold uppercase leading-[26.3px] text-tomato">
                    Mail Us
                  </p>
                  <p className="font-rubik text-[16px] leading-7">
                    example@info.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-[5px] border-2 border-lavender-gray dark:border-white/9 flex items-center justify-center dark:text-white group-hover:bg-tomato group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold uppercase leading-[26.3px] text-tomato">
                    My Address
                  </p>
                  <p className="font-rubik text-[16px] leading-7">
                    66 Broklyant, New York 3269
                  </p>
                </div>
              </div>
            </div>

            <div className="m-7.5">
            <p className="font-medium text-[16px] leading-7 tracking-[0.5px] uppercase pb-3.75">Find with me</p>
            <div className="flex items-center gap-1.5">
              {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="p-3 bg-[#0a0a0a]/6 dark:bg-charcoal hover:bg-tomato hover:text-white rounded-full transition-all cursor-pointer"
                  >
                    <Icon size={14} />
                  </button>
                ),
              )}
            </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Existing Hero Layout --- */}
      <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-7 lg:order-2 z-10">
        <img
          src="/hero-img.png"
          alt="hero-image"
          className="max-w-full h-auto mx-auto object-contain"
        />
        <div class="absolute inset-0 opacity-0 dark:opacity-80 bg-linear-to-t from-[#080808] to-transparent z-20"></div>
      </div>
      <h1 className="stroke-front hidden lg:block absolute font-bold uppercase text-[150px] leading-[172.5px] top-150 xl:top-180 left-40 xl:left-65 z-30">
        web design
      </h1>
      <h1 className="stroke-back hidden lg:block absolute font-bold uppercase text-[170px] xl:text-[212.9px] leading-[244.8px] top-130 xl:top-150 left-25 xl:left-35 z-0">
        web design
      </h1>

      <div className="flex flex-col pb-7.5 lg:pb-0 px-3.75 pt-7.5 lg:pt-60 lg:order-1 relative z-20 items-start lg:w-1/3">
        <h3 className="text-[20px] lg:text-[28px] font-bold uppercase leading-9.5">
          hello i'm
        </h3>
        <h1 className="text-[38px] lg:text-[70px] xl:text-[90px] font-bold capitalize leading-12 lg:leading-[103.5px] pb-5">
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
        <h4 className="text-[16px] font-rubik capitalize leading-7.5 pb-1 lg:pb-5">
          about me
        </h4>
        <h4 className="text-small-text text-[16px] font-rubik leading-7.5 pb-10 lg:pb-10">
          A personal <span className="text-tomato">portfolio</span> is a
          collection of to your work, that is achievements, and a skills that{" "}
          <span className="text-tomato">web design</span> highlights in your
        </h4>
        <h4 className="text-[16px] font-rubik leading-7.5 pb-2.5">
          Follow me on
        </h4>
        <div className="flex items-center gap-1.5">
          {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
            (Icon, i) => (
              <button
                key={i}
                className="p-3 bg-[#0a0a0a]/6 dark:bg-chinese-black hover:bg-tomato hover:text-white rounded-full transition-all cursor-pointer"
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