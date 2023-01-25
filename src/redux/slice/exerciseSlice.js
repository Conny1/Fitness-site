import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    exercise:[],
    singleexercise:{}
}

const exerciseReducer = createSlice({
    name:"exercise",
    initialState,
    reducers:{
        allExercie:(state, action)=>{                                      
            state.exercise = action.payload 
        },
        searchResluts:(state,action)=>{
            const search = state.exercise.filter((item)=> item.name ===action.payload || item.bodyPart ===action.payload || item.muscle ===action.payload || item.equipment ===action.payload)
            state.exercise = search
        
        },
        singleExercise:(state, action)=>{
            const search = state.exercise.filter((item)=> item.id === action.payload.id)
            state.singleexercise = search

        }

    }
    


})

export const { allExercie, searchResluts, singleExercise } = exerciseReducer.actions
export default exerciseReducer.reducer