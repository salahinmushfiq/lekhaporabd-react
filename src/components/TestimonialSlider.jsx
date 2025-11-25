// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Tania Rahman",
    role: "SSC Student",
    text: "This platform helped me revise all subjects with ease. The videos are well-structured and super helpful!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rakib Hasan",
    role: "JSC Candidate",
    text: "I love the categorized playlists! It saves me time and gives me confidence before exams.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Farzana Akter",
    role: "Parent",
    text: "As a parent, I find this platform extremely useful to guide my children with their studies.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function TestimonialSlider() {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6 text-gray-800"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        What Our Users Say
      </motion.h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={30}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-yellow-50 rounded-xl shadow-md p-6 md:p-8 transition duration-300"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-200"
              />
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <h4 className="text-yellow-700 font-semibold text-lg">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
