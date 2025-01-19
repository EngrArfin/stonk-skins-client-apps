import React from "react";
import { CiCreditCardOff } from "react-icons/ci";
import { LuArrowBigRightDash } from "react-icons/lu";
import { RiFileListLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";

const CardPage = () => {
  return (
    <div className="flex h-auto mt-5 justify-center items-center bg-purple-800 transition rounded-lg px-4 sm:px-6 md:px-8">
      <div className=" rounded-lg py-8 px-4 w-full max-w-5xl">
        <div className="grid text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center p-4 md:p-6">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition rounded-lg text-white text-3xl">
              <LuArrowBigRightDash />
            </div>
            <p className="ml-4 text-base sm:text-lg font-semibold">
              Fast Transactions
            </p>
          </div>

          <div className="flex items-center p-4 md:p-6">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition rounded-lg text-white text-3xl">
              <RiFileListLine />
            </div>
            <p className="ml-4 text-base sm:text-lg font-semibold">
              Verified Users
            </p>
          </div>

          <div className="flex items-center p-4 md:p-6">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition rounded-lg text-white text-3xl">
              <SlBadge />
            </div>
            <p className="ml-4 text-base sm:text-lg font-semibold">
              24/7 Support
            </p>
          </div>

          <div className="flex items-center p-4 md:p-6">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition rounded-lg text-white text-3xl">
              <CiCreditCardOff />
            </div>
            <p className="ml-4 text-base sm:text-lg font-semibold">
              No Hidden Fees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
