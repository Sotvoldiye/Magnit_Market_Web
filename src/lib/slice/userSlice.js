import { createSlice } from "@reduxjs/toolkit";

/* COUNTER SLICE */
const counterInitialState = {
  value: 0,
  stock: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      if (state.value < state.stock) {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    setStock: (state, action) => {
      state.stock = action.payload;
      if (state.value > action.payload) {
        state.value = action.payload;
      }
    },
    resetCounter: (state) => {
      state.value = 0;
    }
  },
});

/* CART SLICE */
const cartInitialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  }
});

const favaruteInitialState = {
  items : []
}

const favaruteSlice = createSlice({
  name: 'cart',
  initialState: favaruteInitialState,
  reducers: {
    addFavorute(state, action) {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFavorute(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  }
});

/* USER SLICE */
const userInitialState = {
  user: true,
  authReady: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    isAuthReady: (state) => {
      state.authReady = true;
    },
  },
});

/* EXPORT ACTIONS */
export const { increment, decrement, setStock, resetCounter } = counterSlice.actions;
export const { addToCart, removeFromCart } = cartSlice.actions;
export const { login, logout, isAuthReady } = userSlice.actions;
export const {addFavorute, removeFavorute } = favaruteSlice.actions
/* EXPORT REDUCERS */
export const counterReducer = counterSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const userReducer = userSlice.reducer;
export const favoruteReducer = favaruteSlice.reducer
