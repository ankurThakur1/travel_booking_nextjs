import React from 'react'
import newYork from "../../public/new-york.jpg";
import chicago from "../../public/chicago.jpg";
import losAngeles from "../../public/los-angele.jpg";
import sanDiego from "../../public/san-diego.jpg";
import seattle from "../../public/seattle.jpg";
import tampa from "../../public/tampa.jpg";
import Image from 'next/image';

const destinationCards = [
  {
    city: "New York",
    price: 167,
    image: newYork
  },
  {
    city: "Chicago",
    price: 199,
    image: chicago
  },
  {
    city: "Los Angeles",
    price: 195,
    image: losAngeles
  },
  {
    city: "San Diego",
    price: 158,
    image: sanDiego
  },
  {
    city: "Seattle",
    price: 114,
    image: seattle
  },
  {
    city: "Tampa",
    price: 215,
    image: tampa
  }
];

const TopDestinations = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto">
      <div className="relative">
        <div className="border-b border-b-gray-400 w-full  py-1 before:content before:absolute before:-bottom-0.5 before:left-0 before:w-20 before:h-1 before:bg-orange-500 before:rounded-md" >
          <h4 className="text-xl font-semibold">Top Destination</h4>
        </div>
      </div>
      <div className="w-full  mt-6 flex sm:flex-row md:justify-between md:items-center flex-col gap-3 sm:flex-wrap">
        {
          destinationCards.map((card, index) => (
            <div className="  rounded-lg w-full h-52 sm:h-40 sm:basis-[49%] md:basis-[48%] lg:basis-[32%] relative overflow-hidden group cursor-pointer shadow-md" key={index}>
              <div className="w-full h-full rounded-md">
                <Image src={card.image} width="100%" height="100%" alt={card.city} className="rounded-md object-contain  group-hover:scale-125 transition-all duration-300" />
              </div>
              <div className="w-full h-full absolute top-0 left-0 bg-gray-800 rounded-md opacity-25" />
              <div className="absolute top-0 left-0 w-full h-full p-2">
                <div className="w-fit px-2 pt-2">
                  <span className="text-white">Flight To</span>
                  <p className="text-xl md:text-2xl text-white font-semibold">{card.city}</p>
                </div>
                <div className="absolute bottom-3 right-3 ">
                  <p className="text-white">Start From <span className="text-xl md:text-2xl font-semibold">${card.price}</span></p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TopDestinations;