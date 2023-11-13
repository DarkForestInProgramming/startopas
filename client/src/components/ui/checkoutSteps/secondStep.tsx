import CheckoutCard from "../card/checkoutCard";

const SecondStep = () => {
  return (
    <CheckoutCard>
      <div className="mr-4 text-2xl text-blue-500">2.</div>
      <div>
        <h2 className="text-lg font-semibold">Pristatymo informacija</h2>
        <p>Užpildykite pristatymo informaciją ir adresą.</p>
      </div>
    </CheckoutCard>
  );
};

export default SecondStep;
