import { useState, useRef, useEffect } from "react";
import { ChevronDown } from 'lucide-react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";

// Sub-component for Dropdowns
const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-chinese-black font-bold text-[16px] leading-7 px-2 py-2.5 cursor-pointer"
      >
        {title}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-1 w-48 bg-white shadow-xl rounded-lg border border-gray-100 z-50 transition-all duration-200 
          ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}
      >
        <div className="py-2">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-wild-sand hover:text-tomato transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data structure to handle both simple links and dropdowns
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { 
      name: "Services", 
      dropdown: [
        { label: "Web Design", href: "#" },
        { label: "App Development", href: "#" },
        { label: "Digital Marketing", href: "#" },
      ] 
    },
    { 
      name: "Blog", 
      dropdown: [
        { label: "Tech News", href: "#" },
        { label: "Tutorials", href: "#" },
      ] 
    },
    { 
      name: "Project", 
      dropdown: [
        { label: "Portfolio", href: "#" },
        { label: "Case Studies", href: "#" },
      ] 
    },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-wild-sand shadow-lg shadow-wild-sand/50 relative">
      <div className="max-w-326.25 mx-auto flex items-center justify-between py-3.75 px-5">        
        {/* Logo Section */}
        <div className="shrink-0 flex items-center">
          <img src="/logo.png" alt="Logo" className="" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            link.dropdown ? (
              <NavDropdown key={link.name} title={link.name} items={link.dropdown} />
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-chinese-black font-bold text-[16px] leading-7 px-3 py-2.5 hover:text-tomato transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
        
        <div className="flex gap-6.25 items-center">
          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-2">
            {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, i) => (
              <button
                key={i}
                className="p-3 bg-lavender-gray hover:bg-tomato hover:text-white rounded-full transition-all cursor-pointer"
              >
                <Icon size={14} />
              </button>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white bg-tomato rounded-full cursor-pointer focus:outline-none"
            >
              {isMobileMenuOpen ? <RiCloseFill size={21} /> : <RiMenu3Line size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden bg-white border-t border-gray-100 absolute w-full left-0 z-50`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <div className="font-bold text-chinese-black px-3 py-2 border-b border-gray-50">{link.name}</div>
                  {link.dropdown.map((sub) => (
                    <a key={sub.label} href={sub.href} className="block pl-8 pr-3 py-2 text-black-coral text-sm">{sub.label}</a>
                  ))}
                </>
              ) : (
                <a
                  href={link.href}
                  className="block text-chinese-black font-bold px-3 py-2 rounded-md hover:bg-wild-sand"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;