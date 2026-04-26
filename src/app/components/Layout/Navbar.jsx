"use client"
import { GraduationCap, LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname = usePathname()
    const menu = [
        {name: "Home", path: "/"},
        {name: "Courses", path:"/courses"},
        {name: "About", path:"/about"},
        {name: "Contact", path: "/contact"}
    ]
  return (
    <div className="navbar custom-shadow">
      <div className="w-11/12 mx-auto flex items-center">
        <div className="navbar-start">
        {/* Mobile  */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
             {menu.map(item =>(
            <li key={item.path}>
                    <Link href={item.path} className={`px-3 py-1 rounded-md ${pathname === item.path ? "bg-primary text-white" : "hover:bg-base-100 text-primary"}`}>{item.name}</Link>
                </li>
          ))}
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-full p-1">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-black font-semibold">CodeCraft Academy</h1>
        </div>
      </div>
      {/* Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu.map(item =>(
            <li key={item.path}>
                    <Link href={item.path} className={`px-3 py-1 rounded-md ${pathname === item.path ? "bg-primary text-white" : "hover:bg-base-100 text-primary"}`}>{item.name}</Link>
                </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        <LogIn className="text-primary"></LogIn>
        <a className="text-primary font-bold">Login</a>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
