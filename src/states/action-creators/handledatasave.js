import { server } from "../api";
import axios from "axios";


export const SaveWeddingdata = async({data,modelId}) =>{
    const responce = await axios.post(`${server}/api/ecard/Saveuserdata`,{data,modelId},{withCredentials:true})
    console.log(responce.data)
    return responce.data
}

export const GetWeddingdata = async(id)=>{
    console.log(id)  // logs: '507f191e810c19729de860ea' and ObjectId('507f191e810c19729de860ea')  // to get objectid you can use new mongoose.Types.ObjectId(id) in url  like this :  /api/ecard/GetWeddingdata/:507f
    const responce = await axios.get(`${server}/api/ecard/GetWeddingdata/${id}`,{withCredentials:true})
    return responce.data.data
}