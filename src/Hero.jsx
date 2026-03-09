import { IoArrowForward } from "react-icons/io5";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="max-w-322.5 mx-auto lg:flex lg:items-center lg:justify-between lg:relative">
      <img src="/src/assets/img/messenger.png" className="fixed w-10 bottom-6 right-5 z-50"/>
      <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-7 lg:order-2 z-10">
        <img src="/src/assets/img/hero-img.png" alt="hero-image" className="max-w-full h-auto mx-auto object-contain"/>
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
    </section>
  );
};

export default Hero
