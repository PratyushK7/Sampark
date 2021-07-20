import axios from "axios";
import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
        email: email.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="container p-16 py-32  ">
      <section className="grid grid-cols-1 gap-0 lg:grid-cols-12">
        <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-4 xl:p-12 sm:w-2/4 lg:w-full">
          <div
            title="Rigister Page"
            className="flex items-center justify-start"
          >
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
            Register Account
          </h1>
          <form className="pb-1 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="block mb-2 text-xs font-medium text-gray-700 mt-4">
                Username
              </span>
              <input
                className="form-input"
                placeholder="@Kaladin"
                ref={username}
                required
              />
            </label>
            <label className="block">
              <span className="block mb-2 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="form-input"
                type="email"
                placeholder="Ex. kaladin@storms.com"
                inputMode="email"
                ref={email}
                required
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
                ref={password}
                required
              />
            </label>
            <label className="block">
              <span className="block mb-2 text-xs font-medium text-gray-700 mt-4">
                Password Again
              </span>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••"
                ref={passwordAgain}
                required
              />
            </label>
            <div className="flex items-center justify-between">
              <button
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-3 rounded-full -ml-2"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <div className="my-6 space-y-2">
            <p className="text-xs text-gray-600">
              Already have an account?
              <Link to="/login" className="text-red-500 hover:text-black ml-2">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-8">
          <img
            src="https://images.unsplash.com/photo-1589483232748-515c025575bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
            alt="3 women looking at a laptop"
            className="object-cover w-full h-64 min-h-full bg-gray-100"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

export default Register;
