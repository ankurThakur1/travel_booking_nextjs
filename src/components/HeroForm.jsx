"use client";
import React, { useState } from 'react'
import { MdSwapHorizontalCircle, MdSearch } from "react-icons/md";

const trips = [
    {
        id: "roundetrip",
        title: "Round Trip"
    },
    {
        id: "oneway",
        title: "One Way"
    }
];
const options = ["Economy", "Premium Economy", "Business Class", "First Class"];

const HeroForm = () => {
    const [isPassenger, setIsPassenger] = useState(false);
    const [counter, setCounter] = useState(1);
    console.log(isPassenger);

  return (
    <div className="w-full h-full py-3 px-1  md:px-2 rounded-md flex flex-col items-start">
      <div className="px-2 py-2 md:w-auto w-full grid grid-cols-2 gap-2 bg-white rounded-tl-md rounded-tr-md">
        <div className="flex items-center gap-2">
          {
            trips.map((trip, index) => (
              <label className="flex items-center gap-1 md:gap-2 bg-gray-100 py-2 px-1 md:px-2 rounded-md" key={index}>
                <input type="radio" name="trip" className="" />
                <span className="md:text-[14px] text-xs">{trip.title}</span>
              </label>
            ))
          }
            
        </div>
        <div className="w-full rounded-md ">
          <select className="w-full py-2 bg-gray-200 h-full px-1 md:text-[14px] text-xs outline-none rounded-md">
            {
                options.map((option, index) => (
                  <option key={index} value={index} className="rounded-md">{option}</option>
                ))
            }
          </select>
        </div>
      </div>
      <div className="w-full px-2 py-2 bg-white rounded-bl-md rounded-br-md md:rounded-tr-md flex flex-col lg:flex-row items-center gap-2">
        <div className="flex flex-col w-full items-center gap md:basis-[46%] sm:basis-full sm:w-full lg:flex-row">
          <div className="flex flex-col items-start gap-1 border rounded-md px-2 py-1 w-full">
            <label className="lg:text-sm text-xs w-full" htmlFor="from">From</label>
            <input type="text" placeholder="From Where?" name="from" id="from" className="focus:outline-0 md:placeholder:text-[16px] text-sm placeholder:font-semibold font-semibold " />
          </div>
          <span><MdSwapHorizontalCircle size={40} className="cursor-pointer text-[#075eb8] " /></span>
          <div className="flex flex-col items-start gap-1 border rounded-md px-2 py-1 w-full">
            <label className="lg:text-sm text-xs w-full" htmlFor="to">To</label>
            <input type="text" placeholder="To Where?" name="to" id="to" className="focus:outline-0 md:placeholder:text-[16px] text-sm placeholder:font-semibold font-semibold"  />
          </div>
        </div>
        <div className="basis-1/5 flex items-center w-full gap-2">
          <div className="flex flex-col items-start gap-1 border rounded-md px-2 py-1 w-full">
            <label className="text-sm w-full " htmlFor="depart">Depart</label>
            <input type="date" placeholder="From Where?" name="depart" id="depart" className="focus:outline-0 placeholder:text-[16px] placeholder:font-semibold font-semibold" />
          </div>
          <div className="flex flex-col items-start gap-1 border rounded-md px-2 py-1 w-full">
            <label className="text-sm w-full " htmlFor="return">Return</label>
            <input type="date" placeholder="From Where?" name="return" id="return" className="focus:outline-0 placeholder:text-[16px] placeholder:font-semibold font-semibold" />
          </div>
        </div>
        <div className="w-full lg:basis-[18%]">
          <div className="flex flex-col items-start gap-1 border rounded-md px-2 py-1 w-full relative">
            <label className="text-sm w-full" htmlFor="travelers">Travelers</label>
            <div onClick={() => setIsPassenger(!isPassenger)} className="w-full">1 Passenger</div>
            {
                isPassenger &&
                <div className="absolute top-full left-0 sm:w-60 w-full  flex flex-col px-2 py-1 md:py-3 bg-white border-gray-300 border  rounded-md shadow-lg">
                  <div className="flex items-center justify-between border-b border-b-gray-500 py-2 pb-2">
                    <p className="text-sm">Adult-</p>
                    <div className="flex justify-between items-center border w-24">
                      <button className="px-3 md:py-1 bg-[#075eb8] text-white rounded-sm">-</button>
                        {counter}
                      <button className="px-3 md:py-1 bg-[#075eb8] text-white rounded-sm">+</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between  border-b border-b-gray-500 py-2 pb-2">
                    <p className="text-sm">Child (2-11)-</p>
                    <div className="flex justify-between items-center border w-24">
                      <button className="px-3 md:py-1 bg-[#075eb8] text-white rounded-sm">-</button>
                        {counter}
                      <button className="px-3 md:py-1 bg-[#075eb8] text-white rounded-sm">+</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-b-gray-500 py-2 pb-2">
                    <p className="text-sm">Infant (0-2)-</p>
                    <div className="flex justify-between items-center border w-24">
                      <button className="px-3 md:py-1 bg-[#075eb8] text-white rounded-sm">-</button>
                        {counter}
                      <button className="px-3 md:py-1 bg-[#075eb8] text-white rounded-sm">+</button>
                    </div>
                  </div>
                  <button className="mt-5 self-end px-3 py-1 bg-[#075eb8] text-white rounded-sm text-sm">Done</button>
                </div>
            }
          </div>
        </div>
        <div className="w-full lg:flex-1 lg:h-14 h-10 rounded-md bg-[#075eb8]">
          <button className="h-full w-full flex justify-center items-center border-none outline-none hover:bg-orange-300  rounded-md transition-all duration-300 cursor-pointer"><MdSearch size={30} color="white" /></button>
        </div>
      </div>
    </div>
  )
}

export default HeroForm;


{/* <label className="flex items-center gap-2">
    <input type="radio" name="trip" className="" />
    <span>Round Trip</span>
</label>
<label className="flex items-center gap-2">
    <input type="radio" name="trip" className="" />
    <span>One Way</span>
</label> */}