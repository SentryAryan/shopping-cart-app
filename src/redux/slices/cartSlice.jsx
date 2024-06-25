import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state,action) => {
            return [...state,action.payload];
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;