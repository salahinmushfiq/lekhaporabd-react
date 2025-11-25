// src/components/PromoImagesRight.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { promoImages } from "../data/promoImages";
const PromoImagesRight = () => {
  return (
    <div className="w-[200px]">
      <div className="flex flex-col h-[500px] justify-between mt-6 pt-2">
        <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded w-full mb-2 flex items-center justify-center gap-2 hover:bg-yellow-500 transition">
          <i className="fas fa-bullhorn"></i> Sponsor
        </button>
        <div className="flex-1 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded overflow-hidden shadow h-full"
          >
            {promoImages.right.map((url, index) => (
              <SwiperSlide key={index}>
                <img
                  src={url}
                  alt={`Ad ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PromoImagesRight;
