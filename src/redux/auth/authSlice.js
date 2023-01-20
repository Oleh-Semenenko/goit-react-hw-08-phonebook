import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  registerFulfilledReducer,
  logInFulfilledReducer,
  logInRejectedReducer,
  logOutFulfilledReducer,
  refreshUserPendingReducer,
  refreshUserFulfilledReducer,
  refreshUserRejectedReducer,
  anyPendingReducer,
  anyFulfilledReducer,
  anyRejectedReducer,
} from './authSliceReducers';


const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, registerFulfilledReducer)
      .addCase(logIn.fulfilled, logInFulfilledReducer)
      .addCase(logIn.rejected, logInRejectedReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addCase(refreshUser.pending, refreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, refreshUserRejectedReducer)
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        anyPendingReducer
      )
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        anyFulfilledReducer
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        anyRejectedReducer
      ),
});

export const authReducer = authSlise.reducer;
