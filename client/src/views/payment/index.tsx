import AppLayout from "../../layouts/main";
import ThirdStep from "../../components/ui/checkoutSteps/thirdStep";
import { usePaymentHandlers } from "../../services/handlers/payHandlers";
import { useEffect } from "react";
import PaymentForm from "../../components/ui/form/payForm";
import Meta from "../../components/meta";

const PaymentView = () => {
  const { shippingAddress, setPaymentMethod, navigate, submitHandler } =
    usePaymentHandlers();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  return (
    <AppLayout>
      <Meta title="Atsiskaitymo būdas" />
      <ThirdStep />
      <PaymentForm
        setPaymentMethod={setPaymentMethod}
        submitHandler={submitHandler}
      />
    </AppLayout>
  );
};

export default PaymentView;
