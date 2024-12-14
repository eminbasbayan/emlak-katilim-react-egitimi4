import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const reduxFetchProducts = createAsyncThunk(
  'products/fetchProduts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      if (!res.ok) {
        throw new Error('Something wen wrong!');
      }

      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue;
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: [],
    loading: 'idle', // idle || loading || succeeded || failed
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.productData = [action.payload, ...state.productData];
    },
    removeProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(reduxFetchProducts.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(reduxFetchProducts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productData = action.payload;
      })
      .addCase(reduxFetchProducts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
