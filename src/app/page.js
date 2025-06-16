"use client"
import ChooseUs from "@/components/AboutInHome";
import AppPromotion from "@/components/AppPromotion";
import DealsAndOffers from "@/components/DealsAndOffers";
import FlightOffers from "@/components/FlightOffers";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import TopDestinations from "@/components/TopDestinations";
import TravelBrands from "@/components/TravelBrands";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="hero-section w-full min-h-[800px] md:min-h-[550px] h-full bg-center bg-no-repeat relative before:content-none lg:before:content-[''] before:absolute before:-top-40 before:-right-120 
    before:w-[68rem] before:h-[73rem] before:bg-center before:bg-[#8e90f4]
    before:bg-[url(/bg-08.jpg)] before:bg-blend-overlay before:bg-no-repeat 
    before:-z-10 z-40 overflow-hidden before:rounded-t-full 
    before:bg-gradient-to-br before:from-[#5992db] before:to-[#8a49f3]" style={{backgroundImage: 'linear-gradient(to right, #1ca8cb, #1980a1)'}} >
        <div className="lg:container mx-auto w-full min-h-[550px] h-full flex justify-between items-center gap-28 pt-14 ">
          <HeroSection />
          <div className="relative  basis-1/3    hidden  lg:block">
            <div className="w-2xl min-h-full">
              <Image src="/flight.png" width={750} height={650} alt="flight"   />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full py-6 " style={{backgroundImage: "url(/bg-08.jpg)"}}>
        <div className="lg:container mx-auto py-8 flex flex-col gap-8 ">
          <TopDestinations />
        </div>
      </div>
      <div className="w-full bg-stone-100 h-full py-6  bg-no-repeat bg-right-bottom bg-cover " style={{backgroundImage: "url(/bg-app.jpg)"}}>
        <div className="lg:container  mx-auto">
          <FlightOffers />
        </div>
      </div>
      <div className="w-full h-full py-6   " style={{backgroundImage: "url(/choose-us-bg-2.jpg)"}}>
        <div className="max-w-[95%] sm:max-w-[94%] md:max-w-[95%] lg:container py-8 mx-auto">
          <ChooseUs />
        </div>
      </div>
      <div className="w-full h-full py-6  bg-gray-50"  >
        <div className="lg:container py-8 mx-auto">
          <DealsAndOffers />
        </div>
      </div>
      <div className="w-full h-full py-6   " style={{backgroundImage: "url(/cta-bg.jpg)"}}>
        <div className="lg:container py-8 mx-auto">
          <Testimonials />
        </div>
      </div>
      <div className="w-full h-full py-6   ">
        <div className="lg:container py-8 mx-auto ">
          <AppPromotion />
        </div>
      </div>
      <div className="w-full h-full py-6  ">
        <div className="lg:container py-8 mx-auto ">
          <TravelBrands />
        </div>
      </div>
    </>
  );
}

