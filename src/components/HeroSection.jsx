import React from 'react';
import HeroForm from './HeroForm';

const HeroSection = () => {
  return (
    <section className="w-full    py-20 px-4 text-white    lg:basis-2/3">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl text-[#eefbfd] md:text-5xl font-bold leading-tight tracking-tight uppercase">
          Book Your Smooth Takeoff  Today!
        </h1>
        <p className="text-[#aee8f3] text-xl max-w-2xl">
          Compare fares, book with confidence, and enjoy seamless travel planning—all in one place.
        </p>
        <div className="max-w-[90%] md:max-w-[97%] sm:max-w-full mx-auto ">
          <HeroForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
