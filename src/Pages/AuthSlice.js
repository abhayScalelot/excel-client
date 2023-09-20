import { createSlice } from "@reduxjs/toolkit";

// Slice

const initialState = {
  data: [],
  isError: false,
  isLoding: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
