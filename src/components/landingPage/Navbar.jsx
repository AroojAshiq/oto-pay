import React, { useState } from "react";
import { Menu } from "@/icons/icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="bg-[#9C79BA] border-gray-200 dark:bg-gray-900 flex justify-between items-center py-2 px-5">
        <div className="max-w-screen-xl flex flex-wrap items-center gap-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="_4739b2db"
            height={25}
            width={25}
          >
            <path
              fill="#FFF"
              d="M29.3 10.4V5h-7.5L16 .8.1 12.3v8.2l2.2-2.2v12.9H12v-7.8h8v7.8h9.7V18.3l2.2 2.2v-8.3l-2.6-1.8z"
            ></path>
          </svg>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="lg:flex hidden items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-90t">
              <li className="group relative">
                <p className="text-white lg:text-sm text-xs font-medium leading-5">
                  PROPERTIES
                </p>
                <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative">
                <p className="text-white uppercase lg:text-sm text-xs font-medium leading-5">
                  Plot finder
                </p>
                <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative">
                <p className="text-white uppercase lg:text-sm text-xs font-medium leading-5">
                  area guides
                </p>
                <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative">
                <p className="text-white uppercase lg:text-sm text-xs font-medium leading-5">
                  blog
                </p>
                <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative">
                <p className="text-white uppercase lg:text-sm text-xs font-medium leading-5">
                  map
                </p>
                <hr className="border-1 border-[#120563] uppercase cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative">
                <p className="text-white lg:text-sm uppercase text-xs font-medium leading-5">
                  Tools
                </p>
                <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="bg-white h-8 w-10 flex lg:hidden justify-center items-center rounded"
        >
          <button className="flex text-[#9172B5] hover:text-[#D9CEF3] ">
            <Menu />
          </button>
        </div>
        <div className="lg:flex gap-x-4 md:order-2 hidden">
          <button
            type="button"
            className="text-white bg-[#D9CEF3] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Add Property
          </button>
          <button
            type="button"
            className="text-white bg-[#D9CEF3] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Add Request
          </button>
        </div>
      </nav>

      <div
        className={
          open
            ? "opacity-100 scale-100 z-20 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
            : "opacity-0 scale-95 absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden hidden"
        }
      >
        <div className="rounded-lg shadow-lg bg-[#d9cef3] divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between ">
              <div>
                <h1 className="text-[#9c79ba] lg:text-3xl text-lg font-medium">
                  OTO-PAY
                </h1>
              </div>
              <div className="-mr-2 ">
                <button
                  type="button"
                  className=" dark:bg-[#d9cef3] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  "
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-5 bg-[#d9cef3]">
                <ul className="h-full flex flex-col items-start gap-y-2 text-white">
                  <li className="group relative">
                    <p className="text-[#0A2540] lg:text-sm text-xs font-medium leading-5">
                      PROPERTIES
                    </p>
                    <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] uppercase lg:text-sm text-xs font-medium leading-5">
                      Plot finder
                    </p>
                    <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] uppercase lg:text-sm text-xs font-medium leading-5">
                      area guides
                    </p>
                    <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] uppercase lg:text-sm text-xs font-medium leading-5">
                      blog
                    </p>
                    <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] uppercase lg:text-sm text-xs font-medium leading-5">
                      map
                    </p>
                    <hr className="border-1 border-[#120563] uppercase cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] lg:text-sm uppercase text-xs font-medium leading-5">
                      Tools
                    </p>
                    <hr className="border-1 border-[#120563] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li>
                    <div className="flex gap-x-4 md:order-2">
                      <button
                        type="button"
                        className="text-white bg-[#9c79ba] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                      >
                        Add Property
                      </button>
                      <button
                        type="button"
                        className="text-white bg-[#9c79ba] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                      >
                        Add Request
                      </button>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
