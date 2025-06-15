// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


// const Footer = () => {
//   return (
//     <footer className="bg-[#0d0d0d] text-gray-700 pt-10 pb-6 px-4 md:px-8 lg:px-16 border-t border-gray-300">
//       <div className="container mx-auto">
//         <div className="max-w-[85%] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">

//             <div>
//             <Image src="/logo.svg" alt="SearchMyReservation Logo" width={200} height={50} className="mb-4 px-2 py-3 bg-gray-100 rounded-lg" />
//             <div className="flex items-center mb-2">
//                 <FaPhoneAlt className="mr-2 text-gray-200" />
//                 <Link href="tel:+1-855-526-0275" className="text-gray-300 text-2xl">+1-855-526-0275</Link>
//             </div>
//             <div className="flex items-center">
//                 <FaEnvelope className="mr-2 text-gray-200" />
//                 <Link href="mailto:booking@searchmyreservation.com" className="text-gray-300 text-xs">booking@searchmyreservation.com</Link>
//             </div>
//             </div>

//             <div>
//             <h4 className="font-semibold mb-3 text-base text-gray-200">The Company</h4>
//             <ul className="space-y-2">
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Home</Link>
//                 </li>
//                 <li>
//                   <Link href="/about" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">About Us</Link>
//                 </li>
//                 <li>
//                   <Link href="/contact" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Contact Us</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">FAQs</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Baggage Policy</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Post Ticketing Fee</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Price Match Promise</Link>
//                 </li>
//             </ul>
//             </div>

//             <div>
//             <h4 className="font-semibold mb-3 text-base text-gray-200">Legal</h4>
//             <ul className="space-y-2">
//                 <li>
//                   <Link href="/privacy-policy" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Privacy Policy</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Terms & Conditions</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Refund Policy</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Our Service Fee</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Damage Management Policy</Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Taxes & Fees</Link>
//                 </li>
//             </ul>
//             </div>

//             <div>
//                 <h4 className="font-semibold mb-3 text-base text-gray-200">Destinations</h4>
//                 <ul className="space-y-2">
//                     <li>
//                       <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Flight to New York</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div>
//                 <h4 className="font-semibold mb-3 text-base text-gray-200">Airlines</h4>
//                 <ul className="space-y-2">
//                     <li>
//                       <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">American Flights</Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-10 mb-5 text-xs text-gray-600 px-2 py-4 border-t-gray-500 border-t border-b border-b-gray-500">
//         <p className="text-sm text-gray-400">
//           This website is solely liable for the travel booking website, nothing more than that. We here discover the cheapest flight deals as well as all the services related to flight booking across the multiple airlines and booking platforms. Our website, searchmyreservation.com, is directly linked to many of the inverse hyperlinks, which are not related to our flight booking services. Be cautious while updating your personal details at searchmyreservation.com, and then confirm first whether they are linked to a third party or not.
//         </p>

//       </div>
//         <div className="flex gap-4 items-center justify-between  max-w-7xl mx-auto">
//           <p className="text-center text-gray-400 text-xs md:text-lg">
//             © 2024 Searchmyreservation.com. All rights reserved.
//           </p>
//           <Image src={"/payment-methods.png"} alt="Visa" width={280} height={30} className="w-52" />
//         </div>

//     </footer>
//   )
// }

// export default Footer;


import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhoneFlip, FaMailchimp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-[#16243d] bg-no-repeat bg-center bg-blend-overlay " style={{backgroundImage: 'url(/bg-footer.png)'}}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-3xl font-bold text-orange-600">
            Aero<span className="text-stone-300">Haven</span>
          </Link>
          <p className="text-gray-300">
            Making your travel dreams come true. Find flights, explore destinations, and book with confidence.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-orange-500 hover:text-orange-600">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-orange-500 hover:text-orange-600">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-orange-500 hover:text-orange-600">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="https://wa.me/1234567890" className="text-orange-500 hover:text-orange-600">
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-semibold text-gray-300">Quick Links</h4>
          <Link href="/" className="text-gray-300 hover:text-orange-500">Home</Link>
          <Link href="/about-us" className="text-gray-300 hover:text-orange-500">About Us</Link>
          <Link href="/privacy" className="text-gray-300 hover:text-orange-500">Privacy Policy</Link>
          <Link href="/contact-us" className="text-gray-300 hover:text-orange-500">Contact Us</Link>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-semibold text-gray-300">Contact Info</h4>
          <p className="text-stone-300 flex gap-2 items-center"><FaLocationDot /> 303 Morgan Street, Los Angeles, USA</p>
          <p className="text-stone-300 flex gap-2 items-center"><FaPhoneFlip /> +91 9999999999</p>
          <p className="text-stone-300 flex gap-2 items-center"><MdEmail /> support@aerohaven.com</p>
          <p className="text-stone-300 flex gap-2 items-center">🕒 Mon - Sat: 9:00 AM - 8:00 PM</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-gray-300">Newsletter</h4>
          <p className="text-gray-300">Subscribe to get latest travel updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-lg border border-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-stone-500"
            />
            <button className="bg-orange-500 text-white py-2 px-6 rounded-r-4xl hover:bg-orange-600 hover:shadow-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="border-t mt-8 py-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} AeroHaven. All rights reserved. Made by Ankur Thakur
      </div>
    </footer>
  );
}
