import { PayPalButtons } from "@paypal/react-paypal-js";
import { OrderInterface } from "../../services/interfaces/orderInterfaces";
import Loader from "../../components/ui/loader";

const SummarySection = (props: {
  order: OrderInterface;
  loadingPay: boolean;
  isPending: boolean;
  createOrder: any;
  onApprove: any;
  onError: any;
}) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">Iš Viso:</h2>
      <div className="mt-4">
        <div className="flex justify-between">
          <p>Pirkinių suma:</p>
          <p>{props.order.itemsPrice}€</p>
        </div>
        <div className="flex justify-between">
          <p>PVM (21%):</p>
          <p>{props.order.taxPrice}€</p>
        </div>
        <div className="flex justify-between">
          <p>Pristatymas:</p>
          <p>{props.order.shippingPrice}€</p>
        </div>
        <div className="flex justify-between font-semibold text-xl mt-4">
          <p>Bendrai:</p>
          <p>{props.order.totalPrice}€</p>
        </div>
      </div>
      {!props.order.isPaid && (
        <>
          {props.loadingPay && <Loader />}
          {props.isPending ? (
            <div className="mt-4">
              <Loader />
            </div>
          ) : (
            <div className="mt-5 flex justify-end">
              <PayPalButtons
                createOrder={props.createOrder}
                onApprove={props.onApprove}
                onError={props.onError}
              ></PayPalButtons>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SummarySection;
