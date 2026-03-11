import React from 'react';

const experiences = [
  {
    name: "Fatima Asrafy",
    role: "UI/UX Designer",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatu Duis aute irure"
  },
  {
    name: "Fatima Asrafy",
    role: "UI/UX Designer",
    description: "Interested in working together? Let's bring your ideas to life! Contact me, and let's start building something."
  }
];

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-326.25 px-3.75 py-7.5 lg:mb-22.5">
      <div className="flex flex-col lg:flex-row items-start gap-7.5">
        
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-[20px] overflow-hidden">
            <img 
              src="/experience-img.png" 
              alt="Workspace" 
              className="w-full h-auto object-cover aspect-4/3 lg:aspect-auto"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 px-3.75 xl:pl-10 xl:pr-34.5">
          <h2 className="font-bold text-[32px] leading-10.5 text-chinese-black">Experiences</h2>
          
          <div className="mt-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group mb-7.5">
                <span className="text-tomato font-rubik font-medium text-[16px] lowercase leading-7 block">
                  experience
                </span>
                <h3 className="text-[24px] font-bold leading-7.5 text-chinese-black">
                  {exp.name}
                </h3>
                <p className="text-chinese-black font-medium text-[18px] leading-7 pt-1.5">
                  {exp.role}
                </p>
                <p className="text-black-coral font-rubik text-[16px] leading-7.5 pt-4">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
export default Experience;