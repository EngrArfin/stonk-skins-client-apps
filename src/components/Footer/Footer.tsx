import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#C2F929] text-black pl-10 pr-10 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:justify-center mb-8 gap-4 sm:gap-8">
        <button className="bg-[#C2F929] text-black font-bold w-full sm:w-[429px] h-[87px] rounded-tl-[20px] rounded-tr-[20px] hover:scale-105 transition-transform">
          Blockchain-Based
        </button>
        <button className="bg-[#A17CFF] text-white w-full sm:w-[429px] h-[87px] rounded-tl-[20px] rounded-tr-[20px] font-bold shadow-md hover:scale-105 transition-transform">
          Low-Cost Transactions
        </button>
        <button className="bg-[#00D8FF] text-white w-full sm:w-[429px] h-[87px] rounded-tl-[20px] rounded-tr-[20px] font-bold shadow-md hover:scale-105 transition-transform">
          Speculative Nature
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
        <div className="sm:w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            The Fun Side of <br /> Abcdefg
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Dolor in non vitae <br />
            euismod.Lectus vivamus at volutpat lorem netus pellentesque <br />
            platea aenean habitant. Vitae velit luctus id egestas mauris. <br />
            Turpis sed magna id aliquet nec. Eleifend eu mauris gravida <br />
            amet sed nascetur felis magna fringilla.
          </p>
          <p className="text-base leading-relaxed">
            Ut pulvinar nisl sed mi fermentum facilisis. Vivamus interdum elit
            sed neque auctor aliquet. Curabitur quis lorem in nisl vehicula
            fermentum.
          </p>
        </div>

        <div className="sm:w-1/2">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 mb-10">
            <div className="text-center mb-4 sm:mb-0">
              <h1 className="text-5xl font-extrabold text-black">200+</h1>
              <p className="text-lg font-medium text-gray-700">Meme Coins</p>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-extrabold text-black">12,350</h1>
              <p className="text-lg font-medium text-gray-700">Conversions</p>
            </div>
          </div>
          <div>
            <p className="text-base mx-auto leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget turpis a metus malesuada pellentesque. Vestibulum in justo
              tincidunt, vestibulum nunc vel, gravida turpis.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Ut pulvinar nisl sed mi fermentum facilisis. Vivamus interdum elit
              sed neque auctor aliquet. Curabitur quis lorem in nisl vehicula
              fermentum.
            </p>
            <p className="text-base leading-relaxed">
              Suspendisse nec arcu vel augue tincidunt dignissim a non neque.
              Fusce volutpat, arcu ac vehicula suscipit, elit lacus eleifend
              metus, non fermentum velit risus nec eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
