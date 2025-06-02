'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/images/gaming-mouse.jpg',
  '/images/gaming-keyboard.jpg',
  '/images/gaming-headset.jpg',
  '/images/rgb-setup.jpg',
  '/images/gaming-chair.jpg',
  '/images/controller.jpg',
  '/images/monitor.jpg',
  '/images/streaming-setup.jpg',
];

const ImageSlider = () => {
  return (
    <div className="relative max-w-7xl mx-auto my-8">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-2xl overflow-hidden shadow-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full max-h-[600px] object-cover aspect-[2/1]"
            />
          </SwiperSlide>
        ))}

        {/* Left Arrow - Light Blue */}
        <div className="custom-prev absolute top-1/2 right-4 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer -translate-y-1/2 hover:bg-netural-800 transition">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        {/* Right Arrow - Light Blue */}
<div className="custom-prev absolute top-1/2 left-4 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer -translate-y-1/2 hover:bg-neutral-800 transition">          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>

      {/* Pagination dots override with Tailwind-style colors */}
      <style jsx global>{`
        .swiper-pagination-bullets {
          bottom: 12px !important;
        }
        .swiper-pagination-bullet {
          background-color: white; /* Tailwind blue-300 */
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: white; /* Tailwind blue-400 */
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
