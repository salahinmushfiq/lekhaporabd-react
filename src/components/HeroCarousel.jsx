// HeroCarousel.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=compress&cs=tinysrgb&w=1600",
    title: "Quality Education for All",
    subtitle: "Explore SSC to Class 6 resources in Bangla & English",
  },
  {
    image: "https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Interactive Learning",
    subtitle: "Watch, learn, and grow with categorized playlists",
  },
  {
    image: "https://images.pexels.com/photos/4144223/pexels-photo-4144223.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Empowering Students",
    subtitle: "Free and open access to top educational content",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-yellow-900/60 via-yellow-800/60 to-yellow-900/70"></div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        loop
        effect="fade"
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Welcome to <span className="text-yellow-300">Lekhapora</span> Online
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-100 max-w-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Discover a curated library of educational content for SSC, JSC, and more — fully in Bangla and English.
        </motion.p>

        <motion.a
          href="#categories"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md transition transform hover:scale-105"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Browse Playlists
        </motion.a>
      </div>
    </div>
  );
}
