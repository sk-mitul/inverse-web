import designIcon from './assets/img/designIcon.svg';
import uxIcon from './assets/img/uxIcon.svg';
import bulbIcon from './assets/img/bulbIcon.svg';
import mailIcon from './assets/img/mailIcon.svg';


const services = [
  { title: "Web Design", projects: "120 Projects", iconUrl: designIcon},
  { title: "Ui/Ux Design", projects: "241 Projects", iconUrl: uxIcon},
  { title: "Web Research", projects: "240 Projects", iconUrl: bulbIcon},
  { title: "Marketing", projects: "331 Projects", iconUrl: mailIcon},
];

const ServiceCard = ({ title, projects, iconUrl }) => {
  if (!iconUrl) return null;
  return (
    <div className="group flex flex-col items-center justify-center rounded-2xl border border-tomato/16 bg-white p-8 transition-all duration-300 hover:-translate-y-2">
      <div className="mb-7.5 rounded-xl">
        <img src={iconUrl} alt={title} className="text-[#FF4F4F] w-15 h-15" />
      </div>
      <h3 className="mb-2.25 text-[24px] font-bold text-chinese-black leading-8.5">{title}</h3>
      <p className="pb-4 font-rubik text-[16px] text-black-coral leading-6.5">
        {projects}
      </p>
    </div>
  );
};

const Service = () => {
  return (
    <section id="service" className="mx-auto max-w-322.5 lg:pt-70 xl:pt-100 my-7.5 lg:mb-22.5">
      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-4 px-3.75">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Service;