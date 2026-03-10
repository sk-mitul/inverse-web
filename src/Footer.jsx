import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-wild-sand pt-7.5">
      <div className="mx-auto max-w-326.25 px-3.75 lg:pt-25 py-7.5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-15 lg:mb-30">
          {/* Column 1: Brand & Newsletter */}
          <div className="">
            {/* Logo Section */}
            <div className="shrink-0 flex items-center">
              <img src="./src/assets/img/logo.png" alt="Logo" className="" />
            </div>

            <h2 className="text-[40px] font-bold text-chinese-black leading-11.25 pt-5.5">
              Get Ready <span className="font-normal">To{" "}
              <br />
              Create Great</span>
            </h2>

            <div className="relative mt-10 max-w-sm font-rubik text-[16px]">
              <input
                type="email"
                placeholder="Email Adress"
                className="w-full bg-transparent border-b border-gray-300 py-4 outline-none focus:border-red-500 transition-colors text-black-coral"
              />
              <Mail
                className="absolute right-0 top-4 text-chinese-black"
                size={20}
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-20">
            <h3 className="text-[24px] font-bold text-chinese-black mb-10">Quick Link</h3>
            <ul className="space-y-4">
              {[
                "About Me",
                "Service",
                "Contact Us",
                "Blog Post",
                "Pricing",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-chinese-black font-rubik text-[16px] hover:text-tomato transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-10">
            <h3 className="text-[24px] font-bold text-chinese-black mb-10">Contact</h3>
            <div className="space-y-3.75">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-lavender-gray flex items-center justify-center text-gray-900 group-hover:bg-tomato group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="font-rubik leading-7.5 text-[16px]">
                  nafiz125@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-lavender-gray flex items-center justify-center text-gray-900 group-hover:bg-tomato group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <span className="font-rubik leading-7.5 text-[16px]">
                  3891 Ranchview Dr. Richardson
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-lavender-gray flex items-center justify-center text-gray-900 group-hover:bg-tomato group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="font-rubik leading-7.5 text-[16px]">01245789321</span>
              </div>
            </div>

            
              <div className="flex items-center space-x-2">
                          {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, i) => (
                            <button
                              key={i}
                              className="p-3 bg-lavender-gray hover:bg-tomato hover:text-white rounded-full transition-all cursor-pointer"
                            >
                              <Icon size={14} />
                            </button>
                          ))}
                        </div>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-lavender-gray flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-rubik text-black-coral leading-7.5">
          <p>© InversWeb 2026 | All Rights Reserved</p>
          <div className="flex gap-4 md:gap-8 text-chinese-black leading-7.5">
            <a href="#" className="hover:text-tomato transition-colors">
              Trams & Condition
            </a>
            <a href="#" className="hover:text-tomato transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-tomato transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;