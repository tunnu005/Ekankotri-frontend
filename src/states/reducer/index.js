import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  Bride_name: "Twinkal",
  Groom_name: "Bhaillo",
  location: "Saydi,Torda",
  Wedding_Date: "02/042004",
  dates: ["01/01/2004", "02/01/2004", "03/01/2004"],
  eventname: ["Ras Garba", "mahendi", "Sagai", "Varghodo"],
  invitedBy: "Mr. Jivabhai Ninama , Mrs. Ramilaben Ninama",
  photos: [],
  map_url: "https://maps.app.goo.gl/15yz6iBDC87j14Ni7",
  uploadedImagePath: null,
  uploadError: null,
};

export const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "upload_success":
      return {
        ...state,
        uploadedImagePath: action.payload,
        uploadError: null,
      };
    case "upload_fail":
      return {
        ...state,
        uploadedImagePath: null,
        uploadError: action.payload,
      };
    default:
      return state;
  }
};

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("signupsuccess", (state, action) => {
      console.log("success in sign Up");
      state.auth = true;
      state.message = action.payload;
    })
    .addCase("signupfail", (state, action) => {
      console.log("failed in sign Up");
      state.auth = false;
      state.message = action.payload;
    })
    .addCase("changeTemplate", (state, action) => {
      state.title = action.payload;
    })
    .addCase("ForgetPassword", (state, action) => {
      return action.payload;
    })
    .addCase("formdata_success", (state, action) => {
      const data = action.payload;
      state.Bride_name = data.Bride_name;
      state.Groom_name = data.Groom_name;
      state.location = data.location;
      state.Wedding_Date = data.Wedding_Date;
      state.dates = data.dates;
      state.eventname = data.eventname;
      state.invitedBy = data.invitedBy;
      state.photos = data.photos;
      state.map_url = data.map_url;
      // console.log(state.firstname)
      // return action.payload;
    });
});
