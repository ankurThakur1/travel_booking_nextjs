import React from "react";

const AppPromotion = () => {
  return (
    <section className=" py-16  px-4 md:px-8 lg:px-20   relative  bg-gradient-to-r from-amber-500 to-orange-400  min-h-96 bg-cover bg-no-repeat rounded-xl ">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book on the go with our app
          </h2>
          <p className="text-gray-50 mb-6">
            Download our mobile app and enjoy quick, seamless booking, real-time updates, and exclusive app-only deals.
          </p>
          <div className="flex justify-center lg:justify-start gap-2">
            <img
              src="/apply-store.png"
              alt="Download on App Store"
              className="h-14 w-auto cursor-pointer rounded-md hover:shadow-xl transition-all duration-300"
            />
            <img
              src="/play-store.jpg"
              alt="Get it on Google Play"
              className="h-14 w-auto cursor-pointer rounded-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>
        <div className="relative w-full max-w-sm mx-auto sm:max-w-sm md:max-w-md">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/app.jpg"
              alt="App Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
