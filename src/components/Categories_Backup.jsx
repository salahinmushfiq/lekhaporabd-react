// src/components/Categories.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { playlistLinks, topLevelCategories } from "../data/playlistData";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const fadeRight = {
//   hidden: { opacity: 0, x: -40 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.5 },
//   },
// };

// const zoomIn = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.4 },
//   },
// };

// export default function Categories() {
//   const [openTopId, setOpenTopId] = useState(null);
//   const [openClassId, setOpenClassId] = useState(null);
//   const [selectedPlaylist, setSelectedPlaylist] = useState("");

//   const toggleTopAccordion = (id) => {
//     setOpenTopId(openTopId === id ? null : id);
//     setOpenClassId(null);
//   };

//   const toggleClassAccordion = (id) => {
//     setOpenClassId(openClassId === id ? null : id);
//   };

//   const handleVideoLoad = (playlistKey) => {
//     const link = playlistLinks[playlistKey];
//     if (link) {
//       setSelectedPlaylist(link);
//       setTimeout(() => {
//         const el = document.getElementById("videoContent");
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     }
//   };

//   return (
//     <section id="categories" className="bg-gray-900 text-yellow-300 py-12 px-4">
//       <motion.div
//         className="text-center mb-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//       >
//         <h2 className="text-3xl font-bold">
//           Playlists <span className="text-yellow-400">Categorized</span>
//         </h2>
//       </motion.div>

//       <div className="max-w-6xl mx-auto">
//         {topLevelCategories.map((top, i) => (
//           <motion.div
//             key={top.id}
//             className="mb-4 border border-yellow-600 rounded-xl overflow-hidden"
//             custom={i}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             {/* Top-Level Accordion */}
//             <button
//               onClick={() => toggleTopAccordion(top.id)}
//               className="w-full bg-gray-800 px-4 py-3 text-left flex justify-between items-center hover:bg-yellow-700 transition"
//             >
//               <span className="text-lg font-semibold">{top.title}</span>
//               <svg
//                 className={`w-5 h-5 transition-transform duration-300 ${
//                   openTopId === top.id ? "rotate-180" : "rotate-0"
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             <div
//               className={`bg-gray-700 px-4 transition-all duration-500 ease-in-out ${
//                 openTopId === top.id ? "max-h-[2000px] py-4" : "max-h-0"
//               } overflow-hidden`}
//             >
//               {top.classes.map((cls, j) => (
//                 <motion.div
//                   key={cls.id}
//                   className="mb-3 border border-yellow-500 rounded"
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeRight}
//                 >
//                   <button
//                     onClick={() => toggleClassAccordion(cls.id)}
//                     className="w-full bg-gray-600 px-4 py-2 text-left flex justify-between items-center hover:bg-yellow-600 transition"
//                   >
//                     <span className="font-semibold">{cls.title}</span>
//                     <svg
//                       className={`w-4 h-4 transition-transform duration-300 ${
//                         openClassId === cls.id ? "rotate-180" : "rotate-0"
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   <div
//                     className={`bg-gray-800 px-4 transition-all duration-500 ease-in-out ${
//                       openClassId === cls.id ? "max-h-96 py-4" : "max-h-0"
//                     } overflow-hidden`}
//                   >
//                     <motion.ul
//                       className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       variants={zoomIn}
//                     >
//                       {cls.subjects.map((subject) => (
//                         <li key={subject.id}>
//                           <button
//                             onClick={() => handleVideoLoad(subject.id)}
//                             className="w-full flex items-center gap-2 px-3 py-2 bg-yellow-600 hover:bg-yellow-500 text-gray-900 rounded shadow"
//                           >
//                             <i className="fas fa-play"></i>
//                             {subject.name}
//                           </button>
//                         </li>
//                       ))}
//                     </motion.ul>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}

//         {selectedPlaylist && (
//           <motion.section
//             id="videoContent"
//             className="mt-10 p-4 bg-gray-800 rounded-lg"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <div className="text-center text-yellow-300 mb-4 text-xl font-semibold">
//               ভিডিও প্লেলিস্ট
//             </div>
//             <div className="aspect-video w-full max-w-5xl mx-auto">
//               <iframe
//                 className="w-full h-full rounded-md"
//                 src={selectedPlaylist}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="Playlist"
//               ></iframe>
//             </div>
//           </motion.section>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import { playlistLinks, topLevelCategories } from "../data/playlistData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Categories = () => {
  const [openTopId, setOpenTopId] = useState(null);
  const [openClassId, setOpenClassId] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const toggleTopAccordion = (id) => {
    setOpenTopId(openTopId === id ? null : id);
    setOpenClassId(null);
  };

  const toggleClassAccordion = (id) => {
    setOpenClassId(openClassId === id ? null : id);
  };

  const handleVideoLoad = (playlistKey) => {
    const link = playlistLinks[playlistKey];
    if (link) {
      setSelectedPlaylist(link);
      setTimeout(() => {
        const el = document.getElementById("videoContent");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className=" text-gray-900">
      <section id="categories" className="p-4">
        <motion.div
          className="text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold">
            Playlists <span className="text-yellow-600">Categorized</span>
          </h2>
        </motion.div>

        {topLevelCategories.map((top, i) => (
          <motion.div
            key={top.id}
            className="mb-4 border border-yellow-400 rounded overflow-hidden bg-yellow-100"
            // className="bg-yellow-500 px-4 py-3 text-left flex justify-between items-center hover:bg-yellow-600 transition"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Top-Level Accordion */}
            {/* Top-Level Accordion */}
            <button
              onClick={() => toggleTopAccordion(top.id)}
              className="w-full bg-yellow-500 px-4 py-3 text-left flex justify-between items-center hover:bg-yellow-600 transition"
            >
              <span className="text-lg font-semibold text-white">{top.title}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openTopId === top.id ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>


            <div
              className={`bg-white px-4 transition-all duration-500 ease-in-out ${
                openTopId === top.id ? "max-h-[2000px] py-4" : "max-h-0"
              } overflow-hidden`}
            >
              {top.classes.map((cls, j) => (
                <motion.div
                  key={cls.id}
                  className="mb-2 border border-yellow-300 rounded bg-yellow-100"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeRight}
                >
                  <button
                    onClick={() => toggleClassAccordion(cls.id)}
                    className="w-full bg-yellow-300 px-4 py-2 text-left flex justify-between items-center hover:bg-yellow-400 transition"
                  >
                    <span className="font-semibold text-gray-800">{cls.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openClassId === cls.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`bg-white px-4 transition-all duration-500 ease-in-out ${
                      openClassId === cls.id ? "max-h-96 py-4" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <motion.ul
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={zoomIn}
                    >
                      {cls.subjects.map((subject) => (
                      <li key={subject.id}>
                        <button
                          onClick={() => handleVideoLoad(subject.id)}
                          className="group w-full flex items-center gap-2 px-3 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded shadow transition transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <i className="fas fa-play transition-transform duration-300 group-hover:scale-110"></i>
                          {subject.name}
                        </button>
                      </li>
                    ))}
                    </motion.ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {selectedPlaylist && (
        <motion.section
          id="videoContent"
          className="p-4 white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="text-center text-gray-800 mb-4 text-xl font-semibold">
            ভিডিও প্লেলিস্ট
          </div>
          <div className="aspect-video w-full max-w-5xl mx-auto">
            <iframe
              className="w-full h-full rounded-md"
              src={selectedPlaylist}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Playlist"
            ></iframe>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default Categories;


