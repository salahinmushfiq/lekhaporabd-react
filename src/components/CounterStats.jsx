// src/components/CounterStats.jsx
import React from "react";
import CountUp from "react-countup";
import {
  FaVideo,
  FaBookOpen,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaVideo className="text-4xl text-yellow-500" />,
    value: 500,
    label: "Videos",
    suffix: "+",
  },
  {
    icon: <FaBookOpen className="text-4xl text-yellow-500" />,
    value: 20,
    label: "Subjects",
    suffix: "+",
  },
  {
    icon: <FaUsers className="text-4xl text-yellow-500" />,
    value: 100000,
    label: "Views",
    suffix: "+",
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" />,
    value: 10,
    label: "Educators",
    suffix: "+",
  },
];

export default function CounterStats() {
  return (
    <section className="py-12 bg-white text-center text-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {stat.icon}
            <p className="text-3xl font-bold text-yellow-500 mt-2">
              <CountUp
                end={stat.value}
                duration={2}
                separator=","
                suffix={stat.suffix}
              />
            </p>
            <p className="text-gray-700 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
