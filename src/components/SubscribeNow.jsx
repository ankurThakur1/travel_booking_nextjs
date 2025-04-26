import Image from 'next/image';
import React from 'react'

const SubscribeNow = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto  mt-14 py-3 rounded-md" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1%, transparent), url("/airlines_resver.jpg")'}}>
      <div className=" flex flex-col items-center gap-5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white text-shadow-lg">Subscribe Now for Exclusive Deals and Savings!</h2>
        <p className="text-sm md:text-xl text-white">Subscribe to unlock our secret deals</p>
        <div className="border-2 border-blue-800 w-96 md:w-1/2 mx-auto bg-white py-1 px-1 rounded-4xl">
          <form className="flex justify-between items-center gap-2">
            <Image src="https://www.searchmyreservation.com/images/mail.svg" width={20} height={20} alt="mail" className="ml-2"/>
            <input type="email" placeholder="Enter email" className=" flex-1 py-1 px-2 focus:outline-none" />
            <button className="py-2 px-4 md:py-3 md:px-8 bg-[#075eb8] text-white rounded-4xl text-sm  cursor-pointer">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscribeNow;