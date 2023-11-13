import React from "react";

const PaymentForm = (props: {
  submitHandler: (e: React.FormEvent) => void;
  setPaymentMethod: Function;
}) => {
  return (
    <div className="w-full py-10 items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl">Atsiskaitymo būdas</h1>
        <form onSubmit={props.submitHandler}>
          <h3 className="mt-10 text-2xl text-center">Pasirinkite būdą:</h3>
          <div className="mt-2 text-center">
            <input
              type="radio"
              className="my-2 mx-auto"
              id="PayPal"
              name="paymentMethod"
              checked
              onChange={(e) => props.setPaymentMethod(e.target.value)}
            />
            &nbsp; PayPal arba Kreditine Kortele
          </div>
          <button
            type="submit"
            className="flex mt-4 mb-4 py-2 px-4 mx-auto bg-gray-900 text-white hover:bg-gray-800 font-medium rounded text-sm text-center shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Tęsti
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
