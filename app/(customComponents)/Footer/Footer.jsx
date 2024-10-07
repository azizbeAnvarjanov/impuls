import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="font-sans tracking-wide bg-[--brand_color] px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        <div>
          <div className="flex items-center gap-4 ml-3 text-white">
            <Link href="#">
              <Instagram />
            </Link>
            <Link href="#">
              <Youtube />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
          </div>
        </div>

        <div>
          <h4 class="text-white font-semibold text-lg relative max-sm:cursor-pointer">
            Institut{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              class="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>

          <ul class="mt-6 space-y-5">
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Rektor murojati
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Biz haqimizda
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Tarixi
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Tashkiliy tuzilma
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Institutga tashrif
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold text-lg relative max-sm:cursor-pointer">
            Xalqaro faoliyat{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              class="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>
          <ul class="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Xalqaro hamkorlik
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Xalqaro talabalar
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Xalqaro loyihalar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold text-lg relative max-sm:cursor-pointer">
          Tadqiqot va inovatsiyalar{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              class="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>

          <ul class="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Ma'ruzalar
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                E'lonlar
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Ilmiy kengash
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Aloqa
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                So'rovnomalar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold text-lg relative max-sm:cursor-pointer">
            Grantlar{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              class="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>

          <ul class="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-white text-gray-300 text-sm"
              >
                Bakalavr granti
              </a>
            </li>
            
          </ul>
        </div>
      </div>

      <hr class="my-10 border-gray-400" />

      <div class="flex flex-wrap max-md:flex-col gap-4">
        <ul class="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <a
              href="javascript:void(0)"
              class="hover:text-white text-gray-300 text-sm"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="hover:text-white text-gray-300 text-sm"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="hover:text-white text-gray-300 text-sm"
            >
              Security
            </a>
          </li>
        </ul>

        <p class="text-gray-300 text-sm md:ml-auto">
          © ReadymadeUI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
