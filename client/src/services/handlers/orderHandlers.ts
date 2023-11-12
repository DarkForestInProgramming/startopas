import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useParams } from "react-router-dom";
import {
  useGetOrderDetailsQuery,
  useGetPayPalClientIdQuery,
  usePayOrderMutation,
} from "../slices/ordersApiSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useOrderHandlers = () => {
  const { id: orderId } = useParams();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const { data: order, refetch, isLoading } = useGetOrderDetailsQuery(orderId);
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPayPalClientIdQuery({});
  const { userInfo } = useSelector((state: any) => state.auth);

  // @desc    Loading PayPal

  const loadPayPalScript = async () => {
    paypalDispatch({
      type: "resetOptions",
      value: {
        clientId: paypal.clientId,
        currency: "EUR",
      },
    });
  };

  // @desc    Succesfully paid

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(async function (details: any) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Sėkmingai apmokėta.");
      } catch (error: any) {
        toast.error(error?.data?.message || error.messaage);
      }
    });
  };

  const onError = (error: any) => {
    toast.error(error.message);
  };

  // @desc    Creating order

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: order.totalPrice,
            },
          },
        ],
      })
      .then((orderId: any) => {
        return orderId;
      });
  };

  return {
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
    userInfo,
  };
};
