import { ProductInterface } from "../../../services/interfaces/productInterfaces";

const OrderTable = (props: { order: any }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Pirkiniai:</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-1">Nuotrauka</th>
            <th className="border border-gray-300 p-1">Pavadinimas</th>
            <th className="border border-gray-300 p-1">Kaina</th>
          </tr>
        </thead>
        <tbody>
          {props.order.orderItems.map((item: ProductInterface, idx: number) => (
            <tr key={idx}>
              <td className="border border-gray-300 p-2">
                <img
                  className="w-34 h-24"
                  src={item.image}
                  loading="lazy"
                  alt={item.name}
                />
              </td>
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">
                {item.qty} x {item.price}€
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
