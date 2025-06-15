import Image from 'next/image';
import React from 'react'

const SubscribeNow = () => {
  return (
    // <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto  mt-14 py-3 rounded-md" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1%, transparent), url("/airlines_resver.jpg")'}}>
    //   <div className=" flex flex-col items-center gap-5">
    //     <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white text-shadow-lg">Subscribe Now for Exclusive Deals and Savings!</h2>
    //     <p className="text-sm md:text-xl text-white">Subscribe to unlock our secret deals</p>
    //     <div className="border-2 border-blue-800 w-96 md:w-1/2 mx-auto bg-white py-1 px-1 rounded-4xl">
    //       <form className="flex justify-between items-center gap-2">
    //         <Image src="https://www.searchmyreservation.com/images/mail.svg" width={20} height={20} alt="mail" className="ml-2"/>
    //         <input type="email" placeholder="Enter email" className=" flex-1 py-1 px-2 focus:outline-none" />
    //         <button className="py-2 px-4 md:py-3 md:px-8 bg-[#075eb8] text-white rounded-4xl text-sm  cursor-pointer">Submit</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  
    <div className="max-w-6xl mx-auto my-16  bg-stone-200 rounded-3xl shadow-xl flex flex-col md:flex-row items-center  ">
          
          <div className="relative w-full md:w-md h-64 md:h-80">
            <Image 
              src="/mountain.jpg"
              alt="Luxury Villa"
              fill
              className="rounded-l-3xl rounded-r-3xl md:rounded-l-3xl md:rounded-r-none object-cover "
            />
          </div>
    
          <div className="flex-1 flex flex-col py-5 items-center justify-center md:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600 mb-4">
              Get special offers, <br /> and more from travelworld
            </h2>
            
            <form className="flex w-full max-w-sm sm:max-w-md bg-white shadow-inner rounded-full overflow-hidden px-1 py-1 sm:px-3 sm:py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-3 text-gray-700 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 sm:px-6 sm:py-3 cursor-pointer rounded-full transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
    
        </div>
  )
}

export default SubscribeNow;