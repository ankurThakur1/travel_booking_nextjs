// "use client";
// import React, { useState } from 'react';
// import { MdSwapHoriz, MdSearch } from 'react-icons/md';

// const HeroForm = () => {
//   const [isPassengerOpen, setPassengerOpen] = useState(false);
//   const [passengers, setPassengers] = useState({ adult: 1, child: 0, infant: 0 });

//   const updateCount = (type, delta) => {
//     setPassengers((prev) => ({
//       ...prev,
//       [type]: Math.max(0, prev[type] + delta),
//     }));
//   };

//   return (
//     <form className=" w-2xs md:w-xl sm:min-w-2xs  bg-black/35 backdrop-blur-lg border border-white/20 rounded-xl p-4 md:p-8 shadow-xl text-white space-y-6">
//       <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4">
//         <div className="flex   flex-col gap-1">
//           <div className="flex flex-col items-start  ">
//             <label className="text-sm font-medium mb-1">From</label>
//             <input
//               type="text"
//               placeholder="City or Airport"
//               className="p-3 rounded-md text-sm bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white w-full"
//             />
//           </div>
//           <div className="flex items-center justify-center   ">
//             <span><MdSwapHoriz className="text-blue-400 cursor-pointer text-3xl hover:text-blue-300 transition" /></span>
//           </div>
//           <div className="flex flex-col items-start  ">
//             <label className="text-sm font-medium mb-1">To</label>
//             <input
//               type="text"
//               placeholder="City or Airport"
//               className="p-3 rounded-md text-sm bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white w-full"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
//           <div className="flex flex-col items-start basis-[48%]">
//             <label className="text-sm font-medium mb-1">Depart</label>
//             <input type="date" className="p-3 rounded-md text-sm bg-white/10 focus:outline-none focus:ring-2 focus:ring-white w-full" />
//           </div>
//           <div className="relative flex flex-col items-start sm:basis-[48%] w-full">
//              <label className="text-sm font-medium mb-1">Travelers</label>
//              <div
//               onClick={() => setPassengerOpen(!isPassengerOpen)}
//               className="p-3 bg-white/10 rounded-md cursor-pointer select-none hover:bg-white/20 w-full text-left"
//             >
//               {passengers.adult + passengers.child + passengers.infant} Passenger
//             </div>
//             {isPassengerOpen && (
//               <div className="absolute -top-10 mt-2 w-full bg-white text-gray-800 rounded-lg shadow-lg p-4 z-10">
//                 {["adult", "child", "infant"].map((type) => (
//                   <div key={type} className="flex justify-between items-center mb-3">
//                     <span className="capitalize">{type}:</span>
//                     <div className="flex items-center gap-2">
//                       <button
//                         type="button"
//                         onClick={() => updateCount(type, -1)}
//                         className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       >−</button>
//                       <span>{passengers[type]}</span>
//                       <button
//                         type="button"
//                         onClick={() => updateCount(type, 1)}
//                         className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       >+</button>
//                     </div>
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => setPassengerOpen(false)}
//                   className="mt-3 w-full bg-[#1ca8cb] text-white py-2 rounded hover:bg-[#1980a1] hover:shadow-[#1980a1] hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 >
//                   Done
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex sm:justify-between sm:items-end flex-col sm:flex-row gap-3">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="flex gap-3 cursor-pointer">
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="trip" className="accent-blue-500" defaultChecked />
//                 Round Trip
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input type="radio" name="trip" className="accent-blue-500" />
//                 One Way
//               </label>
//             </div>
//           </div>
//         </div>
//           <div className="sm:basis-[48%] w-full">
//             <button
//               type="submit"
//               className="w-full flex justify-center items-center gap-2 px-6 py-3 text-xl bg-[#1ca8cb]  rounded-lg hover:bg-[#1980a1] hover:shadow-[#1980a1] transition-all duration-300 cursor-pointer"
//             >
//               <MdSearch size={20} />
//               Search Flights
//             </button>
//           </div>
//       </div>

//     </form>
//   );
// };

// export default HeroForm;



import React, { useContext, useState } from 'react';
import { UserContext } from '@/context';
import { MdSwapHoriz, MdSearch } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const HeroForm = () => {
  const { formData, isPassengerOpen, setPassengerOpen, passengers, handleChange, setTripType, tripType, handleSubmit, updateCount, loading }  = useContext(UserContext);

  return (
    <form className="md:w-xl sm:w-2x1 w-full bg-black/35 backdrop-blur-lg border border-white/20 rounded-xl p-4 md:p-6 shadow-xl text-white space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium mb-1">From</label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="City or Airport"
              className="p-3 rounded-md text-sm bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white w-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <span>
              <MdSwapHoriz className="text-blue-400 cursor-pointer text-3xl hover:text-blue-300 transition" />
            </span>
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium mb-1">To</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="City or Airport"
              className="p-3 rounded-md text-sm bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
          <div className="flex flex-col items-start basis-[48%]">
            <label className="text-sm font-medium mb-1">Depart</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="p-3 rounded-md text-sm bg-white/10 focus:outline-none focus:ring-2 focus:ring-white w-full"
            />
          </div>
          {tripType === 1 && (
            <div className="flex flex-col items-start basis-[48%]">
              <label className="text-sm font-medium mb-1">Return</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="p-3 rounded-md text-sm bg-white/10 focus:outline-none focus:ring-2 focus:ring-white w-full"
              />
            </div>
          )}
        </div>
        <div className="relative flex flex-col items-start sm:basis-[48%] w-full">
          <label className="text-sm font-medium mb-1">Travelers</label>
          <div
            onClick={() => setPassengerOpen(!isPassengerOpen)}
            className="p-3 bg-white/10 rounded-md cursor-pointer select-none hover:bg-white/20 w-full text-left"
          >
            {passengers.adult + passengers.child + passengers.infant} Passenger
          </div>
          {isPassengerOpen && (
            <div className="absolute -top-10 mt-2 w-full bg-white text-gray-800 rounded-lg shadow-lg p-4 z-10">
              {['adult', 'child', 'infant'].map((type) => (
                <div key={type} className="flex justify-between items-center mb-3">
                  <span className="capitalize">{type}:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCount(type, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span>{passengers[type]}</span>
                    <button
                      type="button"
                      onClick={() => updateCount(type, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setPassengerOpen(false)}
                className="mt-3 w-full bg-[#1ca8cb] hover:bg-[#1980a1] hover:shadow-[#1980a1] hover:shadow-lg text-white py-2 rounded transition-all duration-300 cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
        <div className="flex sm:justify-between sm:items-end flex-col sm:flex-row gap-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3 cursor-pointer">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === 1}
                  onChange={() => setTripType(1)}
                  className="accent-blue-500"
                />
                Round Trip
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === 0}
                  onChange={() => setTripType(0)}
                  className="accent-blue-500"
                />
                One Way
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-sm text-left font-medium mb-1">Cabin Class</label>
            <select
              name="cabin"
              value={formData.cabin}
              onChange={handleChange}
              className="p-3 rounded-md text-sm bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="ECONOMY">Economy</option>
              <option value="PREMIUM_ECONOMY">Premium Economy</option>
              <option value="BUSINESS">Business</option>
              <option value="FIRST">First</option>
            </select>
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-sm font-medium text-left mb-1">Currency</label>
            <select
              name="currencyCode"
              value={formData.currencyCode}
              onChange={handleChange}
              className="p-3 rounded-md text-sm bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <div className="sm:basis-[48%] w-full">
          <button
            type="submit"
            className={`w-full flex justify-center items-center gap-2 px-6 py-3 text-xl bg-[#1ca8cb]  rounded-lg hover:bg-[#1980a1] hover:shadow-[#1980a1] transition-all duration-300 cursor-pointer ${loading && "disabled:bg-[#1ca8cb]/60 cursor-none"}`}
          >
            {
              loading ? (
                <span className="flex items-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin" /> Searching flights...</span>
              ) : (
                <span className="flex items-center gap-2">
                  <MdSearch size={20} />
                  Search Flights
                </span>
              )
            }
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeroForm;
