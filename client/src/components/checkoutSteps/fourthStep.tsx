import CheckoutCard from "../card/checkoutCard";

const FourthStep = () => {
  return (
    <CheckoutCard>
      <div className="mr-4 text-2xl text-blue-500">4.</div>
      <div>
        <h2 className="text-lg font-semibold">Užsakymo Sukūrimas</h2>
        <p>Peržiūrėkite užsakymą ir keliaukite prie apmokėjimo.</p>
      </div>
    </CheckoutCard>
  );
};

export default FourthStep;
