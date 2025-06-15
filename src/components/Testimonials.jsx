import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Anjali Sharma",
    from: "Delhi, India",
    rating: 5,
    review: "Booking was smooth and super fast. I got amazing deals and everything went perfectly!",
    avatar: "/client-01.png",
  },
  {
    id: 2,
    name: "Rahul Verma",
    from: "Bangalore, India",
    rating: 4,
    review: "Customer support helped me reschedule my flight hassle-free. Loved the experience!",
    avatar: "/client-02.png",
  },
  {
    id: 3,
    name: "Seema Singh",
    from: "Mumbai, India",
    rating: 4.5,
    review: "Their mobile app made booking so easy. Also, got a discount coupon!",
    avatar: "/client-01.png",
  },
  {
    id: 4,
    name: "Vikram Patel",
    from: "Ahmedabad, India",
    rating: 5,
    review: "I’ve booked multiple times — always found the best fares and quick confirmations.",
    avatar: "/client-02.png",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex justify-center mt-2 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar && <FaStar className="opacity-50" />}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16  px-4 md:px-8 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What Our Travelers Say
        </h2>
        <p className="text-gray-200 mt-2">Real experiences from our happy flyers.</p>
      </div>
      <div className="h-[400px] w-full ">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-full pb-10 "
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} >
              <div className="bg-orange-50 rounded-2xl shadow-md   p-6 mx-2 h-full   text-center transition-all duration-300">
                <div className="flex flex-col items-start gap-3">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <StarRating rating={item.rating} />
                </div>
                <div className="py-6  my-3 text-left border-b-2 border-dashed border-gray-300" >
                  <p className="text-gray-800 text-sm lg:text-2xl md:text-xl mt-3">{item.review}</p>
                </div>
                <div className="flex items-center  gap-4 mt-7">
                  <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">from {item.from}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
