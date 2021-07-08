import React, { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="container p-16 py-32  ">
      <section className="grid grid-cols-1 gap-0 lg:grid-cols-12">
        <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-4 xl:p-12 sm:w-2/4 lg:w-full">
          <div className="flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-sm font-medium ml-3 text-xl text-red-500">
              Sampark
            </span>
          </div>
          <h1 className="mt-6 mb-4 text-xl font-light text-left text-gray-600">
            Log in to your account
          </h1>
          <form className="pb-1 space-y-4" onSubmit={handleClick}>
            <label className="block">
              <span className="block mb-2 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="form-input"
                type="email"
                placeholder="Ex. james@bond.com"
                inputMode="email"
                required
                ref={email}
              />
            </label>
            <label className="block">
              <span className="block mb-2 text-xs font-medium text-gray-700 mt-4">
                Your Password
              </span>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••"
                minLength="6"
                required
                ref={password}
              />
            </label>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                  Remember me
                </span>
              </label>
              <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-3 rounded-full">
                Login
              </button>
            </div>
          </form>
          <div className="my-6 space-y-2">
            <p className="text-xs text-gray-600">
              Don't have an account?
              <Link
                to="/register"
                className="text-red-500 hover:text-black ml-2"
              >
                Create an account
              </Link>
            </p>
            <a href="/" className="block text-xs text-red-500 hover:text-black">
              Forgot password?
            </a>
            <a href="/" className="block text-xs text-red-500 hover:text-black">
              Privacy & Terms
            </a>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-8">
          <img
            src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="3 women looking at a laptop"
            className="object-cover w-full h-64 min-h-full bg-gray-100"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

export default Login;
