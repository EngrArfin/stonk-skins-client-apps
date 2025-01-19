import Image from "next/image";
import header from "../UI/image/header.png";

const Header = () => {
  return (
    <div className="bg-950   min-h-screen flex items-center justify-center">
      <div className="flex">
        <div className="max-w-4xl mt-20 px-6 md:px-12">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-[Poppins] font-bold text-white leading-tight">
            The Ultimate <span className="text-pink-400">CS 2</span>
            <br />
            <span className="text-pink-400">Marketplace</span> for Gamers
            <br />
            Who Mean Business
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-6">
            Buy, sell, and trade skins securely with unbeatable prices and
            transparency.
          </p>
          <button className="mt-8 px-8 py-3 font-[DM Sans] text-lg font-medium rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg shadow-pink-400/30 hover:scale-105 hover:from-purple-500 hover:to-pink-400 transition-transform duration-300">
            Login with Steam
          </button>
        </div>

        <div className="mt-[66px] hidden lg:block">
          <Image src={header} alt="Header Graphic" height={455} width={531} />
        </div>
      </div>
    </div>
  );
};

export default Header;
