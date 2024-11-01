// import Model3 from "./mainpage"
import '../css/mainpage.css';
import { useEffect, useRef, useState } from "react"
// import GeneralWedding from "../../compone"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RenderPage } from '../exports/functions'



// const Preview = () => {

//     // const [selected,setselected] = useState(false)
//     // sessionStorage.setItem('modelname',Modelname)\
//     // const model = useSelector((state) =>state.generalState.model)
//     const modelId = sessionStorage.getItem('modelId')
//     console.log(sessionStorage.getItem(''))
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

//                    <button onClick={()=>{navigator('/final');}} className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
//                     <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"></span>
//                     <span className="absolute inset-0 transform scale-0 bg-white rounded-lg" />
//                     <span className="relative z-10" >final</span>
//                 </button> 


//             </div>

//         </div>
//     )
// }

// export default Preview

import React from 'react'
import Model4 from '@/Models/F4/mainpage';
import { Model3 } from '@/exports/exportsModule';

const Preview = () => {

    const modelId = sessionStorage.getItem('modelId')
    const data = JSON.parse(sessionStorage.getItem('data'));

    console.log(data)

    const navigator = useNavigate()
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

                <button onClick={() => { navigator('/final') }} className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                    <span className="absolute inset-0 transform scale-0 bg-white rounded-lg" />
                    <span className="relative z-10">Final</span>
                </button>


            </div>
        </div>
    )
}

export default Preview