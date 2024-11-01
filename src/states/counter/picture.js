import { createSlice } from "@reduxjs/toolkit";
import image1 from "../../../public/sample3.png"
import image2 from "../../../public/smaple4.png"

const initialState = {
    pics :{
        singlepicture : [image1,image2,image1,image2,image1,image2],
        arrayofpic  :   [[image1,image2,image1,image2],[image1,image2,image1,image2],[image1,image2,image1,image2],[image1,image2,image1,image2]],
    }

};


export const pictureReducer = createSlice({
    name : 'pics',
    initialState,
    reducers : {

        inititranfer : (state) => {
            state.picsdata = state.pics
        },

        savapics : (state,action) =>{
            state.picsdata = action.payload;
            // console.log(state.picdata.singlepicture)
        }
        
    }


})

export const {inititranfer , savapics} = pictureReducer.actions;
export default pictureReducer.reducer;