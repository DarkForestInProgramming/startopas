import AppLayout from "../../layouts/main";
import ShippingForm from "../../components/ui/form/shippForm";
import { useShippingHandlers } from "../../services/handlers/shippHandlers";
import SecondStep from "../../components/ui/checkoutSteps/secondStep";
import Meta from "../../components/meta";

const ShippingView = () => {
  const {
    address,
    setAddress,
    city,
    setCity,
    postalCode,
    setPostalCode,
    country,
    setCountry,
    submitHandler,
  } = useShippingHandlers();

  return (
    <AppLayout>
      <Meta title="Pristatymas" />
      <SecondStep />
      <ShippingForm
        address={address}
        setAddress={setAddress}
        city={city}
        setCity={setCity}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
        country={country}
        setCountry={setCountry}
        submitHandler={submitHandler}
      />
    </AppLayout>
  );
};

export default ShippingView;
