// import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import { Outlet } from 'react-router-dom'

// function Layout() {
//   return (
//     <div className="flex flex-col w-full">
//     <Header/>
//     <main className="flex-1 w-full  min-h-screen">
//     <Outlet  />
//     </main>
   
//     <Footer />
//     </div>
//   )
// }

// export default Layout


import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
