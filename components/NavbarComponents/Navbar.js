"use client";

import BurgerButton from "./BurgerButton";
import Logo from "./../Logo";
import NavButtons from "./NavButtons";
import SearchBox from "./SearchBox";
import SideMenu from "./SideMenu";
import { useState } from "react";

function Navbar({ isAbsolute = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        isAbsolute ? "absolute" : "static"
      } w-full z-40 bg-black bg-opacity-40`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4 md:gap-y-4 lg:gap-0">
        <Logo />
        <NavButtons />
        <div className="md:w-full md:flex md:justify-end lg:w-80">
          <SearchBox />
        </div>
        <BurgerButton toggleMenu={() => setIsMenuOpen(true)} />
      </div>
      <SideMenu isOpen={isMenuOpen} toggleClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}

export default Navbar;
