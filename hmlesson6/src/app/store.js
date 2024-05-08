import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/ProductsSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});