
import '../F3/styles.css'
import { useEffect, useState } from 'react'
import '../F3/animations/anime2.css'
import 'animate.css'
import img1 from '../../../public/sample3.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css'

// import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { AttentionSeeker } from 'react-awesome-reveal'

const Page2 = ({ data,picdata }) => {
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // const arrayofpic = picdata.arrayofpic;

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % data.images.length);
    //     }, 2000);

    //     return () => clearInterval(interval);

    // }, []);

    // const [images, setImages] = useState(arrayofpic[0]);

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const imageFiles = Array.from(files).map((file) => {
            return URL.createObjectURL(file);
        });
        setImages((prevImages) => [...prevImages, ...imageFiles]);
    };

    const handleDeleteImage = () => {
        if (images.length > 0) {
            const updatedImages = images.filter((_, index) => index !== currentImageIndex);
            setImages(updatedImages);
            setCurrentImageIndex((prevIndex) =>
                prevIndex === updatedImages.length ? 0 : prevIndex
            );
        }
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) =>
    //             prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [images]);

    const golden= "text-transparent bg-clip-text bg-gradient-to-r from-amber-200  to-yellow-200"


    return (

        <div className=" h-screen w-screen bg-gradient-to-tr from-red-800 to-red-950">
            <div className=' h-screen overflow-scroll scrollbar flex items-center justify-center'>
                <div className="pt-1">
                    <div className="mt-20 flex items-center justify-center">

                        <div className=' '>
                            <div className='j justify-center flex items-center'>
                                {/* <AttentionSeeker effect='jello' triggerOnce={true}><img src={data.images[currentIndex]} alt="" style={{ height: 300, width: 450 }} className=' rounded-md shadow-md border-2 border-neutral-600' /> </AttentionSeeker> */}
                                <div className="relative w-80 h-72 group">
                                    <img src={data.photo} alt="" />
                                    {/* {images.length > 0 ? (
                                        <img
                                            src={images[currentImageIndex]}
                                            alt="Slideshow"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                            No images uploaded
                                        </div>
                                    )} */}
                                    {/* { data.mode == "0" ? "" : <>
                                        <input
                                        type="file"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="fileInput"
                                        multiple
                                    />
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden group-hover:flex space-x-4">
                                        <button
                                            onClick={() => document.getElementById('fileInput').click()}
                                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5 mr-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                            Add
                                        </button>
                                        <button
                                            onClick={handleDeleteImage}
                                            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5 mr-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                            delete
                                        </button>
                                    </div> </>} */}
                                </div>
                            </div>
                            <div className={`h-24 flex items-center justify-center font1 font-semibold text-5xl my-16 ${golden}`}>
                                {data.weddingDetails.brideName} <div className='font1'>&#160; &#38; &#160;</div> {data.weddingDetails.groomName}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Page2