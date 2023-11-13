import React from "react";
import { PaymentInterface } from "../../../services/interfaces/paymentInterfaces";

const PaymentForm: React.FC<PaymentInterface> = ({
  submitHandler,
  setPaymentMethod,
}) => {
  return (
    <div className="w-full py-10 items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl">Atsiskaitymo būdas</h1>
        <form onSubmit={submitHandler}>
          <h3 className="mt-10 text-2xl text-center">Pasirinkite būdą:</h3>
          <div className="mt-2 text-center">
            <input
              type="radio"
              className="my-2 mx-auto"
              id="PayPal"
              name="paymentMethod"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            &nbsp; PayPal arba Kreditine Kortele
          </div>
          <button className="flex mt-4 mb-4 py-2 px-4 mx-auto">Tęsti</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
