import { configureStore } from "@reduxjs/toolkit";
import warningReducer from "./features/warningSlice";

export const store = configureStore({
  reducer: {
    warning: warningReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
