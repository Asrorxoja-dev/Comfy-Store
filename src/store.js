import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './features/cart/cartSlice'
import userReduser from "./features/user/userSlice";
export const store = configureStore({
    reducer:{
        cartState:cartReduser,
        userState:userReduser
    }
})