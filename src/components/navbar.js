import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export function Navbar({ children }) {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
        <img src={logo} className="h-10 w-10" alt="" />
        <div className="ml-10">
          <Link
            className={`mx-2 text-sm font-semibold hover:text-indigo-700 ${
              pathName === "/projects" ? "text-indigo-700" : "text-gray-600"
            }`}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={`mx-2 text-sm font-semibold hover:text-indigo-700 ${
              pathName === "/teams" ? "text-indigo-700" : "text-gray-600"
            }`}
            to="/teams"
          >
            Team
          </Link>
        </div>
        <button className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
          <img
            src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512"
            alt=""
          />
        </button>
      </div>
      {children}
    </div>
  );
}
