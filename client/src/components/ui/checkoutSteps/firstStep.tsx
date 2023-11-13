import CheckoutCard from "../card/checkoutCard";

const FirstStep = () => {
  return (
    <CheckoutCard>
      <div className="mr-4 text-2xl text-blue-500">1.</div>
      <div>
        <h2 className="text-lg font-semibold">Pirkinių krepšelis</h2>
        <p>Pasirinkite prekes ir pridėkite jas į pirkinių krepšelį.</p>
      </div>
    </CheckoutCard>
  );
};

export default FirstStep;
