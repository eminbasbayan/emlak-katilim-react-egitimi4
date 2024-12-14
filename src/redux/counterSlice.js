import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    arttir: (state) => {
      state.count += 1;
    },
    azalt: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
  },
});

export const { arttir, azalt, reset } = counterSlice.actions;
export default counterSlice.reducer;
