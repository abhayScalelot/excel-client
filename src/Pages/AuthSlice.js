import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register, signIn } from "../Redux/Services/AuthServices";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const getDefaultUser = () => {
  let user = localStorage.getItem("user");
  if (user && user !== "undefined") {
    return JSON.parse(user);
  } else {
    return null;
  }
};

const initialState = {
  user: localStorage.getItem("user") ? getDefaultUser() : {},
  isError: false,
  isLoading: false,
};

// Slice
export const registration = createAsyncThunk(
  "auth/register",
  async (payload) => {
    return await register(payload);
  }
);

export const signInUser = createAsyncThunk("auth/signin", async (payload) => {
  return await signIn(payload);
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      localStorage.clear();
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isAuthenticated = true;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action?.payload?.data;
      // localStorage.setItem("user", state.user);
    });
  },
});

export default authSlice.reducer;

// export const { removeToken, setKey } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export const useUser = () => {
  const user = useSelector(selectUser);
  localStorage.setItem("user", user ? JSON.stringify(user) : undefined);
  return useMemo(() => ({ user }), [user]);
};

// export const useUser = () => {
//   const user = useSelector(selectUser);
//   return useMemo(() => ({ user }), [user]);
// };

// export const useKey = () => {
//   const key = useSelector(selectKey);
//   return useMemo(() => ({ key }), [key]);
// };
