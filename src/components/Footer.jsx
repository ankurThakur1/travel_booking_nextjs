import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhoneFlip, FaMailchimp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-[#16243d] bg-no-repeat bg-center bg-blend-overlay " style={{backgroundImage: 'url(/bg-footer.png)'}}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-3xl font-bold text-[#1ca8cb]">
            Aero<span className="text-[#d4f4f9]">Haven</span>
          </Link>
          <p className="text-gray-300">
            Making your travel dreams come true. Find flights, explore destinations, and book with confidence.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-[#1980a1] hover:text-[#1ca8cb]">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-[#1980a1] hover:text-[#1ca8cb]">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-[#1980a1] hover:text-[#1ca8cb]">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="https://wa.me/1234567890" className="text-[#1980a1] hover:text-[#1ca8cb]">
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-semibold text-gray-300">Quick Links</h4>
          <Link href="/" className="text-gray-300 hover:text-[#1980a1]">Home</Link>
          <Link href="/about-us" className="text-gray-300 hover:text-[#1980a1]">About Us</Link>
          <Link href="/privacy" className="text-gray-300 hover:text-[#1980a1]">Privacy Policy</Link>
          <Link href="/contact-us" className="text-gray-300 hover:text-[#1980a1]">Contact Us</Link>
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
            <button className="bg-[#1ca8cb] text-white py-2 px-6 rounded-r-4xl hover:bg-[#1980a1] hover:shadow-[#1980a1] hover:shadow-lg transition-all duration-300 cursor-pointer">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="border-t mt-8 py-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} AeroHaven. All rights reserved. Made by Ankur Thakur
      </div>
    </footer>
  );
}
