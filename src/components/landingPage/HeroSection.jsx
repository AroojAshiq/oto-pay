import React from "react";
import { useState } from "react";

export default function HeroSection() {
  const [flyer, setFlyer] = useState(false);
  return (
    <div className="bg-gradient-to-r h-[500px] justify-center items-center from-[#9c79ba] to-[#d9cfe3] flex ">
      <div className="flex md:flex-row flex-col justify-center md:gap-x-3 gap-y-3 items-center p-5 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
        <div className="w-full">
          <div className="relative w-full border">
            <button
              id="dropdownDelayButton"
              data-dropdown-toggle="dropdownDelay"
              data-dropdown-delay="500"
              data-dropdown-trigger="hover"
              className="text-white w-full justify-between outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
              onClick={() => setFlyer(!flyer)}
            >
              <p className="text-white">Places</p>
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdownDelay"
              className={` ${
                flyer ? "block" : "hidden"
              } z-40 absolute w-full border bg-white divide-y divide-gray-100 shadow dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDelayButton"
              >
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Lahore
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Karachi
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-10">
          <input
            type="text"
            placeholder="Location"
            className="h-full px-2 outline-none border-none"
          />
        </div>
        <div className="w-full">
          <button className="px-3 h-10 md:w-20 w-full text-white bg-[#9c79ba]">
            Find
          </button>
        </div>
      </div>
    </div>
  );
}
