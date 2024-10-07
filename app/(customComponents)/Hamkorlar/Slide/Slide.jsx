import Image from "next/image";
import Link from "next/link";
import React from "react";

const Slide = () => {
  return (
    <div
      data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "slidesQty": {
    "xs": 1,
    "lg": 3
  },
  "isDraggable": true,
  "isAutoPlay": true
}'
      class="relative"
    >
      <div class="hs-carousel w-full overflow-hidden bg-white rounded-lg">
        <div class="relative min-h-[70vh] -mx-1">
          <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
            <div class="hs-carousel-slide px-1">
              <div className="w-full border h-[60%] relative rounded-md overflow-hidden shadow-xl">
                <Image
                  fill
                  className="object-cover"
                  src="/mdis img.jpg"
                />
              </div>
              <div className="relative w-full h-[15vh] flex items-center justify-center my-5">
                <Image fill src="/mdis.png" className="object-contain" />
              </div>
              <h1 className="text-2xl font-bold text-center">
                Namangan tuman tibbiyot birlashmasi.
              </h1>
            </div>
            <div class="hs-carousel-slide px-1">
              <div className="w-full border h-[60%] relative rounded-md overflow-hidden shadow-xl">
                <Image
                  fill
                  className="object-cover"
                  src="/mdis img.jpg"
                />
              </div>
              <div className="relative w-full h-[15vh] flex items-center justify-center my-5">
                <Image fill src="/mdis.png" className="object-contain" />
              </div>
              <h1 className="text-2xl font-bold text-center">
                Namangan tuman tibbiyot birlashmasi.
              </h1>
            </div>
            <div class="hs-carousel-slide px-1">
              <div className="w-full border h-[60%] relative rounded-md overflow-hidden shadow-xl">
                <Image
                  fill
                  className="object-cover"
                  src="/mdis img.jpg"
                />
              </div>
              <div className="relative w-full h-[15vh] flex items-center justify-center my-5">
                <Image fill src="/mdis.png" className="object-contain" />
              </div>
              <h1 className="text-2xl font-bold text-center">
                Namangan tuman tibbiyot birlashmasi.
              </h1>
            </div>
            <div class="hs-carousel-slide px-1">
              <div className="w-full border h-[60%] relative rounded-md overflow-hidden shadow-xl">
                <Image
                  fill
                  className="object-cover"
                  src="/mdis img.jpg"
                />
              </div>
              <div className="relative w-full h-[15vh] flex items-center justify-center my-5">
                <Image fill src="/mdis.png" className="object-contain" />
              </div>
              <h1 className="text-2xl font-bold text-center">
                Namangan tuman tibbiyot birlashmasi.
              </h1>
            </div>
            <div class="hs-carousel-slide px-1">
              <div className="w-full border h-[60%] relative rounded-md overflow-hidden shadow-xl">
                <Image
                  fill
                  className="object-cover"
                  src="/mdis img.jpg"
                />
              </div>
              <div className="relative w-full h-[15vh] flex items-center justify-center my-5">
                <Image fill src="/mdis.png" className="object-contain" />
              </div>
              <h1 className="text-2xl font-bold text-center">
                Namangan tuman tibbiyot birlashmasi.
              </h1>
            </div>
            <div class="hs-carousel-slide px-1">
              <div className="w-full border h-[60%] relative rounded-md overflow-hidden shadow-xl">
                <Image
                  fill
                  className="object-cover"
                  src="/mdis img.jpg"
                />
              </div>
              <div className="relative w-full h-[15vh] flex items-center justify-center my-5">
                <Image fill src="/mdis.png" className="object-contain" />
              </div>
              <h1 className="text-2xl font-bold text-center">
                Namangan tuman tibbiyot birlashmasi.
              </h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
