// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-yellow-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
        >
          <img
            src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="About Lekhapora"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-yellow-500">Lekhapora</span>
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Lekhapora is a free and open-source educational platform that makes learning
            accessible to all. With categorized playlists for Bangla and English subjects,
            we cover classes from ৬ষ্ঠ শ্রেণী to এস.এস.সি. Our goal is to empower students
            in every corner of Bangladesh.
          </p>
          <p className="text-gray-600">
            Whether you're in a city or a remote village, Lekhapora provides structured,
            engaging, and high-quality resources to help you succeed in your academic journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
