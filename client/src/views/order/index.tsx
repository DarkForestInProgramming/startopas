import { useEffect } from "react";
import Loader from "../../components/ui/loader";
import AppLayout from "../../layouts/main";
import { useOrderHandlers } from "../../services/handlers/orderHandlers";
import OrderTable from "../../components/ui/table/orderTable";
import UserSection from "../../partials/order/_userSection";
import PayDetailsSection from "../../partials/order/_payDetailsSection";
import SummarySection from "../../partials/order/_summSection";
import MarkSection from "../../partials/order/_markSection";
import Meta from "../../components/meta";

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
    loadingDeliver,
    userInfo,
    deliverOrderHandler,
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
    <AppLayout>
      <Meta title={`Užsakymas`} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full md:py-8 py-4">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold">Užsakymas: {order._id}</h1>
            <UserSection order={order} />
            <hr className="my-4" />
            <PayDetailsSection order={order} />
            <hr className="my-4" />
            <OrderTable order={order} />
            <SummarySection
              order={order}
              loadingPay={loadingPay}
              isPending={isPending}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
            <MarkSection
              loadingDeliver={loadingDeliver}
              userInfo={userInfo}
              order={order}
              deliverOrderHandler={deliverOrderHandler}
            />
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default OrderView;
