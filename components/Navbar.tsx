"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import menu from "@/public/menu.svg";
import close from "@/public/close.svg";
import logo from "@/public/logo.png";

const Navbar = () => {
  const navLinks = ["Our Mission", "About Us", "Contact Us"];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav">
      {/* Logo */}
      <Link href={"/"}>
        {/* <h1 className="nav-title">Emulsion AI</h1> */}
        <Image
          src={logo}
          alt=""
          width={200}
          height={32}
          objectFit="contain"
          className="nav-logo"
        />
      </Link>

      {/* Links for large devices */}

      {/* Menu for small devices */}
      <div className="nav-menu-icon">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          objectFit="contain"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <div className={`${!toggle ? "hidden" : "flex"} nav-menu`}>
          <ul className="nav-menu-list">
            {navLinks.map((link) => {
              return (
                <li
                  key={`#${link.replace(" ", "-").toLowerCase()}`}
                  className={` font-manrope font-medium cursor-pointer text-s`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.replace(" ", "-").toLowerCase()}`}>
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
