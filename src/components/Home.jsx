import React from "react";

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center text-center">
        <h2 className="font-bold">
          Hello! I'm <span className="text-[#CD49C0]">Benjamin Treglown</span>
        </h2>
        <h2 className="font-bold">
          and I'm a Web Developer based in
          <span className="indent"> Melbourne, Australia</span>
        </h2>

        <div className="flex justify-between pt-10 w-full">
          <p className="underline underline-offset-8 lg:px-4">Projects</p>
          <p className="underline underline-offset-8 lg:px-4">About Me</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
