const ConsolesSection = () => {
  return (
    <div className="flex justify-center items-center bg-gray-700">
      <div className="relative overflow-hidden py-5">
        <img
          src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1699872432/Startopas/consoles_banner.png"
          alt="Konsolės"
          className="object-cover w-[500px] h-auto shadow-sm"
          loading="lazy"
        />
      </div>
      <div className="text-center mt-5 lg:pr-10">
        <p className="mt-6 uppercase text-white font-bold relative one">
          <span className="text-3xl md:text-4xl">Retro konsolės jau čia!</span>
        </p>
      </div>
    </div>
  );
};

export default ConsolesSection;
