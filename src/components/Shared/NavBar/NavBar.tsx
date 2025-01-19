import Link from "next/link";
import logo from "../../UI/icon/logo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar bg-purple-950   ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <a className="ml-2 px-6 py-3 font-[DM Sans] rounded-full bg-gradient-to-r from-purple-500 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition">
              Sign UP
            </a>
            <a className="ml-2 px-6 py-3 font-[DM Sans] rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition">
              Login with Steam
            </a>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Image src={logo} alt="" height={80} width={80} />
        </a>
        <div className="form-control hidden lg:block">
          <div className="relative w-[320px] h-[52px] bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 border-[1.5px] border-purple-400 rounded-full flex items-center shadow-lg">
            <input
              type="text"
              placeholder="Search Skins..."
              className="w-full h-full pl-6 pr-16 bg-transparent text-purple-200 placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
            />
            <div className="absolute right-3 bg-purple-600 w-[38px] h-[38px] rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-end text-white">
        <Link href="" className="font-[DM Sans]  mr-3 hidden lg:block">
          Market
        </Link>
        <a className="ml-2 px-6 py-3 font-[DM Sans] rounded-full bg-gradient-to-r from-purple-500 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition ">
          Sign UP
        </a>
        <a className="ml-2 px-6 py-3 font-[DM Sans] rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 transition hidden lg:block">
          Login with Steam
        </a>
      </div>
    </div>
  );
};

export default NavBar;
