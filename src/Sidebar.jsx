import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative font-sans">
      {/* Floating Message Button - Triggers Sidebar */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent immediate closing
          setIsOpen(true);
        }}
        className="fixed bottom-10 right-10 z-40 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-red-600 transition-all active:scale-95"
      >
        <MessageCircle size={30} fill="currentColor" />
      </button>

      {/* Backdrop: This handles "Click anywhere to hide" */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          {/* Sidebar Panel */}
          <div 
            className={`absolute top-0 right-0 h-full w-full sm:w-[450px] bg-[#f8f8f8] shadow-2xl transition-transform duration-500 ease-in-out p-8 overflow-y-auto
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full" />
                </div>
                <span className="text-2xl font-black tracking-tight text-gray-900">Reeni</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Profile Image */}
            <div className="rounded-2xl overflow-hidden mb-10 border border-gray-200">
              <img 
                src="/profile-working.jpg" 
                alt="Freelancer working" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Freelancer delivering exceptional Webflow, and Next.js solutions.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                I am a skilled freelancer specializing in Webflow development, Figma design, and Next.js projects. I deliver creative, dynamic, and user-centric web solutions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1">Call Now</p>
                  <p className="text-gray-900 font-bold">+92 (8800) - 98670</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1">Mail Us</p>
                  <p className="text-gray-900 font-bold">example@info.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1">My Address</p>
                  <p className="text-gray-900 font-bold">66 BROKLYANT, NEW YORK 3269</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
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
        </div>
      )}
    </div>
  );
};

export default Sidebar;