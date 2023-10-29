import { Product } from "../../interfaces/productInterfaces";

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state: any) => {
  //@desc Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc: number, item: Product) => acc + item.price * item.qty,
      0
    )
  );

  //@desc Calculate shipping price (If order is over 50€ then free, else 5€ shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 5);

  //@desc Calculate tax price (21% tax)
  state.taxPrice = addDecimals(Number((0.21 * state.itemsPrice).toFixed(2)));

  //@desc Calculate total price
  state.totalPrice =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
