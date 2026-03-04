import React, { useState } from 'react';
import { FaInstagram, FaFacebookF } from "react-icons/fa";
const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);

            const navLinks = [
                { name: 'Home', href: '#' },
                { name: 'About', href: '#' },
                { name: 'Services', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Project', href: '#' },
                { name: 'Contact', href: '#' },
            ];

  return (
    <nav className='bg-wild-sand'>
      <div className='container flex items-center justify-around'>
            <div className='flex items-center gap-10'>

                {/* Logo Section */}
                <div className="shrink-0 flex items-center">
                    <img src="./src/assets/img/logo.png"/>
                </div>

                {/* Desktop Menu - Hidden on mobile, flex on medium screens+ */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-chinese-black"
                    >
                        {link.name}
                    </a>
                    ))}
                </div>
            </div>

             {/* Social Icons (Visible on Desktop & Mobile) */}
          <div className="flex items-center space-x-3 md:space-x-5">
            {/* Instagram */}
            <button className="p-3 bg-[#F0F6FD] hover:bg-blue-600 rounded-full transition-colors cursor-pointer" aria-label="User Account">
              <FaInstagram />
             </button>

            {/* Facebook */}
            <button className="p-3 bg-[#F0F6FD] hover:bg-blue-600 rounded-full transition-colors cursor-pointer relative" aria-label="Shopping Cart">
             <FaFacebookF />
              {/* <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                3
              </span> */}
            </button> 
        </div>

        </div>

    {/* Mobile Menu Dropdown */}
      <div 
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Navbar
