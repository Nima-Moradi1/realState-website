import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./user/userSlice";

export const store = configureStore({
  reducer: { user: useReducer },
  // we don't check if a variable is serializable
  // because we may get errors in the app
  // seriazabling The process whereby an object or data structure is
  //translated into a format suitable for transfer
  //over a network, or storage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
