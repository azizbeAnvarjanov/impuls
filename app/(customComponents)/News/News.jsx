import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <>
      <div className="p-10 ">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl uppercase relative mb-10">
            So'ngi yangiliklar
            <span className="h-[2px] w-[50%] bg-[--brand_color] absolute left-0 bottom-[-10px]"></span>
          </h1>
          <Link href="#" className="underline">Hammasini ko'rish</Link>
        </div>
        {/* new grid */}

        <div>
          <div class="grid grid-cols-4 gap-4">
            <Link href="#" class="newsLink before:w-full before:h-full before:bg-black before:bg-opacity-40 before:absolute before:left-0 before:top-0 overflow-hidden relative p-5 rounded-xl shadow-lg col-span-2 border h-[55vh]">
              <h1 className="text-3xl font-semibold text-white absolute top-10 left-10">News title</h1>
              <Image fill className="object-cover -z-10 transition-all ease-in" src="/news 1.png"/>
              <h1 className="absolute font-medium bottom-10 left-10 text-white">12 Noyabr 2024</h1>
            </Link>
            <Link href="#" class="newsLink before:w-full before:h-full before:bg-black before:bg-opacity-40 before:absolute before:left-0 before:top-0 overflow-hidden relative p-5 rounded-xl shadow-lg col-span-2 border h-[55vh]">
              <h1 className="text-3xl font-semibold text-white absolute top-10 left-10">News title</h1>
              <Image fill className="object-cover -z-10 transition-all ease-in" src="/news 2.jpeg"/>
              <h1 className="absolute font-medium bottom-10 left-10 text-white">12 Noyabr 2024</h1>
            </Link>
            <Link href="#" class="newsLink before:w-full before:h-full before:bg-black before:bg-opacity-40 before:absolute before:left-0 before:top-0 overflow-hidden relative p-5 rounded-xl shadow-lg border h-[40vh]">
              <h1 className="text-3xl font-semibold text-white absolute top-10 left-10">News title</h1>
              <Image fill className="object-cover -z-10 transition-all ease-in" src="/news 3.jpeg"/>
              <h1 className="absolute font-medium bottom-10 left-10 text-white">12 Noyabr 2024</h1>
            </Link>
            <Link href="#" class="newsLink before:w-full before:h-full before:bg-black before:bg-opacity-40 before:absolute before:left-0 before:top-0 overflow-hidden relative p-5 rounded-xl shadow-lg border h-[40vh]">
              <h1 className="text-3xl font-semibold text-white absolute top-10 left-10">News title</h1>
              <Image fill className="object-cover -z-10 transition-all ease-in" src="/new 4.jpeg"/>
              <h1 className="absolute font-medium bottom-10 left-10 text-white">12 Noyabr 2024</h1>
            </Link>
            <Link href="#" class="newsLink before:w-full before:h-full before:bg-black before:bg-opacity-40 before:absolute before:left-0 before:top-0 overflow-hidden relative p-5 rounded-xl shadow-lg border h-[40vh] col-span-2">
              <h1 className="text-3xl font-semibold text-white absolute top-10 left-10">News title</h1>
              <Image fill className="object-cover -z-10 transition-all ease-in" src="/news 5.jpg"/>
              <h1 className="absolute font-medium bottom-10 left-10 text-white">12 Noyabr 2024</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
