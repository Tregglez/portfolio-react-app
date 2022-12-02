import React, { useState } from "react";
import { FiFeather, FiDisc } from "react-icons/fi";
import Home from "../assets/home.gif";
import About from "../assets/about me.gif";
import Projects from "../assets/projects.gif";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 text-black">
      {/* Hamburger */}
      <div onClick={handleClick} className="z-10">
        {!toggle ? <FiFeather /> : <FiDisc />}
      </div>

      {/* Menu */}

      {/* Mobile Menu */}
      <div
        className={
          !toggle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#EECCEA] font-bold flex flex-col justify-center items-start"
        }
      >
        <ul>
          {/* <li className="py-6 text-[48px] text-black flex">
            <li className="py-6 text-[15px] text-[#CD49C0]">01</li>
            Home
            <img src={Home} alt="Home Gif" style={{ alignSelf: "end" }} />
          </li> */}

          <li className="py-6 text-[48px] text-black flex">
            <p className="py-6 text-[15px] text-[#CD49C0]">01</p>
            <p>Home</p>
            {/* <img src={Home} alt="Home Gif" /> */}
          </li>
          <li className="py-6 text-[48px] text-black flex">
            <li className="py-6 text-[15px] text-[#CD49C0]">02</li>
            Projects
          </li>

          <li className="py-6 text-[48px] text-black flex">
            <li className="py-6 text-[15px] text-[#CD49C0]">03</li>
            About
          </li>
        </ul>
      </div>
      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
