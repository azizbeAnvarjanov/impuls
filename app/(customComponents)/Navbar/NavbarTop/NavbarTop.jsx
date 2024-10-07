import { Instagram } from 'lucide-react'
import { Youtube } from 'lucide-react'
import { Facebook } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavbarTop = () => {
  return (
    <div className='flex items-center justify-between p-3 bg-[#013ca6] text-white h-[8vh]'>
      <div className='flex gap-2'>
        <p>Ma'lumot markazi:</p>
        <Link href="#">+998 88 254 77 75</Link>
        <div className='flex items-center gap-4 ml-3'>
          <Instagram/>
          <Youtube/>
          <Facebook/>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <p>Rektorning virual qabulxonasi</p>
        <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] ">
                <button id="hs-header-base-dropdown" type="button" class="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-white hover:text-black hover:bg-white rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 2.5-2.5L3 5"/><path d="m3 19 2.5-2.5L3 14"/><path d="M10 6h11"/><path d="M10 12h11"/><path d="M10 18h11"/></svg>
                  Uz
                  <svg class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>

                <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-20 bg-red-900 hidden z-10 top-full ps-7 md:ps-0 md:bg-[#013ca6] shadow-xl text-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-header-base-dropdown">
                  <div class="py-1 md:px-1 space-y-0.5">
                    <Link class="p-2 text-center md:px-3 flex items-center justify-center text-sm text-white hover:text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                      En
                    </Link>


                    <Link class="p-2 md:px-3 flex items-center justify-center text-sm text-white hover:text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                      Ru
                    </Link>

                    <Link class="p-2 md:px-3 flex items-center justify-center text-sm text-white hover:text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                      Uz
                    </Link>
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default NavbarTop