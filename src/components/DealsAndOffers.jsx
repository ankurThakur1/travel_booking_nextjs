import React from 'react';

const deals = [
  {
    id: 1,
    title: "20% Off on Domestic Flights",
    description: "Book now and save big on all domestic routes with AirIndia.",
    image: "/flat20.jpg",  
    badge: "Limited Time",
  },
  {
    id: 2,
    title: "Flat ₹1000 Off on International Flights",
    description: "Fly abroad for less with our exclusive summer offer.",
    image: "/flight1000.jpg",
    badge: "Hot Deal",
  },
  {
    id: 3,
    title: "Zero Cancellation Fee",
    description: "Enjoy flexibility with zero cancellation charges on select bookings.",
    image: "/zero.jpg",
    badge: "Flexible",
  },
];

const DealsAndOffers = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-20 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Deals & Offers</h2>
        <p className="text-gray-600 mt-2">Save more on your next flight with our latest deals.</p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-48 bg-gray-200">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span className="text-sm bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
                {deal.badge}
              </span>
              <h3 className="text-xl font-semibold mt-3 text-gray-800">{deal.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{deal.description}</p>
              <button className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 cursor-pointer transition">
                Grab Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsAndOffers;
