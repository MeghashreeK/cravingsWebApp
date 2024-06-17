import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const indexStore=configureStore({
    reducer:{
        cart:cartReducer,
    }
});

export default indexStore;

