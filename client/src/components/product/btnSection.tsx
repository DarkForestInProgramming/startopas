const BtnSection = (props: { countInStock: number; addToCartHandler: any }) => {
  return (
    <div className="py-4">
      <p className="mb-2 font-semibold">
        {props.countInStock >= 1 ? "Sandėlyje" : "Neturime"}
      </p>
      <div className="text-center">
        <button
          className="w-full bg-gray-900 text-white py-4 px-4 font-bold hover:bg-gray-800"
          onClick={props.addToCartHandler}
        >
          Pridėti į Krepšelį
        </button>
      </div>
    </div>
  );
};

export default BtnSection;
