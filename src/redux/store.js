import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import { doctorApi } from "./slices/DoctorApi";

const store = configureStore({
  reducer: {
    login: loginReducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(doctorApi.middleware),
});

export default store;
