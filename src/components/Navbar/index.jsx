"use client";
import { useState } from "react";
import NavItems from "../NavItems";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  return (
    <>
      <nav
        className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
          isNavOpen
            ? "backdrop-filter backdrop-blur-md bg-white"
            : "backdrop-filter backdrop-blur-md"
        } inset-0 flex flex-row justify-between items-center h-16 z-50`}
      >
        <div>
          <h1
            className={`text-2xl font-bold ml-2 md:ml-0 transition-colors ease duration-500 ${
              isNavOpen ? "text-black" : "text-white"
            }`}
          >
            Satya Wicaksana
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <button
            className="burger button flex flex-col justify-center items-center space-y-1.5"
            onClick={toggleNav}
          >
            <div
              className={`w-6 h-1 rounded-full transition-all ease duration-300 ${
                isNavOpen ? "rotate-45 bg-black translate-y-[2px]" : "bg-white"
              }`}
            ></div>
            <div
              className={`w-6 h-1 rounded-full transition-all ease duration-300 ${
                isNavOpen ? "-rotate-45 -translate-y-2 bg-black" : "bg-white"
              }`}
            ></div>
          </button>
        </div>
      </nav>

      <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};

export default Navbar;
