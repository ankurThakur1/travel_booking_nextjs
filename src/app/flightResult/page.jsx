"use client";
import React, { useContext } from "react";
import { UserContext } from "@/context";
import FlightCard from "@/components/FlightCard";
import { IoMdArrowRoundForward } from "react-icons/io";

const FlightResults = () => {
    const { searchFlightData } = useContext(UserContext);

    const flightToFrom = (data) => {
      const flightData = data.map((flight) => {
        const segments = flight.outBound;
        const first = segments[0];
        const last = segments[segments.length - 1];
        return { first, last };
      });

      if (flightData.length === 0) return null;

      const firstFlight = flightData[0];

      return (
        <h1 className="text-xl font-semibold flex items-center gap-2">
          Flight: {firstFlight.first.fromAirport} <IoMdArrowRoundForward /> {firstFlight.last.toAirport}
        </h1>
      );
    };


  return (
    <div className=" min-h-screen grid gap-3 md:grid-cols-1">
      <div className="w-full h-fit py-4 px-3 bg-[#1f556b] text-white rounded-md mb-2">
        <p className="text-xl sm:text-xl md:text-2xl ">Flights - Search List</p>
      </div>
      {
        flightToFrom(searchFlightData)
      }
      {searchFlightData && searchFlightData.length > 0 ? (searchFlightData.map((flight) => (
        <FlightCard flight={flight} key={flight.resultID} />
      ))) : (<h1 className="text-center text-gray-500">No flight data found</h1>)}
    </div>
  );
};

export default FlightResults;
