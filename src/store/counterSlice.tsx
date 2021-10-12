import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: [];
}

const initialState: CounterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
        filter:(state,action:PayloadAction<string>)=>({
        ...state,
            filteredData : state.value.find((item)=>item === action.payload),
            
        }),

    incrementByAmount: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount,filter } = counterSlice.actions;

export default counterSlice.reducer;
