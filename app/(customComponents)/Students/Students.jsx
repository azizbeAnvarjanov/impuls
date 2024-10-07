import React from 'react'
import Slide from './Slide/Slide'
import Link from 'next/link'

const Students = () => {
  return (
    <div className="h-fit p-10">
      <div>
        <div>
        <div className="w-full flex justify-between">
          <h1 className="text-3xl uppercase relative mb-10">
            Fahrli talabalar
            <span className="h-[2px] w-[50%] bg-[--brand_color] absolute left-0 bottom-[-10px]"></span>
          </h1>
          <Link href="#" className="underline">Hammasini ko'rish</Link>
        </div>
          <Slide />
        </div>
      </div>
    </div>
  )
}

export default Students