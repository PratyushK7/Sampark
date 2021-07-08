import React from "react";

function Rightbar({ user }) {
  const HomeRightbar = () => {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />

        <div className="min-h-screen flex flex-row bg-gray-100">
          <div className="flex flex-col w-96 bg-white rounded-r-3xl scroll-vertical-always overflow-x-hidden  h-screen">
            <ul className="flex flex-col py-4">
              <li>
                <span className="flex flex-row items-center h-20 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-cake bx-md text-red-400"></i>
                  </span>
                  <span className="text-sm font-medium">
                    <span className="text-red-400">Pola Foster</span> and{" "}
                    <span className="text-red-400">3 others </span>
                    have birthday today
                  </span>
                </span>
              </li>

              <div className="divide-y-2 divide-gray-200 divide-solid">
                <div></div>
                <div></div>
              </div>

              <li>
                <span className="flex flex-row items-center h-20 transform hover:translate-x-2   transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <span className="text-sm font-medium">
                    <span className="text-blue-400">Online Friends </span>
                  </span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/80.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Lindsay Macy</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/84.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Wilona Welch</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/85.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Valerie Bird</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/86.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Sybil Salazar</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/87.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Gina Marshall</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/88.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Tess Goodman</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/89.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">
                    Cassandra Woolridge
                  </span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/90.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Virginia Santiago</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/15.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Amber San</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/13.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Shiratsuni</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/12.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Nikumi</span>
                </span>
              </li>

              <li>
                <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                      src="https://randomuser.me/api/portraits/women/11.jpg"
                      alt="user avatar"
                    />
                  </span>
                  <span className="text-sm font-medium">Natalia San</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <HomeRightbar />
    </div>
  );
}

export default Rightbar;
