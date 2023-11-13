import { BsPaypal } from "react-icons/bs";
import { OrderInterface } from "../../services/interfaces/orderInterfaces";

const PayDetailsSection = (props: { order: OrderInterface }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Apmokėjimo Būdas:</h2>
      <p className="mt-4 flex">
        <span className="font-bold">Būdas:&nbsp;</span>{" "}
        {props.order.paymentMethod}
        <BsPaypal className="ml-1" size={20} />
      </p>
      <p className="mt-4 flex">
        <span className="font-bold">Būsena:&nbsp;</span>
        {props.order.isPaid ? (
          <span className="text-green-600">Apmokėta {props.order.paidAt}</span>
        ) : (
          <span className="text-red-600">Neapmokėta</span>
        )}
      </p>
    </div>
  );
};

export default PayDetailsSection;
