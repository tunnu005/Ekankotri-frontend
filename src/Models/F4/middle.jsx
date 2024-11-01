// import image from '../../assets/Navratri.avif'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image5.jpg'
import '../F3/styles.css'
import { useEffect, useState } from 'react'
import '../F3/animations/anime2.css'
import 'animate.css'
import ring from './images/2.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'

import { Navigation } from 'swiper/modules';
import { AttentionSeeker } from 'react-awesome-reveal'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './Page3'
import Page4 from './page4'

const Middle = ({ data }) => {





    return (
        <div className='h-screen w-screen'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">



                <SwiperSlide>

                    <Page1 />

                </SwiperSlide>

                <SwiperSlide>

                    <Page2 data={data} />

                </SwiperSlide>
                <SwiperSlide>

                    <Page3 data={data} />

                </SwiperSlide>
                <SwiperSlide>

                    <Page4 data={data} />

                </SwiperSlide>



            </Swiper>
        </div>
    )
}


export default Middle