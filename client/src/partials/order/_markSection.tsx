import { OrderInterface } from "../../services/interfaces/orderInterfaces";
import Loader from "../../components/ui/loader";

const MarkSection = (props: {
  loadingDeliver: boolean;
  userInfo: any;
  order: OrderInterface;
  deliverOrderHandler: () => Promise<void>;
}) => {
  return (
    <div className="justify-end items-end text-end">
      {props.loadingDeliver && <Loader />}
      {props.userInfo &&
        props.userInfo.isAdmin &&
        props.order.isPaid &&
        !props.order.isDelivered && (
          <button
            className="mt-6 py-1.5 px-2"
            onClick={props.deliverOrderHandler}
          >
            Žymėti Kaip Pristatytą
          </button>
        )}
    </div>
  );
};

export default MarkSection;
