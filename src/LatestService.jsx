import React from 'react';

const LatestService = () => {
  const services = [
    {
      id: "01.",
      title: "A Portfolio of Creativity",
      description: "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
    },
    {
      id: "02.",
      title: "My Portfolio of Innovation",
      description: "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses",
    },
    {
      id: "03.",
      title: "A Showcase of My Projects",
      description: "In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
    },
  ];

  return (
    <section
      id="latestService"
      className="mx-auto max-w-326.25 px-3.75 py-7.5 lg:pt-0 lg:mb-22.5"
    >
      <div className="mb-7.5 text-center">
        <span className="text-tomato font-rubik font-medium text-[16px] uppercase tracking-[1px] leading-7">
          Latest Service
        </span>
        <h2 className="text-[22px] md:text-5xl font-bold text-chinese-black my-1.25 leading-[30.8px] md:leading-15">
          Inspiring The World One Project
        </h2>
        <p className="max-w-160 mx-auto text-black-coral font-rubik font-normal text-[16px] leading-6.5 px-[2.97px] pt-[4.5px]">
          Business consulting consultants provide expert advice and guida
          businesses to help them improve their performance, efficiency, and
          organizational
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-21.25 items-center">
        {/* Left Content: Services List */}
        <div className="flex flex-col gap-5 pt-7.5 xl:pt-0 lg:px-3.75">
            {services.map((service) => (
              <div key={service.id} className="group relative">
                {/* The Accent Border (Bottom & Right) */}
                <div className="card-effect" />

                {/* The Card Body */}
                <div className="relative h-full bg-wild-sand px-3.25 md:px-9.5 py-7 md:py-8.5 rounded-[20px]">
                  <div className="flex flex-col md:gap-5.5">
                    <h3 className="text-[24px] font-bold text-chinese-black leading-7.5">
                      <span className="mr-3.75">{service.id}</span>{" "}
                      {service.title}
                    </h3>
                    <p className="text-black-coral font-rubik text-[16px] leading-6.5">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Right Content: Image */}
        <div className="flex justify-center pt-7.5">
          <img
            src="/src/assets/img/latest-user-image.png"
            alt="Consultant"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestService;