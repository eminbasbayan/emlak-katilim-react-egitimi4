import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});

export default store;
