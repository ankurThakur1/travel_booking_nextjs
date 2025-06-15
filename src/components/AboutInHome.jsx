import React from 'react'
import Image from 'next/image';
import about from "../../public/choose-us-bg.png";

const ChooseUs = () => {
  return (
    <div className="max-w-[93%] lg:max-w-[98%] w-full mx-auto  ">
      <div className="relative">
        <div className="border-b border-b-gray-200 w-full flex justify-center  py-3" >
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold z-10 text-gray-600">Why choose <span className="relative before:content-[''] before:absolute before:-top-1 before:-left-3 sm:before:-top-2 sm:before:-left-4 md:before:-top-2 md:before:-left-3 before:w-full before:h-full before:px-6 before:py-5 sm:before:px-7 sm:before:py-6 md:before:px-8 md:before:py-7 lg:before:px-10 lg:before:py-8 before:bg-[orangered] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg]  text-white">us</span></h4>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row justify-between gap-4 mt-8  ">
        <div className="p-0 lg:pr-2 basis-[55%] ">
          <p className="text-gray-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get The Best Travel Experience</p>
          <p className="text-gray-600 text-sm mb-4 sm:text-base md:text-lg lg:text-[16px] font-light">There are many variations of passages of available, but the majority have suffered alteration in
          some form, by injected humour words which don't look even slightly believable</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <h3 className="w-14 h-14 rounded-full   flex justify-center items-center text-xl sm:text-xl md:text-xl lg:text-2xl font-bold text-[#1ca8cb] bg-[#cae6ee]">01</h3>
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-xl font-bold mb-2">Find ans enjoy a Trip that fits Your Lifestyle with
                your Friends</h4>
                <p className="text-gray-500 text-sm mb-4 sm:text-base md:text-lg lg:text-[14px] font-light">Globally productize flexible potentialities via high-payoff markets. Proactively <br />revolutionize parallel growth strategies.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <h3 className="w-14 h-14 rounded-full   flex justify-center items-center text-xl sm:text-xl md:text-xl lg:text-2xl font-bold text-[#1ca8cb] bg-[#cae6ee]">02</h3>
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-xl font-bold mb-2">Travel With More Confidence</h4>
                <p className="text-gray-500 text-sm mb-4 sm:text-base md:text-lg lg:text-[14px] font-light">Globally productize flexible potentialities via high-payoff markets. Proactively <br />revolutionize parallel growth strategies.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <h3 className="w-14 h-14 rounded-full   flex justify-center items-center text-xl sm:text-xl md:text-xl lg:text-2xl font-bold text-[#1ca8cb] bg-[#cae6ee]">03</h3>
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-xl font-bold mb-2">See What you really Get form us</h4>
                <p className="text-gray-500 text-sm mb-4 sm:text-base md:text-lg lg:text-[14px] font-light">Globally productize flexible potentialities via high-payoff markets. Proactively <br />revolutionize parallel growth strategies.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-56  lg:w-3xl lg:flex lg:justify-center lg:items-center   flex-1">
          <div className="sm:w-xl md:w-2xl  ">
            <Image src={about} width={0} height={0} alt="about" className="w-full h-full object-cover object-left-top " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs;