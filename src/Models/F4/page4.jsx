import './style.css'

const Page4 = ({ data }) => {
    const golden= "text-transparent bg-clip-text bg-gradient-to-r from-amber-200  to-yellow-200"


    return (
        <div className=" h-screen w-screen bg-gradient-to-tr from-red-800 to-red-950">
            <div className=" pt-16 lg:pt-52 px-4 lg:pl-24 pb-12 lg:pb-0 to-yellow-100 h-screen" id="mapSection">
                <div className="flex flex-col lg:flex-row">
                    <iframe
                        src={`${data.locationUrl}`} 
                        className="w-full lg:w-1/2 h-64 lg:h-[22rem] lg:mr-4 lg:mb-0"
                        title="Map"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                    <div className="mt-4 lg:mt-0 lg:ml-4 sm:left-0 text-xl lg:text-3xl font-serif">
                        <h2 className={`font-bold ${golden}`}>Venue:</h2>
                        <p className={`border-2 ${golden} border-amber-200 p-2 lg:p-5 w-full lg:w-[32rem] rounded-tl-xl rounded-br-2xl`}>
                            {data.weddingDetails.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page4