import { Link } from "react-router-dom";
import { OrderInterface } from "../../../services/interfaces/orderInterfaces";
import Loader from "../loader";

const ProfileTable = (props: {
  isLoading: boolean;
  orders: OrderInterface[];
}) => {
  return (
    <div className="md:w-1/2 md:mt-5 md:ml-40 lg:ml-48 items-center justify-center text-center ">
      <h2 className="text-xl mb-8 font-semibold">Mano Užsakymai</h2>
      {props.isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-sm md:text-base">
            <thead className="border-b-[1px]">
              <tr>
                <th className="w-1/4 md:w-1/6">ID</th>
                <th className="w-1/4 md:w-1/6">DATA</th>
                <th className="w-1/4 md:w-1/6">BENDRAI</th>
                <th className="w-1/4 md:w-1/6">SUMOKĖTA</th>
                <th className="w-1/4 md:w-1/6">PRISTATYTA</th>
                <th className="w-1/4 md:w-1/6"></th>
              </tr>
            </thead>
            <tbody>
              {props.orders.map((order: OrderInterface) => (
                <tr key={order._id}>
                  <td className="w-1/4 md:w-1/6 py-4">{order._id.slice(-4)}</td>
                  <td className="w-1/4 md:w-1/6">
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td className="w-1/4 md:w-1/6">{order.totalPrice}€</td>
                  <td className="w-1/4 md:w-1/6">
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <p className="text-red-600 text-lg">X</p>
                    )}
                  </td>
                  <td className="w-1/4 md:w-1/6">
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <p className="text-red-600 text-lg">X</p>
                    )}
                  </td>
                  <td className="w-1/4 md:w-1/6">
                    <Link to={`/order/${order._id}`}>
                      <button className="py-1 px-2 bg-gray-900 text-white hover:bg-gray-800 font-medium rounded text-sm text-center shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                        Plačiau
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProfileTable;
