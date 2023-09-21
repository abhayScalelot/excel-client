import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register, signIn } from "../Redux/Services/AuthServices";


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

const initialState = {
  data: [],
  isError: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    removeToken: (state, action) => {
      localStorage.clear();
      state.user = {};
    },
    setKey: (state, action) => {
      state.key = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.key = action?.payload?.data?.Data?.key;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.key = action?.payload?.data?.Data?.key;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export default authSlice.reducer;

// export const { removeToken, setKey } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

// export const useUser = () => {
//   const user = useSelector(selectUser);
//   return useMemo(() => ({ user }), [user]);
// };

export const selectKey = (state) => state.auth.key;

// export const useKey = () => {
//   const key = useSelector(selectKey);
//   return useMemo(() => ({ key }), [key]);
// };
