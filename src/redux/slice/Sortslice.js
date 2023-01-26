import { createSlice } from "@reduxjs/toolkit";


const initialState={
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
        }

    }
})


export const {sorteBbodyParts, sortedEquipment, setExercise } = sortslice.actions
export default sortslice.reducer