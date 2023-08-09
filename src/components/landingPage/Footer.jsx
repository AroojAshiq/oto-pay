import React from "react";
import Image from "next/image";
import Location from "@/assets/location.svg";
import Phone from "@/assets/phone.png";
import Message from "@/assets/message.png";
import Facebook from "@/assets/facebook.png";
import Youtube from "@/assets/youtube.svg";
import Twitter from "@/assets/twitter.png";
import Linkedin from "@/assets/linkedin.png";
import Instagram from "@/assets/instagram.svg";

export default function Footer() {
  return (
    <>
      <div className="lg:p-10 p-5 w-full flex justify-center bg-black">
        <div className="lg:w-[1200px] w-full flex flex-col justify-center ">
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <h1 className="text-lg font-medium text-white">Houses</h1>
              <ul className=" space-y-1 md:mt-7 mt-3">
                <li className="text-white font-normal text-sm">About us</li>
                <li className="text-white font-normal text-sm">Contact us</li>
                <li className="text-white font-normal text-sm">Jobs </li>
                <li className="text-white font-normal text-sm">
                  Help & Support
                </li>
                <li className="text-white font-normal text-sm">
                  Advertise on OTO-PAY
                </li>
                <li className="text-white font-normal text-sm">Term Of Use</li>
              </ul>
            </div>

            <div>
              <h1 className="text-lg font-medium text-white">Connect</h1>
              <ul className=" space-y-1 md:mt-7 mt-3">
                <li className="text-white font-normal text-sm">Blog</li>
                <li className="text-white font-normal text-sm">News</li>
                <li className="text-white font-normal text-sm">Forum </li>
                <li className="text-white font-normal text-sm">Expo</li>
                <li className="text-white font-normal text-sm">
                  Real Estate Agents
                </li>
                <li className="text-white font-normal text-sm">Add Property</li>
              </ul>
            </div>

            <div>
              <h1 className="text-lg font-medium text-white">Head Office</h1>
              <ul className=" space-y-3 md:mt-7 mt-3">
                <li className="text-white font-normal flex gap-x-5 items-center">
                  <Image
                    src={Location}
                    alt="location"
                    height={15}
                    width={15}
                    className="-mt-5"
                  />
                  <p className="text-sm w-1/2 ">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>
                <li className="text-white font-normal flex gap-x-5 items-center">
                  <Image
                    src={Phone}
                    alt="Call"
                    height={18}
                    width={18}
                    className="-mt-5"
                  />
                  <div>
                    <p className="text-sm ">0000-12345</p>
                    <p className="text-sm ">Monday To Sunday 9AM To 6PM</p>
                  </div>
                </li>
                <li className="text-white font-normal flex gap-x-5 items-center">
                  <Image src={Message} alt="location" height={15} width={15} />
                  <p className="text-sm">Email us</p>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-lg font-medium text-white">Get Connected</h1>
              <ul className=" space-y-1 flex md:mt-7 mt-3">
                <li className="text-white font-normal text-sm mt-1">
                  <Image src={Facebook} alt="Facebook" height={40} width={40} />
                </li>
                <li className="text-white font-normal text-sm">
                  <Image
                    src={Instagram}
                    alt="Facebook"
                    height={40}
                    width={40}
                  />
                </li>
                <li className="text-white font-normal text-sm">
                  <Image src={Linkedin} alt="Facebook" height={40} width={40} />
                </li>
                <li className="text-white font-normal text-sm">
                  <Image src={Twitter} alt="Facebook" height={40} width={40} />
                </li>
                <li className="text-white font-normal text-sm">
                  <Image src={Youtube} alt="Facebook" height={40} width={40} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14 w-full flex justify-center items-center">
        <p className="md:text-base text-xs font-medium ">
          © Copyright 2023 OTO-PAY. All Rights Reserved
        </p>
      </div>
    </>
  );
}
