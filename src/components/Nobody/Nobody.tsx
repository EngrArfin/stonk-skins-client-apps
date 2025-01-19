import React from "react";

const Nobody = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#1b1b1b] text-white px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Ain t
          <span className="bg-purple-500 rounded-full px-2 py-1">Nobody</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          Got time for
          <span className="bg-green-400 rounded-lg px-2 py-1">Boring</span>
        </h2>
        <p className="text-[#FFDD03] text-3xl md:text-4xl font-medium mt-4">
          Regular Money
        </p>
      </div>

      <p className="text-lg md:text-xl mt-8 text-gray-300">
        Trade the Hottest Demo Taka Effortlessly
      </p>
    </section>
  );
};

export default Nobody;
