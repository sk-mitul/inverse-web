import React from 'react';

const educationData = [
  {
    role: "Trainer Marketing",
    years: "2005-2009",
    description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio."
  },
  {
    role: "Assistant Director",
    years: "2010-2014",
    description: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs."
  },
  {
    role: "Design Assistant",
    years: "2008-2012",
    description: "I've had the privilege of working with various clients, from startups to established companies, helping bring their visions to life."
  },
  {
    role: "Design Assistant",
    years: "2008-2012",
    description: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs a personal."
  }
];

const EducationCard = ({ role, years, description }) => (
  <div className="relative group">
    {/* The Red Bottom-Right Shadow Effect */}
    <div className="card-effect" />
    
    {/* The Main Card Content */}
    <div className="relative h-full px-5 lg:px-10 py-7.5 lg:py-12.5 bg-card-bg rounded-[20px] flex flex-col gap-1.25">
      <div className="space-y-1">
        <h3 className="text-[16px] font-rubik leading-6.5">{role}</h3>
        <p className="font-bold text-[18px] leading-7">{years}</p>
      </div>
      <p className="text-small-text font-rubik leading-7.5 text-[16px] pt-0.75 lg:pt-3.25">
        {description}
      </p>
    </div>
  </div>
);

function Education() {
  return (
    <section id="education" className="mx-auto max-w-326.25 px-3.75 lg:pt-0 py-7.5 mb-3.25">
      <h2 className="font-bold text-[32px] leading-10.5">Education</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 mt-7.5">
        {educationData.map((item, index) => (
          <EducationCard 
            key={index} 
            role={item.role} 
            years={item.years} 
            description={item.description} 
          />
        ))}
      </div>
    </section>
  );
}
export default Education