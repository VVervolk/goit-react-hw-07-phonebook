import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    makeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { makeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;