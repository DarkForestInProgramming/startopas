import CheckoutCard from "../card/checkoutCard";

const ThirdStep = () => {
  return (
    <CheckoutCard>
      <div className="mr-4 text-2xl text-blue-500">3.</div>
      <div>
        <h2 className="text-lg font-semibold">Mokėjimas būdas</h2>
        <p>Pasirinkite mokėjimo būdą.</p>
      </div>
    </CheckoutCard>
  );
};

export default ThirdStep;
