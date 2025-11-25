// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12 px-4 text-gray-900">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold">
          Get in <span className="text-yellow-500">Touch</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Have questions or feedback? We’d love to hear from you.
        </p>
      </motion.div>

      <motion.form
        className="max-w-2xl mx-auto space-y-4 bg-gray-50 p-6 rounded-xl shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
