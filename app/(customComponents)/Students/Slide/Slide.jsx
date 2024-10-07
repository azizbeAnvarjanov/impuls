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
            "lg": 4
          },
          "isDraggable": true,
          "isAutoPlay": true
        }'
      class="relative"
    >
      <div class="hs-carousel w-full overflow-hidden bg-white rounded-lg">
        <div class="relative min-h-[50vh] -mx-1">
          <div class="hs-carousel-body p-2 absolute top-0 bottom-0 start-0 flex flex-nowrap gap-3 opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
            <div class="hs-carousel-slide !p-2 rounded-xl relative flex justify-center items-center">
              <Link href="#">
                <Image
                  width={600}
                  height={100}
                  className="object-cover rounded-full w-[200px] h-[200px]"
                  src="/student 1.jpg"
                />
              </Link>
            </div>
            <div class="hs-carousel-slide !p-2 rounded-xl relative flex justify-center items-center">
              <Link href="#">
                <Image
                  width={600}
                  height={100}
                  className="object-cover rounded-full w-[200px] h-[200px]"
                  src="/student 2.png"
                />
              </Link>
            </div>
            <div class="hs-carousel-slide !p-2 rounded-xl relative flex justify-center items-center">
              <Link href="#">
                <Image
                  width={600}
                  height={100}
                  className="object-cover rounded-full w-[200px] h-[200px]"
                  src="/student 3.jpg"
                />
              </Link>
            </div>
            <div class="hs-carousel-slide !p-2 rounded-xl relative flex justify-center items-center">
              <Link href="#">
                <Image
                  width={600}
                  height={100}
                  className="object-cover rounded-full w-[200px] h-[200px]"
                  src="/student 4.jpg"
                />
              </Link>
            </div>
            <div class="hs-carousel-slide !p-2 rounded-xl relative flex justify-center items-center">
              <Link href="#">
                <Image
                  width={600}
                  height={100}
                  className="object-cover rounded-full w-[200px] h-[200px]"
                  src="/student 5.jpg"
                />
              </Link>
            </div>
            <div class="hs-carousel-slide !p-2 rounded-xl relative flex justify-center items-center">
              <Link href="#">
                <Image
                  width={600}
                  height={100}
                  className="object-cover rounded-full w-[200px] h-[200px]"
                  src="/student 6.jpg"
                />
              </Link>
            </div>
            <div class="hs-carousel-slide !p-2 rounded-xl relative flex justify-center items-center">
              <Link href="#">
                <Image
                  width={600}
                  height={100}
                  className="object-cover rounded-full w-[200px] h-[200px]"
                  src="/student 7.jpg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[100px] h-fit justify-between relative mb-10 z-10">
        <button
          type="button"
          class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none  bg-[--brand_color] absolute left-0 top-0 w-[45px] h-[45px] rounded-l-lg flex items-center justify-center text-white"
        >
          <span class="text-2xl" aria-hidden="true">
            <svg
              class="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          type="button"
          class="hs-carousel-next hs-carousel-disabled:pointer-events-none bg-[--brand_color] absolute w-[45px] h-[45px] rounded-r-lg flex items-center right-0 top-0 justify-center text-white z-10"
        >
          <span class="sr-only">Next</span>
          <span class="text-2xl" aria-hidden="true">
            <svg
              class="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slide;
