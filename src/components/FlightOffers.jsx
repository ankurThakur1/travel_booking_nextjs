import React from 'react'
import Image from 'next/image';

const destinations = [
  {
    title: 'France',
    listings: 3,
    label: 'TRAVEL TO',
    image: '/france.jpg',
    extra: null,
  },
  {
    title: 'Singapore',
    listings: 3,
    label: '2 DAYS',
    image: '/singapore.jpg',
    extra: null,
  },
  {
    title: 'Maldives',
    listings: 3,
    label: '2 DAYS',
    image: '/maldives.jpg',
    extra: null,
  },
  {
    title: 'Italy',
    listings: 5,
    label: 'PLACE TO',
    image: '/rome.jpg',
    extra: null,
  },
];

const promo = {
  image: '/promo.jpg',
  discount: '20% OFF',
  title: 'Summer Hotest Deals',
  button: 'View Deals',
};

const FlightOffers = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#1e485b]">
        Explore <span className="relative z-10 before:content-[''] before:absolute before:-top-1 before:-left-2  before:w-full before:h-full before:px-20 text-nowrap before:py-6 sm:before:px-24 sm:before:py-6 lg:before:px-30 md:before:px-28 md:before:py-7 before:bg-[#1ca8cb] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg] text-white">Beautiful</span> <br /> Places Around World
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {
            destinations.map((destination, index) => (
              <div className="md:row-span-2  cursor-pointer hover:-translate-y-2 hover:shadow-xl rounded-3xl transition-all duration-300" key={index}>
                <div className="relative rounded-3xl overflow-hidden h-64 md:h-80">
                  <Image src={destination.image} alt={destination.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#1ca8cb] text-white px-3 py-1 rounded-full text-xs font-bold">{destination.listings} Listings</span>
                    <div className="mt-2 text-white">
                      <div className="text-xs">{destination.label}</div>
                      <div className="text-2xl md:text-3xl font-bold">{destination.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex flex-col h-full">
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-full flex flex-col justify-end">
            <Image src={promo.image} alt="Promo" fill className="object-cover " />
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <div className="text-white text-lg font-bold mb-2">{promo.discount}</div>
              <div className="text-white text-2xl md:text-3xl font-bold mb-4">{promo.title}</div>
              <button className="bg-[#1ca8cb] hover:bg-[#1980a1] transition text-white px-6 py-2 rounded-full font-semibold w-fit cursor-pointer">{promo.button}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightOffers;