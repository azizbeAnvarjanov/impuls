import Image from "next/image";
import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div className="flex items-center justify-end p-3 bg-white bg-opacity-40 shadow-lg h-[8vh] font-semibold">
      <div className="w-[50%] relative">
        <Link href="/">
          <Image
            src="/IMI logo circle 1.png"
            width={100}
            height={60}
            className="w-10 h-10"
            alt=""
          />
        </Link>
      </div>
      <div className="w-[50%] flex items-center justify-end">
        <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] md:[--trigger:hover] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
          <button
            id="hs-header-base-dropdown"
            type="button"
            class="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <svg
              class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
              <path d="m3 10 2.5-2.5L3 5" />
              <path d="m3 19 2.5-2.5L3 14" />
              <path d="M10 6h11" />
              <path d="M10 12h11" />
              <path d="M10 18h11" />
            </svg>
            Institut
            <svg
              class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-header-base-dropdown"
          >
            <div class="py-1 md:px-1 space-y-0.5">
              <Link
                class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                Rektor Murojati
              </Link>

              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                <button
                  id="hs-header-base-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  Biz haqimizda
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-0 md:!mx-[0px] md:top-0 md:start-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Hamkor universitetlar
                    </Link>

                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Asosiy qadriyatlar
                    </Link>

                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Sifat siyosati va maqsadlar
                    </Link>
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Asosiy meyoriy hujjatlar
                    </Link>
                  </div>
                </div>
              </div>
              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                <button
                  id="hs-header-base-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  Tarixi
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-0 md:!mx-[0px] md:top-0 md:start-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                Aloqa
              </Link>
              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                <button
                  id="hs-header-base-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  Tashkiliy tuzilma
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-0 md:!mx-[0px] md:top-0 md:start-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Direktorlar kengashi
                    </Link>
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Institut ma'muryati
                    </Link>
                  </div>
                </div>
              </div>

              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                <button
                  id="hs-header-base-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  Institutga tashrif
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-0 md:!mx-[0px] md:top-0 md:start-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Institutga sayohat
                    </Link>
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Institut xaritasi
                    </Link>
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Institut manzili
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] md:[--trigger:hover] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
          <button
            id="hs-header-base-dropdown"
            type="button"
            class="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <svg
              class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
              <path d="m3 10 2.5-2.5L3 5" />
              <path d="m3 19 2.5-2.5L3 14" />
              <path d="M10 6h11" />
              <path d="M10 12h11" />
              <path d="M10 18h11" />
            </svg>
            Xalqaro faoliyat
            <svg
              class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu  transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-[300px] hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-header-base-dropdown"
          >
            <div class="py-1 md:px-1 space-y-0.5 ">
              <a
                class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                Xalqaro hamkorlik
              </a>

              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                <button
                  id="hs-header-base-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  Xalqaro talabalarni qo'llab quvatlash
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-0 md:!mx-[0px] md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Xalqaro talabalar
                    </Link>
                  </div>
                </div>
              </div>

              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                <button
                  id="hs-header-base-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  Xalqaro loyihalar
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-0 md:!mx-[0px] md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Talabalar almashinuvi dasturi
                    </Link>

                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Xalqaro malaka oshirish
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] md:[--trigger:hover] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
          <button
            id="hs-header-base-dropdown"
            type="button"
            class="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <svg
              class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
              <path d="m3 10 2.5-2.5L3 5" />
              <path d="m3 19 2.5-2.5L3 14" />
              <path d="M10 6h11" />
              <path d="M10 12h11" />
              <path d="M10 18h11" />
            </svg>
            Tadqiqot va inovatsiyalar
            <svg
              class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-header-base-dropdown"
          >
            <div class="py-1 md:px-1 space-y-0.5">
              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                <button
                  id="hs-header-base-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  Konfenersiya va tadbirlar
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-0 md:!mx-[0px] md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Ma'ruzalar
                    </Link>

                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Konferensiyalar taqvimi
                    </Link>
                  </div>
                </div>
              </div>
              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                <button
                  id="hs-header-base-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  E'lonlar
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-0 md:!mx-[0px] md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      So'rovlnomalar
                    </Link>
                    <Link
                      class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Maqola yozuvchilar
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                Tadqiqotlar video seriyasi
              </Link>

              <Link
                class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                Ilmiy kengash
              </Link>
            </div>
          </div>
        </div>

        <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] md:[--trigger:hover] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
          <button
            id="hs-header-base-dropdown"
            type="button"
            class="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <svg
              class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
              <path d="m3 10 2.5-2.5L3 5" />
              <path d="m3 19 2.5-2.5L3 14" />
              <path d="M10 6h11" />
              <path d="M10 12h11" />
              <path d="M10 18h11" />
            </svg>
            Grantlar
            <svg
              class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-header-base-dropdown"
          >
            <div class="py-1 md:px-1 space-y-0.5">
              <Link
                class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                Bakalavr grantlari
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
