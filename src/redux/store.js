import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from  "./slice/exerciseSlice";
import SortReducer from "./slice/Sortslice";

const store = configureStore({
   reducer:{
    exercise:exerciseReducer,
    sort:SortReducer
   }
})

export default store