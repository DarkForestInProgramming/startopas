import AppLayout from "../../layouts/main";
import ThirdStep from "../../components/checkoutSteps/thirdStep";
import { usePaymentHandlers } from "../../services/handlers/payHandlers";
import { useEffect } from "react";
import PaymentForm from "../../components/form/payForm";

const PaymentView = () => {
  const { shippingAddress, setPaymentMethod, navigate, submitHandler } =
    usePaymentHandlers();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  return (
    <AppLayout header="Atsiskaitymas">
      <ThirdStep />
      <PaymentForm
        setPaymentMethod={setPaymentMethod}
        submitHandler={submitHandler}
      />
    </AppLayout>
  );
};

export default PaymentView;
