import { OrderMarkInterface } from "../../services/interfaces/orderInterfaces";
import Loader from "../../components/ui/loader";

const MarkSection: React.FC<OrderMarkInterface> = ({
  loadingDeliver,
  userInfo,
  order,
  deliverOrderHandler,
}) => {
  return (
    <div className="justify-end items-end text-end">
      {loadingDeliver && <Loader />}
      {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
        <button className="mt-6 py-1.5 px-2" onClick={deliverOrderHandler}>
          Žymėti Kaip Pristatytą
        </button>
      )}
    </div>
  );
};

export default MarkSection;
