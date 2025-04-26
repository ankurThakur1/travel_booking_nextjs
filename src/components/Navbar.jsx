"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const navLink = [
  { 
    label: "Home",
    path: "/" 
  },
  { 
    label: "About Us",
    path: "/about-us" 
  },
  { 
    label: "Contact",
    path: "/contact-us" 
  },
  { 
    label: "Flights",
    path: "/flights" 
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="logo" width={160} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLink.map((item, index) => (
            <li
              key={index}
              className="list-none text-lg px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition"
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </nav>

        {/* Contact Info (Always visible) */}
        <div className="hidden md:flex items-center gap-3 border-l border-gray-300 pl-5">
          <Image src="/COA-agent-pic.png" width={40} height={40} alt="contact" />
          <div className="flex flex-col leading-tight">
            <p className="text-blue-600 text-sm font-semibold">Speak to an expert now</p>
            <span className="text-lg font-bold text-orange-500">+1-999-999-999</span>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

       {/* Side Drawer (mobile menu) */}
       <div
        className={`fixed top-0 left-0 h-full w-96 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col gap-4 pt-20">
          {navLink.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Contact Info */}
          <div className="mt-6 border-t pt-4 flex items-center gap-3">
            <Image src="/COA-agent-pic.png" width={40} height={40} alt="contact" />
            <div className="flex flex-col leading-tight">
              <p className="text-blue-600 text-sm font-semibold">Speak to an expert now</p>
              <span className="text-lg font-bold text-orange-500">+1-999-999-999</span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/35 z-30 md:hidden backdrop-blur-sm transition-all duration-300 ease-in-out" onClick={() => setIsOpen(false)}></div>
      )}
    </header>
  );
};

export default Navbar;
