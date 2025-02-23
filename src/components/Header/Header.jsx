
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
     <header className="relative z-50">
        <nav className='flex justify-between items-center bg-sky-800 px-4 py-3 md:px-8'>
          {/* logo */}
          <div>
            <img className='h-16 md:h-20' src="https://ts3.eer-wsd.com/assets/logo-DdCmjj8j.png" alt="Logo" />
          </div>

          {/* Hamburger Icon */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white text-2xl'>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* navigation */}
          <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:gap-6 gap-2 text-[18px] font-bold 
          absolute md:static top-16 left-0 w-full bg-sky-800 md:bg-transparent p-4 md:p-0 z-50`}>
            <ul className='flex flex-col text-[12px] md:flex-row md:ml-5 md:items-center md:justify-around md:text-[18px] md:gap-2 gap-2 '>
              <li>
                <NavLink to='livecasino' onClick={closeMenu} className={({ isActive }) => `${isActive ? "bg-sky-400" : "bg-sky-800"} rounded-2xl px-4 py-2.5`}> Live Casino </NavLink>
              </li>
              <li>
                <NavLink to='slot' onClick={closeMenu} className={({ isActive }) => `${isActive ? "bg-sky-400" : "bg-sky-800"} rounded-2xl px-4 py-2.5`}> Slot </NavLink>
              </li>
              <li>
                <NavLink to='service' onClick={closeMenu} className={({ isActive }) => `${isActive ? "bg-sky-400" : "bg-sky-800"} rounded-2xl px-4 py-2.5`}> Service Center </NavLink>
              </li>
              <li>
                <NavLink to='announcement' onClick={closeMenu} className={({ isActive }) => `${isActive ? "bg-sky-400" : "bg-sky-800"} rounded-2xl px-4 py-2.5`}> Announcement </NavLink>
              </li>
              <li>
                <NavLink to='deposit' onClick={closeMenu} className={({ isActive }) => `${isActive ? "bg-sky-400" : "bg-sky-800"} rounded-2xl px-4 py-2.5`}> Deposit & Withdrawl </NavLink>
              </li>
              <li>
                <NavLink to='message' onClick={closeMenu} className={({ isActive }) => `${isActive ? "bg-sky-400" : "bg-sky-800"} rounded-2xl px-4 py-2.5`}> Message </NavLink>
              </li>
              <li>
                <NavLink to='mypage' onClick={closeMenu} className={({ isActive }) => `${isActive ? "bg-sky-400" : "bg-sky-800"} rounded-2xl px-4 py-2.5`}> Mypage </NavLink>
              </li>
            </ul>
          </div>

          {/* login button */}
          <div className='hidden md:flex items-center'>
            <button className='bg-sky-700 font-bold py-2 px-4 rounded-2xl text-white hover:bg-sky-400'>Login  </button>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header


