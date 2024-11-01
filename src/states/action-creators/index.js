import { server } from "../api";
import axios from "axios";

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${server}/api/user/new`,{ email, password },{ withCredentials: true });

    console.log("data : ", response.status);
    return response;

  } catch (error) {
    console.log("errror in sign up is ", error.response.status);
    return error.response;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${server}/api/user/login`, { email, password,},{ withCredentials: true });
    
    return response.data;

  } catch (error) {
    console.log("error in login", error);
  }
};

export const postupload = async (data) => {
  try {
    const resp = await axios.post(`${server}/api/user/post`, data, { withCredentials: true });
    console.log(resp.status);
    return resp;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const loadtemplates = async (page, pagesize) => {
  try {
    const resp = await axios.get(
      `${server}/api/user/templates/${page}/${pagesize}`
    );
    console.log("data  ", resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeTemplates = (title) => (dispatch) => {
  dispatch({
    type: "changeTemplate",
    payload: title,
  });
};

export const forgetPassword = (mail) => async (dispatch) => {
  try {
    const data = await axios.post(`${server}/api/user/forget`, mail);
    console.log("data of forget password", data);
    dispatch({
      type: "ForgetPassword",
      payload: title,
    });
    return data;
  } catch (error) {
    console.log("error in forgot password", error);
  }
};



export const fetchEcardData = async (id) => {
  try {
    const data = await axios.get(`${server}/api/user/getecard/${id}`);
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const FormSubmit = (data) => (dispatch) => {
  // return async (dispatch) => {
  //   try {
  //     console.log("data at api", data);
  //     // const res = await axios.post(`${server}/api/ecard/form`, data);
  //     // console.log("form's data is sent", res);
  //     dispatch(
  //       {
  //         type:"formdata_success",
  //         payload: data
  //       }
  //     );
  //     // return res.data;
  //   } catch (error) {
  //     console.log("error in form submission", error);
  //     throw error;
  //   }
  // };
  dispatch({
    type: "formdata_success",
    payload: data,
  });
};

export const uploadImage = (imageFile) => async (dispatch) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axios.post(`${server}/api/user/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Server response:", response.data);

    const imageUrl = response.data.data.imageUrl;

    dispatch({
      type: "upload_success",
      payload: imageUrl,
    });

    return imageUrl;
  } catch (error) {
    console.log("Error in image upload:", error);
    dispatch({
      type: "upload_fail",
      payload: error.message,
    });
    return null;
  }
};
