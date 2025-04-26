import React from 'react'
import HeroForm from './HeroForm';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-12 max-w-[90%] md:max-w-[85%] w-full pt-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="hidden md:text-4xl text-white text-shadow-lg font-bold">Find the best flight deals to your destination </h1>
        <ul className="md:flex md:justify-between items-center gap-3 hidden">
          <li className="px-5 border-r-2 border-orange-500 text-white text-xl text-shadow-lg">Unlock Unbeatable Exclusives</li> 
          <li className="px-5 border-r-2 border-orange-500 text-white text-xl text-shadow-lg">Effortless Booking Experience</li>
          <li className="px-5 text-white text-xl text-shadow-lg">All-In-One Travel Solutions</li>
        </ul>
      </div>
                                                          {/* md:px-4 */}
      <div className="w-full border-white py-8 "> 
        <HeroForm />
      </div>
    </div>
  )
}

export default HeroSection;