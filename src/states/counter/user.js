import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inituser:{
    Bride_name: "Sakshi",
    Groom_name: "Bhargav",
    location: "Veer Narmad South Gujarat University, Surat, Gujarat 395007",
    Wedding_Date: "01/06/2024",
    map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999223134313!2d2.2944813156749284!3d48.85837007928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd2b6e41bf%3A0x2e9dcead503bebd9!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1617255727391!5m2!1sen!2sus",
    invitedBy: ["mohalbhai yadav","raniben yadav","aadityanad yadv","rukmani yadv","rajmukji dalal","kinjalben dalal"],
    events: [{name:"Haldi",date:"01/06/2024",description:"the auspicious mahurat (timing) for applying turmeric paste to the bride and groom"},
        {name:"Ras/Garba",date:"02/06/2024",description:"ras/garba with kinjal dave, start at time 8pm"},
        {name:"wedding",date:"03/06/2024",description:"wedding at veer anrmad University, at 7pm come with blessings"}
    ],
    mode:'0',
    }

}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Add your reducer functions here
        saveuser : (state,action) =>{
            // console.log('here');
            // console.log(action.payload)
            state.formdata = action.payload;
            state.data = state.formdata;
            state.data.mode = "1";
            console.log(state.data)


        },
        inittransferdata :  (state) =>{
            state.data = state.inituser;
            console.log(state.data)
        },
      

    }
})

export const { saveuser,inittransferdata} = userReducer.actions;
export default userReducer.reducer