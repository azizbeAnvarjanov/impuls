import React from "react";
import NavbarTop from "./NavbarTop/NavbarTop";
import Links from "./NavbarTop/Links";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-50">
      <NavbarTop />
      <Links />
    </div>
  );
};

export default Navbar;
