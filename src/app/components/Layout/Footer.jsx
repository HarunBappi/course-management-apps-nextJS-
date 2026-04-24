"use client";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {  FaFacebookF, FaGooglePlus, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  const menu = [
    { name: "Home", path: "/" },
    { name: "courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      {/* Top */}
      <div className="bg-[#252527]">
        <div className="w-10/12 mx-auto py-2 grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-between">
          {/* Logo */}
          <div className="">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="bg-primary rounded-full p-1">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-white font-semibold">CodeCraft Academy</h1>
            </div>
            <div>
                <p className="text-gray-500 text-sm mt-2">
              CodeCraft Academy is a modern learning platform designed to
              transform beginners into confident developers through practical,
              real-world coding experience.
            </p>
            </div>
          </div>
          {/* Course categories */}
          <div className="">
            <h1 className="uppercase font-semibold text-white">
              course categories
            </h1>
            <div className="text-gray-500 text-sm mt-3">
                <p>Design</p>
                <p>marketing</p>
                <p>Web Development</p>
                <p>IT & Software</p>
            </div>
          </div>
          {/* menu */}
          <div className="">
            <h1 className="font-semibold text-white">Quick Links</h1>
            <ul className="">
              {menu.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-sm${pathname === item.path ? " text-primary" : " text-gray-400"}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-[#4B4D4F] py-3">
        <div className="w-10/12 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
            <div className="flex-1">
                <h1 className="text-gray-400 text-sm">Theme by &copy; <span className="text-white">CodeCraft Academy</span> All Right Reserved</h1>
            </div>
            <div className="flex items-center gap-3 flex-1 md:justify-center text-white ">
                <a href=""><FaFacebookF className="bg-primary p-1 w-5 h-5 rounded-full"></FaFacebookF></a>
                <a href=""><FaTwitter className="bg-primary p-1 w-5 h-5 rounded-full"></FaTwitter></a>
                <a href=""><FaGooglePlus className="bg-primary p-1 w-5 h-5 rounded-full"></FaGooglePlus></a>
                <a href=""><FaLinkedin className="bg-primary p-1 w-5 h-5 rounded-full"></FaLinkedin></a>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
