import { PayPalButtons } from "@paypal/react-paypal-js";
import { OrderSummaryInterface } from "../../services/interfaces/orderInterfaces";
import Loader from "../../components/ui/loader";

const SummarySection: React.FC<OrderSummaryInterface> = ({
  order,
  loadingPay,
  isPending,
  createOrder,
  onApprove,
  onError,
}) => {
  return (
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
  );
};

export default SummarySection;
