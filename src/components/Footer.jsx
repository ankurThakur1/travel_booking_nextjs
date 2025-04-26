import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-700 pt-10 pb-6 px-4 md:px-8 lg:px-16 border-t border-gray-300">
      <div className="container mx-auto">
        <div className="max-w-[85%] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">

            {/* Logo & Contact */}
            <div>
            <Image src="/logo.svg" alt="SearchMyReservation Logo" width={200} height={50} className="mb-4 px-2 py-3 bg-gray-100 rounded-lg" />
            <div className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2 text-gray-200" />
                <Link href="tel:+1-855-526-0275" className="text-gray-300 text-2xl">+1-855-526-0275</Link>
            </div>
            <div className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-200" />
                <Link href="mailto:booking@searchmyreservation.com" className="text-gray-300 text-xs">booking@searchmyreservation.com</Link>
            </div>
            </div>

            {/* The Company */}
            <div>
            <h4 className="font-semibold mb-3 text-base text-gray-200">The Company</h4>
            <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Contact Us</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">FAQs</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Baggage Policy</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Post Ticketing Fee</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Price Match Promise</Link>
                </li>
            </ul>
            </div>

            {/* Legal */}
            <div>
            <h4 className="font-semibold mb-3 text-base text-gray-200">Legal</h4>
            <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Our Service Fee</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Damage Management Policy</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Taxes & Fees</Link>
                </li>
            </ul>
            </div>

            {/* Destinations & Airlines */}
            <div>
                <h4 className="font-semibold mb-3 text-base text-gray-200">Destinations</h4>
                <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">Flight to New York</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-3 text-base text-gray-200">Airlines</h4>
                <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-300 hover:pl-2 hover:text-orange-400 transition-all duration-300 hover:font-semibold">American Flights</Link>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      {/* Description and Logos */}
      <div className="max-w-7xl mx-auto mt-10 mb-5 text-xs text-gray-600 px-2 py-4 border-t-gray-500 border-t border-b border-b-gray-500">
        <p className="text-sm text-gray-400">
          This website is solely liable for the travel booking website, nothing more than that. We here discover the cheapest flight deals as well as all the services related to flight booking across the multiple airlines and booking platforms. Our website, searchmyreservation.com, is directly linked to many of the inverse hyperlinks, which are not related to our flight booking services. Be cautious while updating your personal details at searchmyreservation.com, and then confirm first whether they are linked to a third party or not.
        </p>

      </div>
        {/* Payment Logos */}
        <div className="flex gap-4 items-center justify-between  max-w-7xl mx-auto">
        {/* Copyright */}
          <p className="text-center text-gray-400 text-xs md:text-lg">
            © 2024 Searchmyreservation.com. All rights reserved.
          </p>
          <Image src={"/payment-methods.png"} alt="Visa" width={280} height={30} className="w-52" />
        </div>

    </footer>
  )
}

export default Footer;