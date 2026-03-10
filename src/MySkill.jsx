import React, { useState } from 'react';
import { ChevronRight, Landmark, Calendar, PenTool } from 'lucide-react';

const skills = [
  {
    id: 1,
    title: "Ui/Visual Design",
    count: "21 Done",
    description: "My work is driven by the belief that thoughtful design and strategic planning can empower brands strategic planning can empower brands",
    icon: <Landmark size={32} />,
  },
  {
    id: 2,
    title: "Ui/Visual Design",
    count: "21 Done",
    description: "In this portfolio, you'll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
    icon: <Calendar size={32} />,
  },
  {
    id: 3,
    title: "Motion Design",
    count: "20 Done",
    description: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs",
    icon: <PenTool size={32} />,
  }
];
function MySkill() {
  const [activeId, setActiveId] = useState(1); // Defaulting first item to active

  return (
    <section
      id="mySkill"
      className="bg-wild-sand lg:rounded-bl-[20px] lg:rounded-br-[20px] lg:pb-22.5"
    >
    <div className="mx-auto max-w-326.25 px-3.75 py-7.5">
      {/* Header Section */}
      <div className="mb-15">
        <span className="text-tomato font-rubik font-medium uppercase tracking-[1px] leading-7 text-[16px]">
          My Skill
        </span>
        <h2 className="text-[22px] md:text-[48px] font-bold text-chinese-black mt-[4.4px] leading-[30.8px] md:leading-15 max-w-2xl">
          Elevated Designs Personalized the best Experiences
        </h2>
      </div>

      {/* Skills List */}
      <div className="flex flex-col">
        {skills.map((skill) => (
          <div
            key={skill.id}
            onMouseEnter={() => setActiveId(skill.id)}
            className={`group relative flex flex-col lg:flex-row items-center justify-between px-5 pt-10.75 pb-8 transition-all duration-300 cursor-pointer border-b border-lavender-gray/50 last:border-0
              ${activeId === skill.id ? 'bg-tomato' : 'bg-transparent'}`}
          >
            {/* Left: Icon and Title */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-1/3 lg:mb-0">
              <div className="p-4 rounded-full border-2 transition-colors duration-300
                ">
                {skill.icon}
              </div>
              <div className="pb-1.25">
                <h3 className="text-[32px] font-bold leading-10.5 text-chinese-black">{skill.title}</h3>
                <p className={`text-[18px] text-center lg:text-start ${activeId === skill.id ? 'text-chinese-black' : 'text-chinese-black'}`}>
                  {skill.count}
                </p>
              </div>
            </div>

            {/* Middle: Description */}
            <div className="w-full lg:w-2/5 lg:mb-0">
              <p className={`text-[16px] leading-7.5 font-rubik text-center lg:text-left 
                ${activeId === skill.id ? 'text-chinese-black' : 'text-black-coral'}`}>
                {skill.description}
              </p>
            </div>

            {/* Right: Read More Link */}
            <div className="w-full lg:w-auto flex justify-center">
              <button className="flex items-center gap-2 text-chinese-black font-bold text-[16px] uppercase leading-8 tracking-[1.28px]">
                Read More <ChevronRight size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
export default MySkill;