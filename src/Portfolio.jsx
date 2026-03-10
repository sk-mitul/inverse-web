import { ArrowUpRight } from 'lucide-react'; // Optional icon library

const projects = [
  {
    title: "My Journey as a Creator",
    category: "Development Coaches",
    image: "/src/assets/img/portfolio-img-1.png",
    offset: false
  },
  {
    title: "My Professional Portfolio",
    category: "Development Coaches",
    image: "/src/assets/img/portfolio-img-2.png",
    offset: true
  },
  {
    title: "My Portfolio of Innovation",
    category: "App Development",
    image: "/src/assets/img/portfolio-img-3.png",
    offset: false
  },
  {
    title: "A Portfolio of Creativity and Passion",
    category: "Business Development",
    image: "/src/assets/img/portfolio-img-4.png",
    offset: true
  }
];

const ProjectCard = ({ project }) => (
  <div className={`group flex flex-col gap-6 ${project.offset ? 'md:mt-24' : ''}`}>
    {/* Image Container */}
    <div className="relative overflow-hidden rounded-[20px] p-1.25 lg:p-5 border-2 border-lavender-gray transition-all duration-500">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-auto rounded-[20px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Text and Button Row */}
    <div className="flex justify-between items-center">
      <div className="space-y-2.5">
        <h3 className="text-[20px] font-bold leading-7.5 text-chinese-black group-hover:text-tomato transition-colors">
          {project.title}
        </h3>
        <p className="text-black-coral font-rubik text-[16px] leading-7.5">{project.category}</p>
      </div>
      
      {/* Icon Button */}
      <button className="flex items-center justify-center w-12 h-12 p-3 rounded-xl border-2 border-lavender-gray text-chinese-black group-hover:bg-tomato group-hover:text-white transition-all duration-300 shrink-0">
        <ArrowUpRight size={20} />
      </button>
    </div>
  </div>
);

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-wild-sand rounded-tl-[20px] rounded-tr-[20px] lg:pb-22.5"
    >
    <div className="mx-auto max-w-326.25 px-3.75 lg:pt-25 py-7.5">
      {/* Header */}
      <div className="mb-7.5 text-center">
        <span className="text-tomato font-rubik font-medium text-[16px] uppercase tracking-[1px] leading-7">
          Latest Portfolio
        </span>
        <h2 className="text-[22px] md:text-5xl font-bold text-chinese-black my-1.25 leading-[30.8px] md:leading-15">
          Transforming Ideas into Exceptional
        </h2>
        <p className="max-w-160 mx-auto text-black-coral font-rubik font-normal text-[16px] leading-6.5 px-3.25 pt-[4.49px]">
          Business consulting consultants provide expert advice and guida
          businesses to help them improve their performance, efficiency, and
          organizational{" "}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7.5 pt-7.5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      </div>
    </section>
  );
}
export default Portfolio;