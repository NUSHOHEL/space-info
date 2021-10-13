import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RocketState {
  value: [];
}

const initialState: RocketState = {
  value: [],
};

export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  },
});

export const { fetchData } = rocketSlice.actions;

export default rocketSlice.reducer;
