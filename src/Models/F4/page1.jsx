// import image from '../../assets/Navratri.avif'
import image from './images/ganesh-removebg.png'

const Page1 = ()=>{
    

    return (
        <div className=" h-screen w-screen bg-gradient-to-tr from-red-800 to-red-950">
            <div className=' h-screen overflow-scroll scrollbar'>
                <div className='pt-1'>
                    <div className='mt-24 flex items-center justify-center font3 text-6xl text-rose-500 font-thin'>
                        | | Shri Ganeshai Namah | |
                    </div>
                </div>
                <div className='flex justify-center items-center my-10 font-bold'>
                    <img src={image} alt="" style={{height:360,width:270}} className='drop-shadow-lg'/>
                </div>
                
            </div>

        </div>
    )
}


export default Page1