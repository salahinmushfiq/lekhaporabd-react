import React from "react";
import { promoImages } from "../data/promoImages";

export default function PromoAdLeft() {
  return (
    <div className="overflow-hidden h-full max-h-[500px] rounded-xl shadow-lg">
      <div className="flex flex-col animate-slide-vert space-y-4 p-2">
        {promoImages.left.map((src, i) => (
          <div
            key={i}
            className="w-full rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Ad ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
