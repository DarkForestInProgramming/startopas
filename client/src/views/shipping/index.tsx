import AppLayout from "../../layouts/main";
import ShippingForm from "../../components/form/shippForm";
import { useShippingHandlers } from "../../services/handlers/shippHandlers";

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
    <AppLayout header="Pristatymas">
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
