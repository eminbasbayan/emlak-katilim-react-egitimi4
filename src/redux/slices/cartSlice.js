import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findProduct) {
        const newCartItems = state.cartItems.map((cItem) => {
          if (findProduct.id === cItem.id) {
            return { ...cItem, quantity: cItem.quantity + 1 };
          }
          return cItem;
        });
        toast.success('Ürün miktarı arttırıldı!');
        state.cartItems = newCartItems;
        return;
      }

      state.cartItems = [
        { ...action.payload, quantity: 1 },
        ...state.cartItems,
      ];
      toast.success('Ürün sepete eklendi!');
    },
    deleteFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
