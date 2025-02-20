

import React from 'react';

function Footer() {
  return (
    <footer className="bg-black w-full max-w-screen-xl mx-auto text-center py-4 mt-6">
      {/* Logo */}
      <img className="mx-auto w-32 sm:w-40 md:w-48" 
        src="https://ts3.eer-wsd.com/assets/logo-DdCmjj8j.png" 
        alt="Casino Logo"
      />

      {/* Copyright Text */}
      <span className="text-white text-sm sm:text-base block mt-2">
        Copyright ⓒ Casino. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;

