// import React from "react";
// import PromoAdLeft from "./PromoAdLeft";
// import PromoAdRight from "./PromoAdRight";
// import HeroCarousel from "./HeroCarousel";

// export default function Hero() {
//   return (
//     <section className="w-full mx-auto py-8 px-4 overflow-hidden">
//       <div className="grid grid-cols-1 md:grid-cols-[minmax(140px,1fr)_2fr_minmax(140px,1fr)] gap-4 items-stretch">
//         <div className="hidden md:block h-full">
//           <PromoAdLeft />
//         </div>
//         <div className="overflow-hidden h-full">
//           <HeroCarousel />
//         </div>
//         <div className="hidden md:block h-full">
//           <PromoAdRight />
//         </div> 
//       </div>
//     </section>
//   );
// }







// import React from "react";
// import PromoAdLeft from "./PromoAdLeft";
// import PromoAdRight from "./PromoAdRight";
// import HeroCarousel from "./HeroCarousel";

// export default function Hero() {
//   return (
//     <section className="w-full mx-auto py-8 px-4 overflow-hidden mt-12">
//       {/* <div className="grid grid-cols-1 md:grid-cols-[minmax(140px,1fr)_2fr_minmax(140px,1fr)] gap-4 items-stretch h-[500px]"> */}
//            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] gap-4 md:h-[500px]">
//         {/* Left Promo */}
//         <div className="hidden md:block h-full">
//         {/* Left Promo */}
//         {/* <div className="hidden md:block"> */}
//           <PromoAdLeft />
//         </div>

//         {/* Hero Carousel */}
//         <div className="h-full overflow-hidden rounded-lg">
//           <HeroCarousel />
//         </div>

//         {/* Right Promo */}
//         {/* <div className="hidden md:block"> */}
//          <div className="hidden md:block h-full">
//           <PromoAdRight />
//         </div>
//       </div>
//     </section>
//   );
// }


// Hero.jsx
import React from "react";
import PromoAdLeft from "./PromoAdLeft";
import PromoAdRight from "./PromoAdRight";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="w-full mx-auto pt-24 pb-8 px-4 bg-yellow-50 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(140px,1fr)_2fr_minmax(140px,1fr)] gap-4 items-stretch h-[400px] sm:h-[400px] md:h-[500px]">
        {/* Left Promo */}
        <div className="hidden md:block">
          <PromoAdLeft />
        </div>

        {/* Hero Carousel */}
        <div className="overflow-hidden rounded-lg shadow-xl w-full h-[400px] sm:h-[400px] md:h-[500px]">
          <HeroCarousel />
        </div>

        {/* Right Promo */}
        <div className="hidden md:block">
          <PromoAdRight />
        </div>
      </div>
    </section>
  );
}



