import React from "react";
import Image from "next/image";
import House from "@/assets/house.jpg";
import Rate from "@/assets/rate.png";
import Parking from "@/assets/parking.png";
import Wifi from "@/assets/wifi.png";
import Heater from "@/assets/heater.png";
import Cleaning from "@/assets/cleaning.png";
import Location from "@/assets/location.svg";

export default function ListCard() {
  return (
    <div className="border w-full flex justify-between items-center p-5 rounded-lg">
      <div className="flex gap-x-3 h-full">
        <div>
          <Image
            src={House}
            alt="place"
            width={200}
            className="h-full rounded-lg"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-lg leading-7 font-semibold">
              1396 redmond street
            </h1>
            <div className="flex gap-x-2">
              <Image src={Rate} alt="rate" height={20} width={20} />
              <Image src={Rate} alt="rate" height={20} width={20} />
              <Image src={Rate} alt="rate" height={20} width={20} />
              <Image src={Rate} alt="rate" height={20} width={20} />
              <Image src={Rate} alt="rate" height={20} width={20} />
            </div>
          </div>
          <div className=" flex gap-x-1">
            <Image src={Location} alt="location" height={15} width={15} />
            <p className="text-gray-500 text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              reiciendis iste.
            </p>
          </div>
          <div className="w-1/2 flex justify-between items-center gap-x-1 px-1">
            <p className="text-sm font-medium text-gray-700">5 rooms</p>
            <p className="-mt-1">.</p>
            <p className="text-sm font-medium text-gray-700">3 bed </p>
            <p className="-mt-1">.</p>
            <p className="text-sm font-medium text-gray-700">1 bathroom</p>
          </div>
          <div className="flex gap-x-3">
            <div className="flex gap-x-1 items-center">
              <Image src={Parking} height={15} width={20} />
              <p className="text-xs text-gray-500">Parking</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <Image src={Wifi} height={15} width={20} />
              <p className="text-xs text-gray-500">Wifi</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <Image src={Heater} height={15} width={20} />
              <p className="text-xs text-gray-500">Heater</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <Image src={Cleaning} height={15} width={20} />
              <p className="text-xs text-gray-500">Cleaning</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-3 lg:space-y-0 items-center gap-x-2">
        <button
          type="button"
          className="text-white md:w-24 lg:w-28 bg-[#D9CEF3] shadow-lg focus:outline-none font-medium rounded-lg lg:text-sm text-[10px] px-4 py-2 text-center mr-3 md:mr-0 "
        >
          More Info
        </button>
        <button
          type="button"
          className="text-white md:w-24 lg:w-28 bg-[#9c79ba] shadow-lg focus:outline-none font-medium rounded-lg lg:text-sm text-[10px] px-4 py-2 text-center mr-3 md:mr-0 "
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
