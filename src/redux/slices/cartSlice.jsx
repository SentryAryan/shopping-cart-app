import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            return [...state, action.payload];
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        reset: () => [],
    }
});

export const { add, remove, reset } = cartSlice.actions;
export default cartSlice.reducer;