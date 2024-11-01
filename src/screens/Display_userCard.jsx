import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Model3 from "../Models/F3/mainpage"
import { fetchEcardData } from "../states/action-creators"
import { RenderPage } from "../exports/functions"



const Card = ({Model}) =>{

    // const [Data,setData] = useState()
    // const [model,setmodel] = useState()
    
    // const { id } = useParams()
    // useEffect(()=>{
    //     const fetchdata = async() =>{
    //       const data = await fetchEcardData(id);
    //       setData(data)

    //       setmodel(RenderPage(data.modelname))
    //     }
    //     fetchdata()
    // })

    return(
        <div>
            {/* <model/> */}
            <Model/>
        </div>
    )
}

export default Card