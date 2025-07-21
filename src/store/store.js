import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginStore";

const store = new configureStore({
    reducer: {
            auth: loginReducer,
    }
})

export default store