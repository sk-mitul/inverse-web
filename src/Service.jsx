import { Palette, Spline, Search, Mail } from 'lucide-react';

const services = [
  { title: "Web Design", projects: "120 Projects", Icon: Palette },
  { title: "Ui/Ux Design", projects: "241 Projects", Icon: Spline },
  { title: "Web Research", projects: "240 Projects", Icon: Search },
  { title: "Marketing", projects: "331 Projects", Icon: Mail },
];

const ServiceCard = ({ title, projects, Icon }) => {
  if (!Icon) return null;
  return (
    <div className="group flex flex-col items-center justify-center rounded-2xl border border-tomato/16 bg-white p-8 transition-all duration-300 hover:-translate-y-2">
      <div className="mb-6 rounded-xl p-4">
        <Icon size={40} strokeWidth={1.5} className="text-[#FF4F4F]" />
      </div>
      <h3 className="mb-2.25 text-[24px] font-bold text-chinese-black leading-8.5">{title}</h3>
      <p className="font-rubik text-[16px] text-black-coral leading-6.5">
        {projects}
      </p>
    </div>
  );
};

const Service = () => {
  return (
    <>
    <div className="mx-auto max-w-322.5 mt-7.5 lg:pt-70 xl:pt-100">
      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-4 px-3.75 lg:px-0">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Service;