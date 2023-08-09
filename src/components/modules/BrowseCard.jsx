import React, { useState } from "react";
import Image from "next/image";
import Slider from "../modules/Slider";
import PropTypes from "prop-types";

export default function BrowseCard(props) {
  const [papular, setpapular] = useState(true);
  const [type, setType] = useState(false);
  const [area, setArea] = useState(false);
  return (
    <div>
      <div className="h-auto w-full border rounded-lg py-4">
        <div className="flex items-center lg:gap-x-4 px-5">
          <Image src={props.Picture} alt="home" height={40} width={40} />
          <p className="font-semibold text-lg">{props.name}</p>
        </div>
        <div className="flex px-5 pt-5">
          <ul className="flex w-full items-center gap-x-10 font-medium md:p-0 lg:mt-4 border-gray-100 rounded-lg ">
            <li
              className=" relative cursor-pointer"
              onClick={() => {
                setpapular(true);
                setArea(false);
                setType(false);
              }}
            >
              <p className=" text-sm text-gray-500 font-medium leading-5 pb-2">
                Papular
              </p>
              <hr
                className={`border-1 ${
                  papular ? "visible " : "invisible"
                } border-[#120563] cursor-pointe transition-all duration-500 `}
              />
            </li>
            <li
              className=" relative cursor-pointer"
              onClick={() => {
                setpapular(false);
                setArea(false);
                setType(true);
              }}
            >
              <p className="text-sm text-gray-500 font-medium leading-5 pb-2">
                Type
              </p>
              <hr
                className={`border-1 ${
                  type ? "visible " : "invisible"
                } border-[#120563] cursor-pointe transition-all duration-500`}
              />
            </li>
            <li
              className=" relative cursor-pointer"
              onClick={() => {
                setpapular(false);
                setArea(true);
                setType(false);
              }}
            >
              <p className="text-sm text-gray-500 font-medium leading-5 pb-2">
                Area Size
              </p>
              <hr
                className={`border-1 ${
                  area ? "visible " : "invisible"
                } border-[#120563] cursor-pointe transition-all duration-500`}
              />
            </li>
          </ul>
        </div>

        <div className="border-t">
          <Slider />
        </div>
      </div>
    </div>
  );
}

BrowseCard.propTypes = {
  name: PropTypes.string.isRequired,
  Picture: PropTypes.string.isRequired,
};
