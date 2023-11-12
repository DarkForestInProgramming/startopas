import { CartInterface } from "../../services/interfaces/orderInterfaces";
import SmallLoader from "../loader/smallLoad";

const PlaceCartTotal = (props: {
  cart: CartInterface;
  isLoading: boolean;
  placeOrderHandler: () => Promise<void>;
}) => {
  return (
    <div id="summary" className="w-full lg:w-1/4 px-4 py-4 mt-6 lg:mt-0">
      <h1 className="font-semibold text-2xl border-b pb-4">Iš Viso</h1>
      <div className="mt-4">
        <div className="flex font-semibold justify-between py-4 text-xs uppercase">
          <span>PVM (21%):</span>
          <span>€{props.cart.taxPrice}</span>
        </div>
        <div className="flex font-semibold justify-between text-xs uppercase">
          <span>Pristatymas:</span>
          <span>€{props.cart.shippingPrice}</span>
        </div>
        <div className="flex font-semibold justify-between py-4 text-sm uppercase">
          <span>Bendra Suma:</span>
          <span>€{props.cart.totalPrice}</span>
        </div>
        <button
          className="py-3 w-full bg-gray-900 text-white hover:bg-gray-800 font-medium rounded text-sm text-center shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          disabled={props.cart.cartItems?.length === 0}
          onClick={props.placeOrderHandler}
        >
          Pirkti
        </button>
      </div>
      {props.isLoading && (
        <div className="mx-auto mt-4">
          <SmallLoader />
        </div>
      )}
    </div>
  );
};

export default PlaceCartTotal;
