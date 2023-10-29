import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../constants/cartConstants";
import { Product } from "../../interfaces/productInterfaces";
import { updateCart } from "../utils/cartUtils";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (x: Product) => x._id === item._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((x: Product) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x: Product) => x._id !== action.payload
      );

      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
