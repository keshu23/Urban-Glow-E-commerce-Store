import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/users/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
