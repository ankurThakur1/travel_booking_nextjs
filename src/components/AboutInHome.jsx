import React from 'react'
import Image from 'next/image';
import about from "../../public/about2.jpg";

const AboutInHome = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto  ">
      <div className="relative">
        <div className="border-b border-b-gray-400 w-full  py-1 before:content before:absolute before:-bottom-0.5 before:left-0 before:w-20 before:h-1 before:bg-orange-500 before:rounded-md" >
          <h4 className="text-xl font-semibold">Begin Your Searchmyreservation</h4>
        </div>
      </div>
      <div className="flex flex-col lg:justify-between lg:flex-row gap-7 mt-8">
        <div className="p-0 lg:pr-16">
            <p className="w-full text-[16px] text-gray-700">Searchmyreservation.com. is the best flight booking platform that serves out spontaneous flight deal options all over the internet for loyal patrons. Our name is searchmyreservation.com, and as part of our work, we provide the most amazing discounted deals, whether they are domestic or international. Therefore, we offer the major secure applications that can be easily optimized by everyone for booking flight tickets. We at searchmyreservation.com believe that flying should be hassle-free and enjoyable limitlessly, so when you book your flight tickets, that's exactly what you got: “believe and faith during the flight booking. We manage your flights seamlessly without any complications. Thus, we at searchmyreseravtion.com believe that traveling is sightseeing, which can provide more information. Hence, we here keep in mind that every traveler could not afford expensive travel, which is why we endure cost-effective solutions, which are very appreciative steps towards humanity.</p>
            <p className="mt-3 text-[16px] text-gray-700">Therefore, know that there are lots of travel websites that deliver airline flights but do not deliver at the lowest airfare. Moreover, we do offer 24/7 customer support assistance in a cooperative way.</p>
        </div>
        <Image src={about} width={480} height={480} alt="about" className="flex-1 rounded-lg" />
      </div>
    </div>
  )
}

export default AboutInHome;