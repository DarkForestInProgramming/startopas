import { Link } from "react-router-dom";
import { OrderInterface } from "../../../services/interfaces/orderInterfaces";

const AdminTable = (props: { orders: OrderInterface[] }) => {
  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="w-full border-gray-300">
          <thead className="border-b-[1px]">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">VARTOTOJAS</th>
              <th className="p-2">DATA</th>
              <th className="p-2">BENDRAI</th>
              <th className="p-2">SUMOKĖTA</th>
              <th className="p-2">PRISTATYTA</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {props.orders.map((order: OrderInterface) => (
              <tr key={order._id}>
                <td className="p-2 md:w-1/6">{order._id.slice(-4)}</td>
                <td className="p-2 md:w-1/6">
                  {order.user && order.user.name}
                </td>
                <td className="p-2 md:w-1/6">
                  {order.createdAt.substring(0, 10)}
                </td>
                <td className="p-2 md:w-1/6">{order.totalPrice}€</td>
                <td className="p-2 md:w-1/6">
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <p className="text-lg text-red-600">X</p>
                  )}
                </td>
                <td className="p-2 md:w-1/6">
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <p className="text-lg text-red-600">X</p>
                  )}
                </td>
                <td className="p-2 md:w-1/6">
                  <Link to={`/order/${order._id}`}>
                    <button className="py-1 px-2">Plačiau</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
