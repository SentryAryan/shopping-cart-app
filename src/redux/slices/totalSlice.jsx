import { createSlice } from "@reduxjs/toolkit";


export const totalSlice = createSlice({
    name: "totalAmount",
    initialState: 0,
    reducers: {
        setTotalAmount: (state,action) => action.payload,
    }
});

export const {setTotalAmount} = totalSlice.actions;
export default totalSlice.reducer;