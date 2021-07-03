import React from "react";
import { GrNotification, GrChat, GrUserAdd } from "react-icons/gr";

function Topbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-sm font-medium ml-3 text-xl">Sampark</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Homepage</a>
            <a className="mr-10 hover:text-gray-900 cursor-pointer">Timeline</a>
            <a className="mr-5 cursor-pointer">
              <GrNotification />
            </a>
            <a className="mr-5 cursor-pointer">
              <GrChat />
            </a>
            <a className="mr-5 cursor-pointer">
              <GrUserAdd />
            </a>
          </nav>

          <div className="flex space-x-2">
            <div className="relative w-10 h-10">
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/api/portraits/lego/2.jpg"
                alt="user image"
              />
              <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Topbar;
