import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--;
        },
        incrementByValue: (state, action) => {
            state.count += action.payload
        }
    },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;