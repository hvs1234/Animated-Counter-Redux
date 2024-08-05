import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counters: {
    premium: 9000,
    customer: 2000,
    awards: 28,
  },
};

const Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCounter(state, action) {
      const { id, value } = action.payload;
      state.counters[id] = value;
    },
  },
});

export const { setCounter } = Slice.actions;
export default Slice.reducer;
