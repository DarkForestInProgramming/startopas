import { useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Loader from "../../components/loader";
import AppLayout from "../../layouts/main";
import { ProductInterface } from "../../services/interfaces/productInterfaces";
import { useOrderHandlers } from "../../services/handlers/orderHandlers";

const OrderView = () => {
  const {
    errorPayPal,
    loadingPayPal,
    paypal,
    order,
    paypalDispatch,
    isLoading,
    isPending,
    loadPayPalScript,
    loadingPay,
    createOrder,
    onApprove,
    onError,
  } = useOrderHandlers();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      loadPayPalScript();
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPayPalScript();
        }
      }
    }
  }, [order, paypal, paypalDispatch, loadingPayPal, errorPayPal]);

  return (
    <AppLayout header="Užsakymas">
      {isLoading ? (
        <div className="w-full flex flex-col pt-20 lg:pt-36 ">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="w-full md:py-8 py-4">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold">Užsakymas: {order._id}</h1>
            {/* User Details */}
            <div className="mt-5">
              <h2 className="text-xl font-semibold">Pirkėjo Informacija:</h2>
              <p className="mt-4">
                <span className="font-bold">Vartotojo Vardas: </span>
                {order.user.name}
              </p>
              <p className="mt-4">
                <span className="font-bold">El. Paštas: </span>
                {order.user.email}
              </p>
              <p className="mt-4 flex">
                <span className="font-bold">Pristatymas:&nbsp;</span>
                {order.isDelivered ? (
                  <span className="text-green-600">
                    Delivered on {order.deliveredAt}
                  </span>
                ) : (
                  <span className="text-red-600">Nepristatyta</span>
                )}
              </p>
            </div>
            <hr className="my-4" />
            {/* Payment Method */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Apmokėjimo Būdas:</h2>
              <p className="mt-4 flex">
                <span className="font-bold">Būdas:&nbsp;</span>{" "}
                {order.paymentMethod}
                {/* <BsPaypal className="ml-1" size={20} /> */}
              </p>
              <p className="mt-4 flex">
                <span className="font-bold">Būsena:&nbsp;</span>
                {order.isPaid ? (
                  <span className="text-green-600">
                    Apmokėta {order.paidAt}
                  </span>
                ) : (
                  <span className="text-red-600">Neapmokėta</span>
                )}
              </p>
            </div>
            <hr className="my-4" />
            {/* Order Items */}
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
                  {order.orderItems.map(
                    (item: ProductInterface, idx: number) => (
                      <tr key={idx}>
                        <td className="border border-gray-300 p-2">
                          <img
                            src={item.image}
                            className="w-34 h-24"
                            alt={item.name}
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          {item.name}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {item.qty} x {item.price}€
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            {/* Order Summary */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold">Iš Viso:</h2>
              <div className="mt-4">
                <div className="flex justify-between">
                  <p>Pirkinių suma:</p>
                  <p>{order.itemsPrice}€</p>
                </div>
                <div className="flex justify-between">
                  <p>PVM (21%):</p>
                  <p>{order.taxPrice}€</p>
                </div>
                <div className="flex justify-between">
                  <p>Pristatymas:</p>
                  <p>{order.shippingPrice}€</p>
                </div>
                <div className="flex justify-between font-semibold text-xl mt-4">
                  <p>Bendrai:</p>
                  <p>{order.totalPrice}€</p>
                </div>
              </div>
              {!order.isPaid && (
                <>
                  {loadingPay && <Loader />}
                  {isPending ? (
                    <div className="mt-4">
                      <Loader />
                    </div>
                  ) : (
                    <div className="mt-5 flex justify-end">
                      <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                      ></PayPalButtons>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default OrderView;
