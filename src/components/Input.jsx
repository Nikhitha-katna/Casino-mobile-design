
import React, { useState, useEffect } from "react";

function Input() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-slate-900 w-full max-w-md mx-auto mt-6 rounded-lg p-6 overflow-hidden 
      transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Title */}
      <p className="text-center font-bold text-2xl text-white">User Login</p>
      <div className="w-24 h-1 border-b-4 border-sky-600 rounded-2xl mx-auto mt-3"></div>

      {/* Form Inputs */}
      <div className="mt-4">
        <label className="block font-bold text-white">Username/ID</label>
        <input
          className="bg-black text-white p-2 w-full rounded-md mt-1"
          type="text"
          placeholder="Enter Your Unique ID"
        />

        <label className="block font-bold text-white mt-4">Password</label>
        <input
          className="bg-black text-white p-2 w-full rounded-md mt-1"
          type="password"
          placeholder="Enter password"
        />

        {/* Checkbox */}
        <div className="flex items-center mt-4">
          <input className="text-white rounded-sm" type="checkbox" id="keep-logged-in" />
          <label htmlFor="keep-logged-in" className="ml-2 text-white">Keep Me Logged In</label>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-5 hover:bg-blue-600 transition">
          Login
        </button>
      </div>

      {/* Sign Up Link */}
      <div className="mt-4 text-center text-white">
        <span>New to Casino? </span>
        <a href="#" className="font-bold underline text-blue-400 hover:text-blue-500">
          Join The Membership
        </a>
      </div>
    </div>
  );
}

export default Input;

