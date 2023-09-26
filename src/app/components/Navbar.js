"use client";
import React from "react";

const Navbar = () => {
  const [isNavHidden, setIsNavHidden] = React.useState(true);

  const toggleNav = () => {
    setIsNavHidden(!isNavHidden);
  };

  return (
    <header className="text-black box-shadow bg-white w-full min-h-28 h-36">
      <nav className="flex items-center justify-between bg-white flex-wrap p-6 py-10 fixed w-full z-10 pin-t">
        <div className="flex items-center flex-no-shrink  mr-6 lg:ml-12">
          <a
            className="no-underline hover:text-gray-400 hover:no-underline"
            href="/#"
          >
            <span className="text-2xl md:text-4xl pl-2 font-semibold tracking-widest">
              Boluwatife Emmanuel
            </span>
          </a>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray border-gray-700 hover:text-gray-500 hover:border-white"
            onClick={toggleNav}
          >
            <svg
              className="fill-current h-10 w-10"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isNavHidden ? "hidden" : ""
          } w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 mr-12`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl lg:text-2xl tracking-wide font-medium">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 no-underline hover:text-gray-400"
                href="/#about"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block no-underline hover:text-gray-400  hover:text-underline py-2 px-4"
                href="/#projects"
              >
                Projects
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block no-underline hover:text-gray-400  hover:text-underline py-2 px-4"
                href="/#contact"
              >
                Contact
              </a>
            </li>
            <li className="mr-3 mt-2">
              <a
                className="inline-block text-white bg-[#050708] rounded-lg focus-outline-none focus:ring-2 focus:ring-[#050708]/50  hover:text-gray-50 -translate-y-1 active:translate-y-0 hover:border-blue-500 border hover:border-gray-50 shadow py-2 px-4"
                href="https://bolexzy.hashnode.dev/"
                target="_blank"
              >
                Articles
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
