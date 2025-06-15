import React from 'react';

const brandLogos = [
  "/travel1.png",
  "/travel2.png",
  "/travel3.png",
  "/travel4.png",
  "/travel1.png",
  "/travel2.png",
  "/travel1.png",
  "/travel2.png",
  "/travel3.png",
  "/travel4.png"
];

const TravelBrands = () => {
  return (
    <section className="relative w-full py-10 overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-700 mb-6">
        Our Trusted Partners
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 w-max animate-marquee space-x-10">
          {brandLogos.map((logo, index) => (
            <div key={index} className="min-w-[120px] h-20 flex items-center justify-center">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelBrands;