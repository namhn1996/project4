import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import usersSlice from "./usersSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    users: usersSlice,
    carts: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
