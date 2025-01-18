import React from "react";
import { CiCreditCardOff } from "react-icons/ci";
import { LuArrowBigRightDash } from "react-icons/lu";
import { RiFileListLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";

const CardPage = () => {
  return (
    <div className="flex mt-5 justify-center items-center bg-purple-800  transition rounded-lg">
      <div className=" shadow-2xl rounded-lg p-10 w-full max-w-5xl">
        <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex  items-center p-6 ">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition rounded-lg text-white text-3xl">
              <LuArrowBigRightDash />
            </div>

            <p className="mt-4 ml-3 text-lg font-semibold">Fast Transactions</p>
          </div>

          <div className="flex  items-center p-6 ">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition rounded-lg text-white text-3xl">
              <RiFileListLine />
            </div>

            <p className="mt-4 ml-3 text-lg font-semibold"> Verified Users</p>
          </div>
          <div className="flex  items-center p-6 ">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition rounded-lg text-white text-3xl">
              <SlBadge />
            </div>

            <p className="mt-4 ml-3 text-lg font-semibold"> 24/7 Support</p>
          </div>

          <div className="flex  items-center p-6 ">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition rounded-lg text-white text-3xl">
              <CiCreditCardOff />
            </div>

            <p className="mt-4 ml-3 text-lg font-semibold"> No Hidden Fees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
