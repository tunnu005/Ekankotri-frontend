import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentmodel:'',

};

export const generalState =createSlice({
    name:'general',
    initialState,
    reducers: {
        choosemodel : (state,action)=>{
            state.model = action.payload;
            // console.log(state.x);
        }
    }
})

export const { choosemodel} = generalState.actions;
export default generalState.reducer;