const Experience = () => {
  const stats = [
    { number: "20K+", label: "Our Project Complete" },
    { number: "10K+", label: "Our Natural Products" },
    { number: "200+", label: "Clients Reviews" },
    { number: "1,000+", label: "Our Satisfied Clients" },
  ];

  return (
    <section
      id="experience"
      className="mx-auto max-w-326.25 px-3.75 py-7.5 lg:mb-22.5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7.5">
        {/* Left Main Experience Card */}
        <div className="md:flex flex-col md:items-center lg:items-start justify-between lg:justify-start rounded-[20px] bg-wild-sand px-5 py-7.5 xl:pt-9 xl:px-13 lg:col-span-6">
          <div className="flex flex-col md:flex-row md:gap-11 lg:gap-2 xl:gap-11 md:items-center">
            <h2 className="text-[100px] md:text-[120px] xl:text-[160px] font-rubik font-bold text-tomato pe-5.25">
              25
            </h2>
            <div className="flex md:flex-col pb-3 md:pb-0 text-[26px] md:text-[30px] xl:text-[48px] font-bold leading-[33.8px] xl:leading-[62.6px] lg:gap-2 text-chinese-black">
              <span>Years Of</span>
              <span className="ms-1 md:ms-0">Experience</span>
            </div>
          </div>

          <p className="md:max-w-129.5 font-rubik font-normal text-[16px] leading-6.5 text-chinese-black">
            Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency
          </p>
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center rounded-[20px] bg-wild-sand py-8.5  border-r-2 border-b-2 border-tomato transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* The subtle red right-border accent from the image */}
              <div className="absolute" />

              <span className="text-[48px] font-bold font-inter leading-15 text-chinese-black">
                {stat.number}
              </span>
              <span className="mt-2 text-[16px] font-rubik text-black-coral leading-7.5 tracking-0">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
