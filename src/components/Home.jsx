import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"assets/bg-2.jpeg"})`,
      }}
      className="grid place-items-center h-screen"
    >
      <div className="font-bold flex flex-col justify-center text-center">
        <h2>
          Hello! I'm <span className="text-[#CD49C0]">Benjamin Treglown</span>
        </h2>
        <h2>
          and I'm a Web Developer based in
          <span className="indent"> Melbourne, Australia</span>
        </h2>
      </div>

      <div className="flex justify-center w-full">
        <p className="px-16 mx-11 underline underline-offset-8">Projects</p>
        <p className="px-16 mx-11 underline underline-offset-8">About Me</p>
      </div>
    </div>
  );
};

export default Home;
