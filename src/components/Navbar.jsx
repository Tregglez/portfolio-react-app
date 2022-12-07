import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 text-black">
      {/* Dark/light mode */}
      <div>
        <img
          src="assets/moon.png"
          alt="set to dark mode"
          className="w-5 h-6 mx-10"
        />
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="z-10">
        {!toggle ? (
          <img
            src="assets/cross.png"
            alt="open navbar"
            className="w-7 h-6 cursor-pointer hover:animate-spin"
          />
        ) : (
          <img
            src="assets/closed-cross.png"
            alt="close navbar"
            className="w-7 h-6 cursor-pointer"
          />
        )}
      </div>

      {/* Menu */}

      {/* Mobile Menu */}
      <div
        className={
          !toggle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#f2aee9] font-bold flex flex-col justify-center items-start"
        }
        img
        src="assets/background.jpeg"
      >
        <div className="w-10/12 mx-auto md:w-8/12 lg:w-6/12">
          <div className="flex justify-between items-center h-40 group">
            <div className="my-6 text-[48px] text-black flex">
              <p className="text-[15px] text-[#CD49C0] leading-10 py-2 my-0 mr-1 lg:text-[20px] lg:leading-5 lg:py-7">
                01
              </p>
              <p className="lg:text-[70px]">Home</p>
            </div>
            <div>
              <img
                src="/assets/home.gif"
                alt=""
                className="navbar-image hidden group-hover:block"
              />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="my-6 text-[48px] text-black flex">
              <p className="text-[15px] text-[#CD49C0] leading-10 py-2 my-0 mr-1 lg:text-[20px] lg:leading-5 lg:py-7">
                02
              </p>
              <p className="lg:text-[70px]">Projects</p>
            </div>
            <div>
              <img
                src="/assets/projects.gif"
                alt=""
                className="navbar-image hidden group-hover:block"
              />
            </div>
          </div>

          <div className="flex justify-between items-center group">
            <div className="my-6 text-[48px] text-black flex">
              <p className="text-[15px] text-[#CD49C0] leading-10 py-2 my-0 mr-1 lg:text-[20px] lg:leading-5 lg:py-7">
                03
              </p>
              <p className="lg:text-[70px]">About</p>
            </div>
            <div>
              <img
                src="/assets/about.gif"
                alt=""
                className="navbar-image hidden group-hover:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
