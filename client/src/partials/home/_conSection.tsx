const ConsolesSection = () => {
  return (
    <div className="flex justify-center items-center bg-gray-700 rounded-xl shadow-lg">
      <div className="relative overflow-hidden py-5">
        <img
          className="object-cover w-[500px] h-auto shadow-sm"
          src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1699953086/Startopas/consoles_banner.webp"
          loading="lazy"
          alt="Konsolių reklama"
        />
      </div>
      <div className="text-center mt-5 lg:pr-10">
        <p className="mt-6 uppercase text-white font-bold relative one">
          <span className="text-3xl md:text-4xl font-light shadow-lg">
            Retro konsolės jau čia!
          </span>
        </p>
      </div>
    </div>
  );
};

export default ConsolesSection;
