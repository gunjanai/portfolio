import React, { useState } from "react";
import HeaderLinks from "./HeaderLinks";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <div className=" flex p-8 m-4 w-full justify-between items-center">
        <span className="font-lobster text-4xl">Gunjan</span>
        <div className="hidden lg:flex">
          <HeaderLinks />
        </div>
        <button onClick={toggleMenu} className="lg:hidden">
          {showMenu ? (
            <img
              src="https://img.icons8.com/?size=100&id=52134&format=png&color=000000"
              alt="close Menu"
              className="w-10 lg:hidden"
            />
          ) : (
            <img
              src="https://img.icons8.com/?size=100&id=44024&format=png&color=000000"
              alt="menu"
              className="w-10 lg:hidden"
            />
          )}
        </button>
      </div>
      {showMenu && (
        <div className=" flex flex-col items-center basis-full lg:hidden">
          <HeaderLinks />
        </div>
      )}
    </>
  );
}

export default Header;
