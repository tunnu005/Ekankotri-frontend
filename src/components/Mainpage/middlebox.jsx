import React from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Middlebox = () => {
  const navigate = useNavigate();

  const handleGeneral = () => {
    navigate("/general");
  };

  return (
    <div className="mx-2 md:mx-4 lg:mx-6 h-[21rem] xl:mx-8 mt-7 rounded-lg overflow-hidden relative shadow-lg flex justify-center items-center">
      <div className="absolute inset-x-0 z-10 top-8 text-center text-2xl font-semibold text-gray-600"></div>
      <div className="absolute w-full h-full bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200"></div>
      
      <div className="w-full">
        <Swiper
          slidesPerView={2} // Default for mobile view
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 }, // Small screens (e.g., mobile)
            768: { slidesPerView: 3, spaceBetween: 30 }, // Medium screens (e.g., tablets)
            1024: { slidesPerView: 4, spaceBetween: 50 }, // Large screens (e.g., desktop)
          }}
          className="mySwiper w-full"
          style={{ width: '90%' }}
        >
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Birthday
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Valentine's Day
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Wedding
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Holiday Celebrations
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Anniversary
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Graduation
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Baby Shower
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Retirement Party
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Farewell Party
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
              Engagement Party
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Middlebox;
