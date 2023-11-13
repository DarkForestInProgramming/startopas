import {
  CartSubtotalInterface,
  ProductInterface,
} from "../../services/interfaces/productInterfaces";

const SubTotal: React.FC<CartSubtotalInterface> = ({
  checkoutHandler,
  cartItems,
}) => {
  return (
    <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p>Pirkinių kiekis:</p>
        <p>
          (
          {cartItems.reduce(
            (acc: number, item: ProductInterface) => acc + item.qty,
            0
          )}
          )
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Iš viso:</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">
            €
            {cartItems
              .reduce(
                (acc: number, item: ProductInterface) =>
                  acc + item.qty * item.price,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="py-2 px-4 mt-4 w-full"
        disabled={cartItems.length === 0}
        onClick={checkoutHandler}
      >
        Apmokėti
      </button>
    </div>
  );
};

export default SubTotal;
