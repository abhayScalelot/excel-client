import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthSlice from "../Pages/AuthSlice";
const reducer = combineReducers({
  auth: AuthSlice,
});
const store = configureStore({
  reducer: reducer,
});
export default store;
