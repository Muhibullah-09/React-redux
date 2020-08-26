import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 20,
    },
    reducers: {
        buycake: state => {
            state.value -= 1;
        },
        buynumOfCakes: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export const { buycake, buynumOfCakes } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;