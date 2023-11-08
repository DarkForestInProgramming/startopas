import { ReactNode } from "react";

const CheckoutCard = (props: { children: ReactNode }) => {
  return (
    <div className="bg-white p-6 md:mt-10 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Pirkimo Žingsniai</h1>
      <div className="grid grid-cols-1">
        <div className="flex items-start">{props.children}</div>
      </div>
    </div>
  );
};

export default CheckoutCard;
