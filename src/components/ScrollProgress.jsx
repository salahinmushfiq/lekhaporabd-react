// // src/components/ScrollProgress.jsx
// import React from "react";
// import { motion, useScroll } from "framer-motion";

// export default function ScrollProgress() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <motion.div
//       className="fixed top-0 left-0 h-[4px] bg-yellow-500 z-[9999] origin-left"
//       style={{ scaleX: scrollYProgress }}
//     />
//   );
// }


import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        className="h-full transition-all duration-200 ease-linear bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-md"
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
