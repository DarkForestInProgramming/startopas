const cartData = localStorage.getItem("cart");

export const initialState = cartData
  ? JSON.parse(cartData)
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };
