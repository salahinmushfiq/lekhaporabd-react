import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
//   "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1601933470928-cb4e261f2611?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//   "https://images.unsplash.com/photo-1584697964191-53f3747631a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",


   "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

export default function CarouselBanner() {
  return (
    <div className="mt-8">
      <div className="max-w-5xl mx-auto relative rounded-lg overflow-hidden shadow-xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          className="rounded-2xl shadow-lg overflow-hidden"
        >
          {slides.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video relative group">
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md p-4 rounded text-white animate-fade-in-up">
                  <h3 className="text-xl md:text-2xl font-semibold">Academic Excellence</h3>
                  <p className="text-sm md:text-base text-yellow-300">Learn from the best tutorials curated for you</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional: Custom Swiper arrow color */}
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            text-shadow: 0 0 10px black;
          }
        `}</style>
      </div>
    </div>
  );
}