import { configureStore } from "@reduxjs/toolkit";
import { productSelector } from "../features/productSlice";

export const store = configureStore({
    reducer: {
        counter : productSelector
    }
})