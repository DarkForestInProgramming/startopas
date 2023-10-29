const DescSection = (props: { description: string }) => {
  return (
    <div className="py-4">
      <span className="font-bold text-gray-700">Prekės Aprašymas:</span>
      <p className="text-gray-600 mt-2">{props.description}</p>
    </div>
  );
};

export default DescSection;
