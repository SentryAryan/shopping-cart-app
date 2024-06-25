import { createSlice } from "@reduxjs/toolkit";


export const postSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setPosts: function(state,action) {
            return {...state, items: action.payload};
        },
        setLoading: function(state,action) {
            return {...state, loading: action.payload};
        },
    }
});

export const {setPosts, setLoading} = postSlice.actions;
export default postSlice.reducer;