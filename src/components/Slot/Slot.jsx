import React from 'react'

function Slot() {
  return (

    <div className="w-full min-h-screen flex flex-col items-center px-4">
      {/* Banner Image */}
      <div className="w-full flex justify-center">
        <img
          className="max-w-full h-auto"
          src="https://ts3.eer-wsd.com/assets/banner1-DSQ0YvT7.png"
          alt="Slot"
        />
      </div>

      {/* Title */}
      <img src="https://ts3.eer-wsd.com/assets/slot_heading-CXAq_5Ct.png" alt="" />
      <p className="mt-6 text-2xl font-bold underline">Slot</p>

      {/* Cards Container */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7">
        {[
          "https://eer-wsd.com/asset/vender/slots/pragmatic.png",
          "	https://eer-wsd.com/asset/vender/slots/booongo.png",
          "https://eer-wsd.com/asset/vender/slots/habanero.png",
          "https://eer-wsd.com/asset/vender/slots/blueprint-gaming.png",
          "https://eer-wsd.com/asset/vender/slots/bfgames.png",
        ].map((src, index) => (
          <img
            key={index}
            className="w-[200px] h-[200px] rounded-2xl  object-cover object-top transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
            src={src}
            alt={`Live Casino ${index + 1}`}
          />
        ))}
      </div>

      {/* Another Row of Cards */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7">
        {[
          "https://eer-wsd.com/asset/vender/slots/pragmatic.png",
          "	https://eer-wsd.com/asset/vender/slots/booongo.png",
          "https://eer-wsd.com/asset/vender/slots/habanero.png",
          "https://eer-wsd.com/asset/vender/slots/blueprint-gaming.png",
          "https://eer-wsd.com/asset/vender/slots/bfgames.png",
        ].map((src, index) => (
          <img
            key={index}
            className="w-[200px] h-[200px] rounded-2xl object-cover object-top  transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
            src={src}
            alt={`Live Casino ${index + 6}`}
          />
        ))}
      </div>
      {/* another row of cards */}

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7">
        {[
          "https://eer-wsd.com/asset/vender/slots/pragmatic.png",
          "	https://eer-wsd.com/asset/vender/slots/booongo.png",
          "https://eer-wsd.com/asset/vender/slots/habanero.png",
          "https://eer-wsd.com/asset/vender/slots/blueprint-gaming.png",
          "https://eer-wsd.com/asset/vender/slots/bfgames.png",
        ].map((src, index) => (
          <img
            key={index}
            className="w-[200px] h-[200px] rounded-2xl object-cover object-top  transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
            src={src}
            alt={`Live Casino ${index + 6}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slot
