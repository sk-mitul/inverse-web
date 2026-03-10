import React from 'react';

const skillsData = {
  design: [
    { name: 'PHOTOSHOT', level: 100 },
    { name: 'FIGMA', level: 95 },
    { name: 'ADOBE XD', level: 60 },
    { name: 'ADOBE ILLUSTRATOR', level: 70 },
  ],
  development: [
    { name: 'PHOTOSHOT', level: 100 },
    { name: 'FIGMA', level: 95 },
    { name: 'ADOBE XD', level: 60 },
    { name: 'ADOBE ILLUSTRATOR', level: 70 },
  ]
};

const SkillItem = ({ name, level }) => (
  <div className="mt-7.5">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-rubik tracking-[1px] leading-[17.5px]">{name}</span>
      <span className="text-sm font-rubik leading-[24.5px]">{level}%</span>
    </div>
    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
      <div 
        className="bg-tomato h-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

function Skill() {
  return (
    <section id="skill" className="mx-auto max-w-326.25 px-3.75 py-7.5 lg:mb-22.5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 text-chinese-black">
        
        {/* Design Column */}
        <div>
          <h2 className="font-bold text-[32px] leading-8">Design Skill</h2>
          {skillsData.design.map((skill, index) => (
            <SkillItem key={index} name={skill.name} level={skill.level} />
          ))}
        </div>

        {/* Development Column */}
        <div>
          <h2 className="font-bold text-[32px] leading-8">Development Skill</h2>
          {skillsData.development.map((skill, index) => (
            <SkillItem key={index} name={skill.name} level={skill.level} />
          ))}
        </div>

      </div>
    </section>
  );
}
export default Skill


