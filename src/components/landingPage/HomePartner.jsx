import React from "react";
import Home from "@/assets/home.svg";
import Image from "next/image";

export default function HomePartner() {
  return (
    <div className="lg:p-10 p-5 w-full flex justify-center border bg-gray-200">
      <div className="lg:w-[1200px] w-full flex flex-col justify-center ">
        <div className="w-full">
          <h1 className="text-[#9c79ba] text-xl font-bold">
            Our Home Partners
          </h1>

          <div className="border flex justify-center bg-gray-300 w-52 h-[60px] mt-4">
            <Image src={Home} />
          </div>
        </div>
      </div>
    </div>
  );
}
