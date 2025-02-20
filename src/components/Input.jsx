// import React from 'react'

// function Input() {
//   return (
//     <div className=' bg-slate-900  h-96 w-96 mx-auto mt-44 mb-0 overflow-hidden '>

//      <p className='text-center font-bold text-2xl mt-4'>User Login</p>
//      <div className='w-24 h-1 border-b-4 border-sky-600 rounded-2xl mx-auto mt-3' ></div>
//      <div className=''>
//        <label htmlFor="" className='ml-6  font-bold'>Username/ID</label>
//        <input 
//        className='bg-black text-white p-2 ml-5 mt-2 w-80 rounded-sm'
//        type="text" namen="" id="" placeholder='Enter Your Unique ID' />

//        <label htmlFor="" className='ml-6  font-bold'>Password</label>
//        <input 
//        className='bg-black text-white p-2 ml-5 mt-2 w-80 rounded-sm'
//        type="password" name="" id=""  placeholder='Enter password'/>
//   <br />
//        <input
//        className='text-white ml-5 mt-5 rounded-sm'
//         type="checkbox" name="" id=""/> <span>Keep Me LoggedIn</span>
//      </div>
//      <button
//       className="w-80 bg-blue-500 !important text-white py-2 px-4 rounded-md mx-auto block mt-5"
//       >
//     Login
//   </button>

//   <div className='mt-4'>
//     <span className='ml-14 mr-2'>New to Casino ?</span>
//     <span className='font-bold underline text-white'>
//         <a href=""> Join The Membership</a></span>
//   </div>

//     </div>
//   )
// }

// export default Input


// import React, { useState, useEffect } from "react";

// function Input() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 0.8); 

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={`bg-slate-900 h-96 w-96 mx-auto mt-3.5 rounded-sm mb-0 overflow-hidden 
//       transition-transform duration-500 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
//     >
//       <p className="text-center font-bold text-2xl mt-4">User Login</p>
//       <div className="w-24 h-1 border-b-4 border-sky-600 rounded-2xl mx-auto mt-3"></div>

//       <div>
//         <label className="ml-6 font-bold">Username/ID</label>
//         <input
//           className="bg-black text-white p-2 ml-5 mt-2 w-80 rounded-sm"
//           type="text"
//           placeholder="Enter Your Unique ID"
//         />

//         <label className="ml-6 font-bold">Password</label>
//         <input
//           className="bg-black text-white p-2 ml-5 mt-2 w-80 rounded-sm"
//           type="password"
//           placeholder="Enter password"
//         />
//         <br />
//         <input className="text-white ml-5 mt-5 rounded-sm" type="checkbox" />
//         <span> Keep Me LoggedIn</span>
//       </div>

//       <button className="w-80 bg-blue-500 text-white py-2 px-4 rounded-md mx-auto block mt-5">
//         Login
//       </button>

//       <div className="mt-4">
//         <span className="ml-14 mr-2">New to Casino ?</span>
//         <span className="font-bold underline text-white">
//           <a href=""> Join The Membership</a>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Input;


import React, { useState, useEffect } from "react";

function Input() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800); // Fixed timeout issue

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-slate-900 w-full max-w-md mx-auto mt-6 rounded-lg p-6 overflow-hidden 
      transition-transform duration-500 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
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
