import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import postsReducer from "./slices/postSlice";
import totalReducer from "./slices/totalSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        posts: postsReducer,
        totalAmount: totalReducer,
    }
});