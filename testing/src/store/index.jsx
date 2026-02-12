import { configureStore } from "@reduxjs/toolkit";
import counterReduceres from "../features/Counter"

export const store = configureStore({
    reducer: {
        counter : counterReduceres
    }
})