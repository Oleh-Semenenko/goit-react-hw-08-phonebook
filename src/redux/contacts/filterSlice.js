import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue: {
      reducer(_, action) {
        return action.payload;
      },
      prepare(value) {
        return {
          payload: value,
        };
      },
    },
  },
  extraReducers: builder =>
    builder.addCase(logOut.fulfilled, state => {
      state = '';
    }),
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
