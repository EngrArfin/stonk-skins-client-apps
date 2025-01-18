import Link from "next/link";

const NavBarBelow = () => {
  return (
    <div className="bg-purple-950">
      <div className="flex flex-wrap justify-between md:justify-around items-center px-4 py-2">
        <div className="mb-2 md:mb-0">
          <Link
            href=""
            className="flex items-center text-white text-sm md:text-base transition hover:text-pink-400"
          >
            Apple
            <span className="ml-1 text-purple-700 bg-purple-950 px-2  rounded-sm shadow-md shadow-purple-500 hover:scale-105 transition-transform duration-300">
              c
            </span>
          </Link>
        </div>
        <div className="mb-2 md:mb-0">
          <Link
            href=""
            className="flex items-center text-white text-sm md:text-base transition hover:text-pink-400"
          >
            Samsung
            <span className="ml-1 text-white bg-purple-950 px-2  rounded-sm shadow-md shadow-purple-500 hover:scale-105 transition-transform duration-300">
              c
            </span>
          </Link>
        </div>
        <div className="mb-2 md:mb-0">
          <Link
            href=""
            className="flex items-center text-white text-sm md:text-base transition hover:text-pink-400"
          >
            Oppo
            <span className="ml-1 text-white bg-purple-950 px-2  rounded-sm shadow-md shadow-purple-500 hover:scale-105 transition-transform duration-300">
              c
            </span>
          </Link>
        </div>
        <div className="mb-2 md:mb-0">
          <Link
            href=""
            className="flex items-center text-white text-sm md:text-base transition hover:text-pink-400"
          >
            Vivo
            <span className="ml-1 text-white bg-purple-950 px-2  rounded-sm shadow-md shadow-purple-500 hover:scale-105 transition-transform duration-300">
              c
            </span>
          </Link>
        </div>
        <div className="mb-2 md:mb-0">
          <Link
            href=""
            className="flex items-center text-white text-sm md:text-base transition hover:text-pink-400"
          >
            Lenovo
            <span className="ml-1 text-white bg-purple-950 px-2  rounded-sm shadow-md shadow-purple-500 hover:scale-105 transition-transform duration-300">
              c
            </span>
          </Link>
        </div>
        <div className="mb-2 md:mb-0">
          <Link
            href=""
            className="flex items-center text-white text-sm md:text-base transition hover:text-pink-400"
          >
            Asus
            <span className="ml-1 text-white bg-purple-950 px-2  rounded-sm shadow-md shadow-purple-500 hover:scale-105 transition-transform duration-300">
              c
            </span>
          </Link>
        </div>
        <div className="mb-2 md:mb-0">
          <Link
            href=""
            className="flex items-center text-white text-sm md:text-base transition hover:text-pink-400"
          >
            Microsoft
            <span className="ml-1 text-white bg-purple-950 px-2  rounded-sm shadow-md shadow-purple-500 hover:scale-105 transition-transform duration-300">
              c
            </span>
          </Link>
        </div>
        <div className="mb-2 md:mb-0">
          <Link
            href=""
            className="flex items-center text-white text-sm md:text-base transition hover:text-pink-400"
          >
            Google
            <span className="ml-1 text-white bg-purple-950 px-2  rounded-sm shadow-md shadow-purple-500 hover:scale-105 transition-transform duration-300">
              c
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarBelow;
