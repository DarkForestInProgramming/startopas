import { Link } from "react-router-dom";
import AppLayout from "../../layouts/main";
import { useEffect } from "react";
import FourthStep from "../../components/checkoutSteps/fourthStep";
import { ProductInterface } from "../../services/interfaces/productInterfaces";
import { usePlaceOrderHandlers } from "../../services/handlers/placeOrdHandlers";
import PlaceCartItem from "../../components/cart/placeCartItem";
import PlaceCartTotal from "../../components/cart/placeCartTotal";

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
    <AppLayout>
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
                    {cart.cartItems.map(
                      (item: ProductInterface, idx: KeyType) => (
                        <PlaceCartItem key={idx} item={item} />
                      )
                    )}
                  </>
                )}
                <Link to="/" className="flex font-semibold  text-sm mt-4">
                  <svg className="fill-current mr-2  w-4" viewBox="0 0 448 512">
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Tęsti apsipirkimą
                </Link>
              </div>
              <PlaceCartTotal
                cart={cart}
                isLoading={isLoading}
                placeOrderHandler={placeOrderHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PlaceOrderView;
