import React from "react";
import Image from "next/image";
import House from "@/assets/house.jpg";
import Rate from "@/assets/rate.png";
import Parking from "@/assets/parking.png";
import Wifi from "@/assets/wifi.png";
import Heater from "@/assets/heater.png";
import Cleaning from "@/assets/cleaning.png";
import Location from "@/assets/location.svg";

export default function CardView() {
  return (
    <div className="border w-full flex flex-col justify-between p-4 rounded-lg">
      <div className="flex flex-col gap-x-3 h-full">
        <div className="h-48">
          <Image
            src={House}
            alt="place"
            width={1000}
            className="h-full rounded-lg"
          />
        </div>

        <div className="flex flex-col mt-2 space-y-3">
          <div className=" gap-x-3">
            <h1 className="text-lg leading-7 font-semibold">
              1396 redmond street
            </h1>
            <div className="flex gap-x-2 mt-1">
              <Image src={Rate} alt="rate" height={20} width={20} />
              <Image src={Rate} alt="rate" height={20} width={20} />
              <Image src={Rate} alt="rate" height={20} width={20} />
              <Image src={Rate} alt="rate" height={20} width={20} />
              <Image src={Rate} alt="rate" height={20} width={20} />
            </div>
          </div>
          <div className=" flex items-center justify-center gap-x-1">
            <Image
              src={Location}
              alt="location"
              height={15}
              width={15}
              className="-mt-3"
            />
            <p className="text-gray-500 text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              reiciendis iste.
            </p>
          </div>
          <div className="w-full flex justify-between items-center gap-x-1 px-1">
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

      <div className="flex items-center mt-5 gap-x-2 md:order-2">
        <button
          type="button"
          className="text-white bg-[#D9CEF3] shadow-lg focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
        >
          More Info
        </button>
        <button
          type="button"
          className="text-white bg-[#9c79ba] shadow-lg focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
