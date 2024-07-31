"use client"

import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 z-50 flex flex-col md:flex-row justify-between py-5 px-4 md:px-16 items-center font-semibold bg-white">
      <div className="flex justify-between w-full items-center">
        <Link href="/">
          <Image src={logo} alt="Site logo" width={200} height={50} className="hover:opacity-80 transition-opacity" />
        </Link>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#6610F2] hover:text-[#4500A5] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

        </div>
      </div>

      <nav className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-center text-lg">
          <li className="hover:text-[#6610F2] transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#6610F2] transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-[#6610F2] transition-colors">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-[#6610F2] transition-colors">
            <Link href="/systems">Systems</Link>
          </li>
          <button className=" w-36 h-16 border-2 border-[#6610F2] text-[#6610F2] rounded-[60px] py-2 px-4 ml-4 hover:bg-[#6610F2] hover:text-white transition-colors">
            Contact Us
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
