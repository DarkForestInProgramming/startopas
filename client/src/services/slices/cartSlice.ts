import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../constants/cartConstants";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
