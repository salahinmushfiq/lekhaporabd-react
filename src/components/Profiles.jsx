// src/components/Profiles.jsx
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sabbir Ahmed",
    role: "Math Instructor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tanvir Hasan",
    role: "English Mentor",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sumaiya Rahman",
    role: "Science Guide",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Asif Chowdhury",
    role: "Bangla Expert",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Profiles() {
  return (
    <section id="profiles" className="bg-white py-12 px-4 text-gray-900">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold">
          Meet Our <span className="text-yellow-500">Educators</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Passionate mentors behind our lessons.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 rounded-xl shadow-lg overflow-hidden text-center p-4 hover:shadow-2xl transition-shadow"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-yellow-400"
            />
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-yellow-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
