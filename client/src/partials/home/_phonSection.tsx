const PhoneSection = () => {
  return (
    <div className="flex justify-center items-center bg-gray-700 rounded-xl shadow-lg my-5">
      <div className="relative overflow-hidden py-5">
        <img
          className="object-cover w-[500px] shadow-sm"
          src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1699954037/Startopas/phones_banner.webp"
          loading="lazy"
          alt="Išmaniujų reklama"
        />
      </div>
      <div className="text-center md:pr-10 md:pl-10">
        <p className="uppercase text-white font-bold relative one">
          <span className="text-xl md:text-2xl font-thin shadow-lg">
            Išmanieji jau greitai!
          </span>
        </p>
      </div>
    </div>
  );
};

export default PhoneSection;
