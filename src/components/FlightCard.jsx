"use client"
import React, { useState } from 'react';
import { formatTime, formatDate, parseDuration } from '@/util.js';
import { IoIosArrowDown } from "react-icons/io";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdTimelapse } from "react-icons/md";
import { FaArrowRightLong, FaPersonWalkingLuggage } from "react-icons/fa6";

const FlightCard = ({ flight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const segments = flight.outBound;
  const first = segments[0];
  const last = segments[segments.length - 1];
  const stops = segments.length - 1;
  const { fare } = flight;


  const totalTravelTime = segments.reduce((acc, seg) => {
    const match = seg.eft.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    const hours = parseInt(match[1] || 0);
    const minutes = parseInt(match[2] || 0);
    return acc + hours * 60 + minutes;
  }, 0);

  const formattedTotalTime = `${Math.floor(totalTravelTime / 60)}h ${totalTravelTime % 60}m`;

  return (
    <div className="shadow-md hover:shadow-xl rounded-lg p-4 md:py-4 md:px-5 bg-white transition-all duration-300 border border-gray-200">
      <h2 className="text-lg font-bold text-[#1980a1] mb-2">Airline: {first.airline}</h2>
      <div className="border-b border-dashed border-b-gray-300 pb-2 mb-2">
        <div className="flex justify-around text-sm  ">
          <div className="flex flex-col gap-1">
            <p className="text-gray-700 mb-2"><span className="py-2 px-4 rounded-2xl bg-gray-200 text-sm font-semibold">{first.fromAirport}</span></p>
            <p className="text-sm font-bold -mt-1">{formatTime(first.depDate)}</p>
            <p className="text-xs text-gray-400">{formatDate(first.depDate)}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-xs text-gray-400">
            {/* <div className="w-20 h-0.5 bg-[#1980a1]/60 rounded-full  my-1" /> */}
            <p className="text-sm text-gray-600 font-semibold">{formattedTotalTime}</p>
            <div className="w-40  border border-dashed border-[#1980a1]/60 rounded-full  my-1" />
            {/* <p>{first.toAirport} stopage of flight</p> */}
            <p>{first.stops === 0 ? "Non-stop" : `${first.stops} Stop${first.stops > 1 ? "s" : ""} ${first.toAirport}`}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-700 mb-2"><span className="py-2 px-4 rounded-2xl bg-gray-200 text-sm font-semibold">{last.toAirport}</span></p>
            <p className="text-sm font-bold -mt-1">{formatTime(last.reachDate)}</p>
            <p className="text-xs text-gray-400"> {formatDate(last.reachDate)}</p>
          </div>
        </div>
      </div>
      <button className="text-xs text-[#1ca8cb] font-semibold cursor-pointer flex items-center gap-1" onClick={() => setIsOpen(!isOpen)}>Flight Details <span><IoIosArrowDown /></span></button>
      {
        isOpen &&
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {segments.map((segment, idx) => (
            <div key={idx} className="border border-gray-200 rounded-md p-3 bg-[#eefbfd]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src={"/AI.png"}
                    alt={segment.airline}
                    className="h-6"
                  />
                  <p className="font-medium text-gray-500 text-xs">
                    <span>{segment.airline}-{segment.flightNo}</span>
                  </p>
                </div>
                <p className="text-[#1980a1] text-sm">Cabin: <strong>{segment.cabinClass}</strong></p>
              </div>
              <p className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                {segment.fromAirport} ({segment.fromAirportName}) <IoAirplaneSharp className="text-[#1980a1]" /> 
                {segment.toAirport} ({segment.toAirportName})
              </p>
              <p className="text-sm flex items-center gap-2 text-gray-600 my-2">
                <MdTimelapse /> <span className="py-1 px-4 font-semibold rounded-2xl bg-[#aee8f3]">{formatTime(segment.depDate)}</span> - <span className="py-1 px-4 font-semibold rounded-2xl bg-[#aee8f3]">{formatTime(segment.reachDate)}</span>
              </p>
              <p className="text-sm flex items-center gap-1.5 text-gray-600">
                <strong>Terminal:</strong> {segment.fromTerminal || '-'} <FaArrowRightLong /> {segment.toTerminal || '-'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Aircraft:</strong> {segment.equipmentCode}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Duration:</strong> {parseDuration(segment.eft)}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Baggage:</strong> {segment.baggage || "N/A"}, Cabin: {segment.cabinBaggage}
              </p>
              {idx !== segments.length - 1 && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-600"><FaPersonWalkingLuggage /></span>
                  <p className="mt-2 text-xs text-[#1980a1] font-semibold ">Layover at {segment.toAirportName}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      }
      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {fare.currency} {fare.grandTotal} <span className="text-sm text-gray-300 font-extralight">per adult</span>
          </h3>
          {fare.freeCancellation && (
            <span className="text-green-600 bg-green-100 px-2 py-1 rounded text-xs font-medium">
              Free Cancellation
            </span>
          )}
        </div>
        <button className="px-6 py-3 shadow-stone-300 shadow-md  bg-[#1ca8cb] hover:bg-[#1980a1] hover:shadow-[#1980a1] hover:shadow-lg  text-gray-50 hover:text-gray-100 rounded-full text-xm font-semibold  transition-all duration-300 cursor-pointer">Book Now</button>
      </div>
    </div>
  );
};

export default FlightCard;
