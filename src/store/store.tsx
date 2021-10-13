import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "./reducer";

export const store = configureStore({
  reducer: { rocket: rocketReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
