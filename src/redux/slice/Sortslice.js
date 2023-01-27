import { createSlice } from "@reduxjs/toolkit";


const initialState={
    sortedData:[],
    exercises:[],
    bodyPart:[],
    equipment:[]
}

const sortslice = createSlice({
    name:"sort",
    initialState,
    reducers:{
        setExercise:(state, action)=>{
            state.exercises = action.payload
        },
        sorteBbodyParts:(state)=>{
            const sorted = state.exercises.map((item)=>item.bodyPart )
            for (let i = 0; i < sorted.length; i++) {
                if(!state.bodyPart.includes(sorted[i])  ){
                    state.bodyPart.push(sorted[i])

                }
                
            }
        },
        sortedEquipment:(state)=> {
            const sorted = state.exercises.map((item)=>item.equipment )
            for (let i = 0; i < sorted.length; i++) {
                if(!state.equipment.includes(sorted[i])  ){
                    state.equipment.push(sorted[i])

                }
                
            }
        },
        sorteddataaction:(state, action)=>{
            state.sortedData = action.payload

        }

    }
})


export const {sorteBbodyParts, sortedEquipment, setExercise, sorteddataaction } = sortslice.actions
export default sortslice.reducer