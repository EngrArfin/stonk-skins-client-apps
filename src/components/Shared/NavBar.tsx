import Link from "next/link";
import logo from "../UI/icon/logo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar bg-purple-950">
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
            <a className="btn">Sign UP </a>
            <a className="btn">Login With</a>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Image src={logo} alt="" height={80} width={80} />
        </a>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Skins..."
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <div className="navbar-end">
        <Link href="">Market</Link>
        <a className="btn">Sign UP </a>
        <a className="btn">Login With</a>
      </div>
    </div>
  );
};

export default NavBar;
