import React from "react";

function Sidebar() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />

      <div className="min-h-screen flex flex-row bg-gray-100">
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-y-auto h-screen">
          <ul className="flex flex-col py-4">
            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-user"></i>
              </span>
              <span className="text-sm font-medium">Profile</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-chat"></i>
              </span>
              <span className="text-sm font-medium">Chat</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-bell"></i>
              </span>
              <span className="text-sm font-medium">Notifications</span>
              <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                5
              </span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <span className="text-sm font-medium">Music</span>
            </li>
            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink"></i>
              </span>
              <span className="text-sm font-medium">Drink</span>
            </li>
            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-shopping-bag"></i>
              </span>
              <span className="text-sm font-medium">Shopping</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-log-out"></i>
              </span>
              <span className="text-sm font-medium">Logout</span>
            </li>

            <div className="divide-y-2 divide-gray-200 divide-solid">
              <div></div>
              <div></div>
            </div>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/80.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Lindsay Macy</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/84.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Wilona Welch</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/85.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Valerie Bird</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/86.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Sybil Salazar</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/87.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Gina Marshall</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/88.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Tess Goodman</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Cassandra Woolridge</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/90.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Virginia Santiago</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/15.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Amber San</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/13.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Shiratsuni</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Nikumi</span>
            </li>

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt="user"
                />
              </span>
              <span className="text-sm font-medium">Natalia San</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
