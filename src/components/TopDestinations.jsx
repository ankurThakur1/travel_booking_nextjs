'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaLocationDot } from "react-icons/fa6";



const destinations = [
  {
    heading: "Explore the City That Never Sleeps",
    city: "New York",
    country: "USA",
    price: 199,
    image: "/square.jpg",
    description: "Experience the vibrant city life, iconic landmarks, and cultural diversity of NYC.",
    discount: "10% off for early bookings"
  },
  {
    heading: "Romance in the City of Light",
    city: "Paris",
    country: "France",
    price: 249,
    image: "/tower.jpg",
    description: "The city of love awaits with its charming cafes, Eiffel Tower, and romantic atmosphere."
  },
  {
    heading: "Tech Meets Tradition",
    city: "Tokyo",
    country: "Japan",
    price: 310,
    image: "/tokyo.jpg",
    description: "A perfect mix of tradition and technology in Japan's bustling capital.",
    discount: "Limited-time deal: Save $30"
  },
  {
    heading: "A Green City of the Future",
    city: "Singapore",
    country: "Singapore",
    price: 265,
    image: "/singapore.jpg",
    description: "Discover futuristic gardens, vibrant culture, and delicious street food.",
    discount: "5% cashback on app bookings"
  },
  {
    heading: "Timeless Charm in the UK",
    city: "London",
    country: "UK",
    price: 255,
    image: "/london.jpg",
    description: "Explore historic landmarks, royal sites, and iconic red buses in London."
  },
  {
    heading: "Step into Ancient Glory",
    city: "Rome",
    country: "Italy",
    price: 220,
    image: "/rome.jpg",
    description: "Step into history with ancient ruins, Roman architecture, and pasta paradise.",
    discount: "Holiday Sale: $20 Off"
  }
];



const TopDestinations = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto py-16 ">
      <div className="relative">
        <div className="border-b border-b-gray-200 w-full flex justify-center  py-3" >
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600">Popular <span className="relative z-10 before:content-[''] before:absolute before:-top-2 before:-left-3  before:w-full before:h-full before:px-24 before:py-6 sm:before:px-28 sm:before:py-7 md:before:px-36 md:before:py-8 before:bg-[orangered] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg] text-white">Destination</span></h4>
        </div>
      </div>
      <div className="relative  h-[550px] w-full py-2 mt-5 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="destination-swiper "
        >
          {destinations.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg w-full h-full relative overflow-hidden group cursor-pointer shadow-md p-2 bg-white">
                <div className="w-full h-56 rounded-md  relative">
                  <Image
                    src={card.image}
                    width={360}
                    height={500}
                    alt={card.city}
                    className="rounded-md object-cover group-hover:scale-105   transition-all duration-300 w-full h-full"
                  />
                  {
                    card.discount ? (
                      <div className="absolute top-2 right-1 px-3 py-2   rounded-full  bg-white/80 backdrop-blur-lg">
                        <span className="text-black text-sm font-mono ">{card.discount}</span>
                      </div>
                    ) : null
                  }
                </div>
                <div className="my-4 border-b-gray-400 border-dashed border-b-2 py-3">
                  <p className="text-xl font-bold flex items-center gap-2"><FaLocationDot className="text-blue-500" /> {card.country} <span className="text-sm text-gray-500">{card.city}</span></p>
                </div>
                <div className="flex flex-col gap-1  my-2">
                  <h4 className="text-2xl font-bold">{card.heading}</h4>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
                <div className="mt-4 py-5 flex justify-between items-center">
                  <button className="px-6 py-3 shadow-stone-300 shadow-md bg-amber-300 hover:bg-orange-600 hover:shadow-orange-700 hover:shadow-lg  text-gray-800 hover:text-gray-100 rounded-full text-xm font-semibold  transition-all duration-300 cursor-pointer">Book Now</button>
                  <p className="text-sm">Starts from <span className="text-2xl font-bold">${card.price}</span></p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TopDestinations;


