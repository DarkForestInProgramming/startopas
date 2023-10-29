const QtySection = (props: {
  qty: number;
  setQty: (newQty: number) => void;
  countInStock: number;
}) => {
  return (
    <div className="flex py-4">
      <div className="mr-4">
        <span className="text-md font-bold text-gray-600">Kiekis:</span>
        <span>
          <select
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-3 px-4 mt-2"
            name="qty"
            value={props.qty}
            onChange={(e) => props.setQty(Number(e.target.value))}
          >
            {[...Array(props.countInStock).keys()].map((x: number) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </span>
      </div>
    </div>
  );
};

export default QtySection;
