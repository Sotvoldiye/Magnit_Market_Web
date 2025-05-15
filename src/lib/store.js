import { configureStore } from '@reduxjs/toolkit';
import {
  counterReducer,
  cartReducer,
  userReducer,
  favoruteReducer,
} from './slice/Slice';
import producrApi from './api/productApi';

const store = configureStore({
  reducer: {
    [producrApi.reducerPath]: producrApi.reducer,
    counter: counterReducer,
    cart: cartReducer,
    user: userReducer,
    favorute: favoruteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(producrApi.middleware),
});

export default store;
