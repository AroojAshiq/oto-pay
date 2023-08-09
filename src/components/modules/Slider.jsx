import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="mt-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-full h-[130px] grid grid-cols-3 mb-6 px-5 gap-x-2">
            <div className="w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" lg:[90px] md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" lg:[90px] md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" lg:[90px] md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" lg:[90px] md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-[130px] grid mb-6 grid-cols-3 px-5 gap-x-3">
            <div className=" md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
            <div className=" md:w-full h-14 border rounded-lg flex flex-col justify-center items-center">
              <h1 className="text-xs font-medium ">250 sq yard</h1>
              <p className="text-[10px] text-gray-500">Houses</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
