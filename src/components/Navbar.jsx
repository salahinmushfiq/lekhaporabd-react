// // Navbar.jsx with Tailwind and responsive drawer
// import React, { useState } from "react";
// export default function Navbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   return (
//     <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="text-xl font-bold">Lekhaporabd</div>
//         <div className="md:hidden" onClick={toggleDrawer}>
//           <div className="space-y-1 cursor-pointer">
//             <span className="block w-6 h-0.5 bg-white"></span>
//             <span className="block w-6 h-0.5 bg-white"></span>
//             <span className="block w-6 h-0.5 bg-white"></span>
//           </div>
//         </div>
//         <nav className="hidden md:block">
//           <ul className="flex space-x-6">
//             <li><a href="#" className="hover:text-yellow-400">Home</a></li>
//             <li><a href="#categories" className="hover:text-yellow-400">Playlists</a></li>
//             <li><a href="#profiles" className="hover:text-yellow-400">Our Team</a></li>
//             <li><a href="#" className="hover:text-yellow-400">About</a></li>
//             <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
//           </ul>
//         </nav>
//       </div>

//       {drawerOpen && (
//         <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
//           <a href="#" className="block text-white hover:text-yellow-400">Home</a>
//           <a href="#categories" className="block text-white hover:text-yellow-400">Playlists</a>
//           <a href="#profiles" className="block text-white hover:text-yellow-400">Our Team</a>
//           <a href="#" className="block text-white hover:text-yellow-400">About</a>
//           <a href="#contact" className="block text-white hover:text-yellow-400">Contact</a>
//         </div>
//       )}
//     </header>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const navLinks = [
//   { name: "Home", href: "#" },
//   { name: "Categories", href: "#categories" },
//   { name: "Team", href: "#profiles" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll to shrink navbar
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
// <header
//   className={`fixed w-full z-50 top-0 transition-all duration-300 ${
//     scrolled
//       ? "bg-gray-900 shadow-md py-2"
//       : "bg-gray-900/80 border-b border-gray-700 py-3"
//   }`}
// >
//       <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center text-yellow-400">
//         {/* Logo */}
//         <a
//           href="#"
//           className="text-2xl font-extrabold tracking-tight hover:text-yellow-300 transition"
//         >
//           Lekhapora
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 font-semibold text-sm uppercase tracking-wide">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="hover:text-white transition duration-200"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(true)}
//             className={`text-yellow-400 text-2xl focus:outline-none transition-transform duration-300 ${
//               menuOpen ? "hidden" : "block"
//             }`}
//             aria-label="Open Menu"
//           >
//             <FaBars />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Slide-Down Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-yellow-300 z-40 transform transition-all duration-500 ease-in-out ${
//           menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="text-2xl focus:outline-none"
//             aria-label="Close Menu"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <ul className="flex flex-col items-center justify-center mt-10 space-y-6 text-lg font-medium">
//           {navLinks.map((link, idx) => (
//             <li
//               key={link.name}
//               className={`opacity-0 animate-fade-in-up`}
//               style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
//             >
//               <a
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-yellow-100 transition duration-300"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", href: "#" },
//   { name: "Categories", href: "#categories" },
//   { name: "Team", href: "#profiles" },
//   { name: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [menuOpen]);

//   return (
//     <header
//       className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="text-2xl font-bold text-yellow-500 tracking-wide">
//           Lekhapora
//         </div>

//         <nav className="hidden md:flex space-x-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-gray-800 hover:text-yellow-500 font-medium transition duration-200"
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>

//         <div className="md:hidden">
//           <button
//             className="text-gray-800 text-xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-md shadow-lg z-40 px-6 py-4"
//           >
//             <div className="flex justify-between items-center border-b border-gray-300 pb-3">
//               <h2 className="text-lg font-bold text-yellow-600">Menu</h2>
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className="text-2xl text-gray-800"
//                 aria-label="Close Menu"
//               >
//                 <FaTimes />
//               </button>
//             </div>
//             <ul className="mt-8 flex flex-col gap-6 items-center text-gray-800 font-medium text-lg">
//               {navLinks.map((link, idx) => (
//                 <motion.li
//                   key={link.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * idx, duration: 0.4 }}
//                 >
//                   <a
//                     href={link.href}
//                     onClick={() => setMenuOpen(false)}
//                     className="hover:text-yellow-500 transition"
//                   >
//                     {link.name}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Categories", href: "#categories" },
  { name: "Team", href: "#profiles" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500 tracking-wide">
          Lekhapora
        </div>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-yellow-500 font-medium transition duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            className="text-gray-800 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-md shadow-lg z-40 px-6 py-4"
          >
            <div className="flex justify-between items-center border-b border-gray-300 pb-3">
              <h2 className="text-lg font-bold text-yellow-600">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-gray-800"
                aria-label="Close Menu"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="mt-8 flex flex-col gap-6 items-center text-gray-800 font-medium text-lg">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-yellow-500 transition"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
