const ImgSection = (props: { image: string; name: string }) => {
  return (
    <div className="md:flex-1 px-4">
      <div className="h-[460px] md:h-auto rounded-lg mb-4">
        <img
          className="w-full h-full hover:scale-105 transition duration-500 cursor-pointer object-contain"
          src={props.image}
          loading="lazy"
          alt={props.name}
        />
      </div>
    </div>
  );
};

export default ImgSection;
