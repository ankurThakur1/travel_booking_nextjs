import AboutInHome from "@/components/AboutInHome";
import FeatureCards from "@/components/FeatureCards";
import FlightOffers from "@/components/FlightOffers";
import HeroSection from "@/components/HeroSection";
import SubscribeNow from "@/components/SubscribeNow";
import TopDestinations from "@/components/TopDestinations";
import Image from "next/image";
// bg-[url(/tropical_banner.jpg)]
export default function Home() {
  return (
    <>
      <div className="w-full min-h-[550px] h-full bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 5%, transparent), url("/tropical_banner.jpg")'}} >
        <div className="lg:container mx-auto w-full min-h-[550px] h-full flex justify-center items-start pt-14">
          <HeroSection />
        </div>
      </div>
      <div className="lg:container mx-auto py-8 flex flex-col gap-8">
        <FeatureCards />
        <TopDestinations />
      </div>
      <div className="w-full bg-gray-100 h-full py-3">
        <div className="lg:container py-8 mx-auto">
          <FlightOffers />
        </div>
      </div>
      <div className="w-full h-full py-3">
        <div className="lg:container py-8 mx-auto">
          <AboutInHome />
          <SubscribeNow />
        </div>
      </div>
    </>
  );
}
