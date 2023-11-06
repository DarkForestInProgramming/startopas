import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../constants/cartConstants";
import { ProductInterface } from "../interfaces/productInterfaces";
import { updateCart } from "../utils/updateCart";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (x: ProductInterface) => x._id === item._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((x: ProductInterface) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x: ProductInterface) => x._id !== action.payload
      );

      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
