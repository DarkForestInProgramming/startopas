import { Link } from "react-router-dom";
import AppLayout from "../../layouts/main";
import { useEffect } from "react";
import FourthStep from "../../components/checkoutSteps/fourthStep";
import { ProductInterface } from "../../services/interfaces/productInterfaces";
import SmallLoader from "../../components/loader/smallLoad";
import { usePlaceOrderHandlers } from "../../services/handlers/placeOrdHandlers";

const PlaceOrderView = () => {
  const { cart, navigate, placeOrderHandler, isLoading } =
    usePlaceOrderHandlers();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  return (
    <AppLayout header="Užsakymo sukūrimas">
      <FourthStep />
      <div className="w-full py-5 md:py-10 items-center justify-center">
        <div className="container mx-auto">
          <div className="w-full lg:w-3/4 xl:w-3/4 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between shadow-md  rounded-md px-4 py-4">
              <div className="w-full lg:w-3/5 px-4 py-4">
                <div className="flex justify-between border-b pb-4">
                  <h1 className="font-semibold text-2xl">Pirkinių krepšelis</h1>
                  <h2 className="font-semibold text-2xl">
                    {cart.cartItems.length}{" "}
                    {cart.cartItems.length === 1 ? "Pirkinys" : "Pirkiniai"}
                  </h2>
                </div>
                {cart.cartItems.length === 0 ? (
                  <h2>Pirkinių krepšelis tuščias</h2>
                ) : (
                  <>
                    {cart.cartItems.map((item: ProductInterface, idx: any) => (
                      <div
                        className="flex items-center -mx-4 px-4 py-4"
                        key={idx}
                      >
                        <div className="flex w-full">
                          <div className="w-1/2 md:w-1/5 lg:w-1/5">
                            <Link to={`/product/${item._id}`}>
                              <img
                                className="w-full h-20 sm:w-full sm:h-24"
                                src={item.image}
                                alt={item.name}
                              />
                            </Link>
                          </div>
                          <div className="w-3/4 md:w-4/5 lg:w-4/5 pl-4">
                            <span className="font-bold text-sm">
                              {item.name}
                            </span>
                          </div>
                        </div>
                        <div className="w-1/5 text-center">
                          {item.qty} x {item.price}€ = {item.qty * item.price}€
                        </div>
                      </div>
                    ))}
                  </>
                )}
                <Link to="/" className="flex font-semibold  text-sm mt-4">
                  <svg className="fill-current mr-2  w-4" viewBox="0 0 448 512">
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Tęsti apsipirkimą
                </Link>
              </div>

              <div
                id="summary"
                className="w-full lg:w-1/4 px-4 py-4 mt-6 lg:mt-0"
              >
                <h1 className="font-semibold text-2xl border-b pb-4">
                  Iš Viso
                </h1>
                <div className="mt-4">
                  <div className="flex font-semibold justify-between py-4 text-sm uppercase">
                    <span>Bendra Suma:</span>
                    <span>{cart.itemsPrice}€</span>
                  </div>
                  <button
                    className="py-3 w-full bg-gray-900 text-white hover:bg-gray-800 font-medium rounded text-sm text-center shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    disabled={cart.cartItems.length === 0}
                    onClick={placeOrderHandler}
                  >
                    Pirkti
                  </button>
                </div>
                {isLoading && (
                  <div className="mx-auto mt-4">
                    <SmallLoader />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PlaceOrderView;
