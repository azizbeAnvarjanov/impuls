import Image from "next/image";
import Link from "next/link";
import React from "react";

const TSlide = () => {
  return (
    <div
      data-hs-carousel='{
      "loadingClasses": "opacity-0",
      "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
      "slidesQty": {
        "xs": 1,
        "lg": 4
      },
      "isDraggable": true,
      "isAutoPlay": true
    }'
      class="relative"
    >
      <div class="hs-carousel w-full overflow-hidden bg-white rounded-lg">
        <div class="relative min-h-[70vh] -mx-1">
          <div class="hs-carousel-body p-2 absolute top-0 bottom-0 start-0 flex flex-nowrap gap-3 opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
            <div class="hs-carousel-slide border !p-2 rounded-xl">
              <div className="w-full border h-[55%] relative rounded-md overflow-hidden">
                <Link href="#">
                  <Image fill className="object-cover" src="/mdis img.jpg" />
                </Link>
                <div className="absolute bg-[--brand_color] px-4 py-2 rounded-md top-[2%] left-[2%] transform  h-50 text-white text-center text-lg flex items-center justify-center gap-1 uppercase">
                  <p>1</p>
                  <p>may</p>
                </div>
              </div>
              <div className="p-3 relative h-[45%]">
                <Link href="#" className="my-2 font-bold">
                  Taqvim title
                </Link>
                <h1>
                  Taqvim description Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.{" "}
                </h1>
                <h1 className="absolute bottom-[10px]">16:00 PM</h1>
              </div>
            </div>
            <div class="hs-carousel-slide border !p-2 rounded-xl">
              <div className="w-full border h-[55%] relative rounded-md overflow-hidden">
                <Link href="#">
                  <Image fill className="object-cover" src="/mdis img.jpg" />
                </Link>
                <div className="absolute bg-[--brand_color] px-4 py-2 rounded-md top-[2%] left-[2%] transform  h-50 text-white text-center text-lg flex items-center justify-center gap-1 uppercase">
                  <p>1</p>
                  <p>may</p>
                </div>
              </div>
              <div className="p-3 relative h-[45%]">
                <Link href="#" className="my-2 font-bold">
                  Taqvim title
                </Link>
                <h1>
                  Taqvim description Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.{" "}
                </h1>
                <h1 className="absolute bottom-[10px]">16:00 PM</h1>
              </div>
            </div>
            <div class="hs-carousel-slide border !p-2 rounded-xl">
              <div className="w-full border h-[55%] relative rounded-md overflow-hidden">
                <Link href="#">
                  <Image fill className="object-cover" src="/mdis img.jpg" />
                </Link>
                <div className="absolute bg-[--brand_color] px-4 py-2 rounded-md top-[2%] left-[2%] transform  h-50 text-white text-center text-lg flex items-center justify-center gap-1 uppercase">
                  <p>1</p>
                  <p>may</p>
                </div>
              </div>
              <div className="p-3 relative h-[45%]">
                <Link href="#" className="my-2 font-bold">
                  Taqvim title
                </Link>
                <h1>
                  Taqvim description Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.{" "}
                </h1>
                <h1 className="absolute bottom-[10px]">16:00 PM</h1>
              </div>
            </div>
            <div class="hs-carousel-slide border !p-2 rounded-xl">
              <div className="w-full border h-[55%] relative rounded-md overflow-hidden">
                <Link href="#">
                  <Image fill className="object-cover" src="/mdis img.jpg" />
                </Link>
                <div className="absolute bg-[--brand_color] px-4 py-2 rounded-md top-[2%] left-[2%] transform  h-50 text-white text-center text-lg flex items-center justify-center gap-1 uppercase">
                  <p>1</p>
                  <p>may</p>
                </div>
              </div>
              <div className="p-3 relative h-[45%]">
                <Link href="#" className="my-2 font-bold">
                  Taqvim title
                </Link>
                <h1>
                  Taqvim description Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.{" "}
                </h1>
                <h1 className="absolute bottom-[10px]">16:00 PM</h1>
              </div>
            </div>
            <div class="hs-carousel-slide border !p-2 rounded-xl">
              <div className="w-full border h-[55%] relative rounded-md overflow-hidden">
                <Link href="#">
                  <Image fill className="object-cover" src="/mdis img.jpg" />
                </Link>
                <div className="absolute bg-[--brand_color] px-4 py-2 rounded-md top-[2%] left-[2%] transform  h-50 text-white text-center text-lg flex items-center justify-center gap-1 uppercase">
                  <p>1</p>
                  <p>may</p>
                </div>
              </div>
              <div className="p-3 relative h-[45%]">
                <h1 className="my-2 font-bold">Taqvim title</h1>
                <h1>
                  Taqvim descriptionLink href="#"orem ipsum dolor sit amet
                  consectetur, adipisicing elit.{" "}
                </h1>
                <h1 className="absolute bottom-[10px]">16:00 PM</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TSlide;
