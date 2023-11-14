const BtnSection = (props: {
  countInStock: number;
  addToCartHandler: (e: React.FormEvent) => void;
}) => {
  return (
    <div className="py-4">
      <p className="mb-2 font-medium">
        {props.countInStock >= 1 ? "Sandėlyje" : "Neturime"}
      </p>
      <div className="text-center">
        <button className="py-4 px-4 w-full" onClick={props.addToCartHandler}>
          Pridėti į Krepšelį
        </button>
      </div>
    </div>
  );
};

export default BtnSection;
