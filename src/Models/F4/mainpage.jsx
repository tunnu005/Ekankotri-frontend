import { useSelector } from "react-redux"
import Navbar from "./Navbar"
import Middle from "./middle"



const Model4 = ({data}) =>{

    // // const data = useSelector((state)=>state.users.data)
    // const events = JSON.parse(sessionStorage.getItem('events'))
    // const locationUrl = sessionStorage.getItem('locationUrl')
    // const weddingDetails = JSON.parse(sessionStorage.getItem('weddingDetails'))
    // const mode = sessionStorage.getItem('mode')
    // // const image1 = (sessionStorage.getItem('image'))
    // const image = JSON.parse(sessionStorage.getItem('imagep'))
    // // const reader = new FileReader()
    // //   reader.onloadend = () => {
    // //     setImagePreview(reader.result)
    // //   }
    // //   reader.readAsDataURL(file)

    // const data = {
    //     events: events,
    //     weddingDetails: weddingDetails,
    //     locationUrl: locationUrl,
    //     mode: mode,
    //     image: image,  // Add image field if you have one. Otherwise, remove this line.

    //    // Add more fields as needed for your needs
    // }
    console.log(data)
    // const picdata  = useSelector((state)=>state.picdata.picsdata)
    // console.log(picdata)
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Middle data={data} />
            </div>
        </div>
    )
}


export default Model4