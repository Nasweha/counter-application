import { createSlice } from "@reduxjs/toolkit";




const counteSlice = createSlice({
    //name the slice component
    name: ' counterApplication',
    initialState: {
        //inital value of the state 
        value: 0
    },
    reducers: {
        //actions are created inisde reducer key


        //increment count
        incerement: (state,action) => {
            state.value += action.payload

        },
        //decrement count
        decrement: (state,action) => {
            state.value -= action.payload
        },
        //reset count 
        reset: (state) => {
            state.value = 0
        }
    }
})


//slice returns action as well as reducer
//actions are called by component 
//reducer is for store


export const {incerement,decrement,reset} = counteSlice.actions

 //export reducer
export default counteSlice.reducer
