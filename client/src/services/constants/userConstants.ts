const cartData = localStorage.getItem("userInfo");
export const initialState = cartData ? JSON.parse(cartData) : null;
