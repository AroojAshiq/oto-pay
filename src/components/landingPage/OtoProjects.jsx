import React, { useState } from "react";
import Image from "next/image";
import List from "@/assets/list.png";
import Card from "@/assets/card.png";
import ListCard from "../modules/ListCard";
import CardView from "../modules/CardView";
import { SearcIcon } from "@/icons/icon";

export default function OtoProjects() {
  const [state, setState] = useState("List");
  return (
    <div className="lg:p-10 p-5 w-full flex justify-center">
      <div className="lg:w-[1200px] w-full flex flex-col justify-center ">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[#9c79ba] text-3xl font-bold">OTO Projects</h1>
          <div className="md:flex hidden items-center gap-x-3">
            <div
              onClick={() => setState("List")}
              className="flex justify-center cursor-pointer items-center gap-x-1"
            >
              <Image src={List} alt="list" height={30} width={30} />
              <p>List View</p>
            </div>
            <div
              onClick={() => setState("Card")}
              className="flex justify-center cursor-pointer items-center gap-x-1"
            >
              <Image src={Card} alt="list" height={30} width={30} />
              <p>Card View</p>
            </div>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col justify-between space-y-3 md:items-center md:mt-8 mt-4">
          <div className="flex justify-between items-center gap-x-1 px-2 h-10 border rounded">
            <SearcIcon />
            <input
              type="text"
              placeholder="Filter properties"
              className="h-full w-full px-2 outline-none border-none"
            />
          </div>
          <div className="flex gap-x-2 ">
            <button
              type="button"
              className="text-white bg-[#9c79ba] shadow-lg focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
            >
              Active
            </button>
            <button
              type="button"
              className="text-white bg-[#D9CEF3] shadow-lg focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
            >
              Inactive
            </button>
          </div>
        </div>
        <div className="md:flex justify-between hidden lg:flex-row gap-y-4 lg:gap-y-0 gap-x-3 flex-col w-full mt-10">
          {state === "List" ? (
            <div className="space-y-4 w-full">
              <ListCard />
              <ListCard />
              <ListCard />
              <ListCard />
            </div>
          ) : (
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
              <CardView />
              <CardView />
              <CardView />
              <CardView />
            </div>
          )}
        </div>
        <div className="grid mt-5 md:hidden grid-cols-1 gap-5 w-full">
          <CardView />
          <CardView />
          <CardView />
          <CardView />
        </div>
      </div>
    </div>
  );
}
