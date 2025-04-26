import React from 'react'
import Image from 'next/image';
import data from "@/data/data.js"
// import flightDotted from "../../public/flight-dotted.svg" 



const FlightOffers = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto">
      <div className="relative">
        <div className="border-b border-b-gray-400 w-full  py-1 before:content before:absolute before:-bottom-0.5 before:left-0 before:w-20 before:h-1 before:bg-orange-500 before:rounded-md" >
          <h4 className="text-xl font-semibold">Top Flight Deals Offers Await!</h4>
        </div>
      </div>
      <div className="w-full  mt-6 flex flex-col lg:justify-between items-center gap-6 lg:flex-wrap">
        {
            data && data.map((flightData, index) => (
                <div className="w-full lg:basis-[49%] p-2 bg-white rounded-lg shadow-md" key={index}>
                  <div className="flex justify-between items-center px-1">
                    <p className="text-[#075eb8] text-xs font-semibold">{flightData.date}</p>
                    <span className="text-sm">Starting From</span>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <Image src={flightData.image} width={30} height={30} alt={flightData.from.city} />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold">{flightData.from.code}</h3>
                      <p className="text-xs text-gray-500">{flightData.from.city}</p>
                    </div>
                    <Image src={flightData.flightIcon} width={150} alt={flightData.from.city} />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold">{flightData.to.code}</h3>
                      <p className="text-xs text-gray-500">{flightData.to.city}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <h3 className="text-xl font-extrabold">${flightData.price}</h3>
                      <button className="self-end px-3 py-1 bg-[#075eb8] text-white rounded-sm text-xs cursor-pointer">Book Now</button>
                    </div>
                  </div>
                </div>
            ))
        }
      </div>
      <div className="mt-6">
        <p className="text-xs sm:text-sm">Note:Note: Fares are round trip. Fuel surcharges, taxes & fees, as well as our service fees, are included in the fares.The fares displayed are based on historical data and cannot be assured at the time of booking. Refer our booking <span className="text-purple-800">terms & conditions</span> here.</p>
      </div>
    </div>
  )
}

export default FlightOffers;