import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeCardFlipped: false,
  aboutCardFlipped: false,
  contactCardFlipped: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    flipCard: (state, { payload }) => {
      // state.isCardFlipped = payload ? payload : !state.isCardFlipped;
      state[payload] = !state[payload];
    },
    resetCard: (state) => {
      return { ...initialState };
    },
  },
});

export const { flipCard, resetCard } = mainSlice.actions;

export default mainSlice.reducer;
