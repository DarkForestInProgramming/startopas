const cartData = localStorage.getItem("cart");

export const initialState = cartData ? JSON.parse(cartData) : { cartItems: [] };
