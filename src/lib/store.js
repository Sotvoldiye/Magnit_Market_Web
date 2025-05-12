import { configureStore } from "@reduxjs/toolkit";
import  producrApi  from "./api/productApi"; // `productApi` default emas, named export bo'lishi kerak
import {
  counterReducer,
  cartReducer,
  userReducer,
  favoruteReducer
} from "./slice/userSlice";

const store = configureStore({
  reducer: {
    [producrApi.reducerPath]: producrApi.reducer, // RTK Query reducer
    counter: counterReducer,
    cart: cartReducer,
    user: userReducer,
    favorute: favoruteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(producrApi.middleware),
});

export default store;
