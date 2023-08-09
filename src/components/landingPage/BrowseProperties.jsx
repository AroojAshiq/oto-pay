import React from "react";
import BrowseCard from "../modules/BrowseCard";
import Plot from "@/assets/plot.png";
import Home from "@/assets/home.svg";

export default function BrowseProperties() {
  return (
    <div className="lg:p-10 p-5 w-full flex justify-center">
      <div className="xl:w-[1200px] w-full flex flex-col justify-center ">
        <h1 className="text-[#9c79ba] text-3xl font-bold ">
          Browse Papularties
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-between lg:flex-row gap-y-4 lg:gap-y-0 gap-x-3 flex-col w-full mt-10 ">
          <BrowseCard name={"Home"} Picture={Home} />
          <BrowseCard name={"Plot"} Picture={Plot} />
          <BrowseCard name={"Commercial"} Picture={Home} />
        </div>
      </div>
    </div>
  );
}
