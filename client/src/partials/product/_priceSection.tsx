const PriceSection = (props: { price: number }) => {
  return (
    <div className="flex py-4">
      <div className="mr-4">
        <span className="text-2xl font-medium text-gray-600">
          €{props.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default PriceSection;
