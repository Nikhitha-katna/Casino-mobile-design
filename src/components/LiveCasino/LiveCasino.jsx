
import React from "react";

function LiveCasino() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 ">
      {/* Banner Image */}
      <div className="w-full flex justify-center">
        <img
          className="max-w-full h-auto"
          src="https://ts3.eer-wsd.com/assets/banner1-DSQ0YvT7.png"
          alt="Live Casino Banner"
        />
      </div>

      {/* Title */}
      <img 
        className="max-w-full h-auto mt-4"
        src="https://ts3.eer-wsd.com/assets/casino_heading-DAwetEKr.png" 
        alt="" 
      />
      <span className="mt-6 text-2xl font-bold underline">Live Casino</span>
    
      {/* Cards Container */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7">
        {[
          "https://eer-wsd.com/asset/vender/live-casino/evolution.png",
          "https://eer-wsd.com/asset/vender/live-casino/pragmatic-live.png",
          "https://eer-wsd.com/asset/vender/live-casino/oriental.png",
          "https://eer-wsd.com/asset/vender/live-casino/7-mojos-live.png",
          "https://eer-wsd.com/asset/vender/live-casino/onetouch-live.png",
        ].map((src, index) => (
          <img
            key={index}
            className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-2xl object-cover object-top transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
            src={src}
            alt={`Live Casino ${index + 1}`}
          />
        ))}
      </div>

      {/* Another Row of Cards */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7">
        {[
          "https://eer-wsd.com/asset/vender/live-casino/evolution.png",
          "https://eer-wsd.com/asset/vender/live-casino/pragmatic-live.png",
          "https://eer-wsd.com/asset/vender/live-casino/oriental.png",
          "https://eer-wsd.com/asset/vender/live-casino/7-mojos-live.png",
          "https://eer-wsd.com/asset/vender/live-casino/onetouch-live.png",
        ].map((src, index) => (
          <img
            key={index}
            className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-2xl object-cover object-top transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
            src={src}
            alt={`Live Casino ${index + 6}`}
          />
        ))}
      </div>
      
      {/* Another Row of Cards */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7">
        {[
          "https://eer-wsd.com/asset/vender/live-casino/evolution.png",
          "https://eer-wsd.com/asset/vender/live-casino/pragmatic-live.png",
          "https://eer-wsd.com/asset/vender/live-casino/oriental.png",
          "https://eer-wsd.com/asset/vender/live-casino/7-mojos-live.png",
          "https://eer-wsd.com/asset/vender/live-casino/onetouch-live.png",
        ].map((src, index) => (
          <img
            key={index}
            className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-2xl object-cover object-top transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
            src={src}
            alt={`Live Casino ${index + 11}`}
          />
        ))}
      </div>
    </div>
  );
}

export default LiveCasino;
