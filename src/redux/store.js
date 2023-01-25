import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from  "./slice/exerciseSlice";

const store = configureStore({
   reducer:{
    exercise:exerciseReducer
   }
})

export default store