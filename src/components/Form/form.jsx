// import Model3 from "./mainpage"
import '../../css/mainpage.css'
import { useEffect, useRef, useState } from "react"
import GeneralWedding from "../../components/Form/GeneralWedding"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RenderPage } from '../../exports/functions'
import { data } from '../../data/dummydata.js'


// const Form3 = () => {

//     // const [selected,setselected] = useState(false)
//     // sessionStorage.setItem('modelname',Modelname)\
//     // const model = useSelector((state) =>state.generalState.model)
//     const {modelId }= useParams()
//     sessionStorage.setItem('modelId',modelId)
//     sessionStorage.setItem('events',JSON.stringify(data.events))
//     sessionStorage.setItem('locationUrl',data.locationUrl)
//     sessionStorage.setItem('weddingDetails',JSON.stringify(data.weddingDetails))
//     sessionStorage.setItem('mode',"0")
//     sessionStorage.setItem('imagep',JSON.stringify(data.image))
//     const navigator = useNavigate()
//     console.log(modelId)
//     const Model = RenderPage(modelId);
//     // console.log(Model)
//     return (
//         <div className="scrollbar">
//             <div className="w-screen h-screen overflow-y-scroll " id="scroll">
//                 <Model />
//             </div>

//             <div className=" justify-center flex items-center my-4" >

//                    <button onClick={()=>{navigator('/general')}} className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
//                     <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"></span>
//                     <span className="absolute inset-0 transform scale-0 bg-white rounded-lg" />
//                     <span className="relative z-10">Select</span>
//                 </button> 


//             </div>

//         </div>
//     )
// }

// export default Form3


import React from 'react'
import Model4 from '@/Models/F4/mainpage'
import { Model3 } from '@/exports/exportsModule'

const Delevlopment = () => {
  return (
    <div>
      The model is currently in development.
    </div>
  )
}

const Form3 = () => {


  const { modelId } = useParams()
  sessionStorage.setItem('modelId',modelId)
  const navigator = useNavigate()
  console.log(data)

  return (
    <div>
      <div className="w-screen h-screen overflow-y-scroll " id="scroll">
        {
          modelId === 'Classic and Elegant' ? <Model4 data={data} /> :
            modelId === 'Elegance in Bloom' ? <Model3 data={data} /> :
              modelId === 'Eternal Bloom' ? <Delevlopment /> :
                modelId === 'Modern Minimalist Theme' ? <Delevlopment /> :
                  modelId === 'Vintage Art Deco Theme' ? <Delevlopment /> :
                    modelId === 'Rustic and Bohemian Theme' ? <Delevlopment /> :
                      modelId === 'Romantic Watercolor Theme' ? <Delevlopment /> :
                        modelId === 'timeless Romance' ? <Delevlopment /> :
                          modelId === 'Romantic Watercolor Theme' ? <Delevlopment /> :
                            <div>Invalid Model</div>

        }
      </div>
      <div className=" justify-center flex items-center my-4" >

        <button onClick={() => { navigator('/general') }} className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"></span>
          <span className="absolute inset-0 transform scale-0 bg-white rounded-lg" />
          <span className="relative z-10">Select</span>
        </button>


      </div>
    </div>
  )
}


export default Form3

