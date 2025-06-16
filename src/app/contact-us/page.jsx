"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';


const ContactUs = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  return (
    <section className="relative bg-cover bg-center">
      <div className="w-full pt-24 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.5)), url("/mountain1.jpg")' }}>
        <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto">
          <div className="w-full py-12">
            <div className="lg:container py-8 px-4 mx-auto flex flex-col items-center gap-8">
              <p className="lg:text-7xl md:text-5xl text-4xl font-semibold text-[#36bbda]">Contact Us</p>
              <Link href="/">
                <button type="button" className="w-full bg-[#1e485b] text-white md:text-xl sm:text-sm py-2 px-8 rounded hover:bg-[#1b6783] transition-all duration-300 cursor-pointer">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-6">
        <div className="w-full flex justify-center items-center">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1e485b] py-3 text-center sm:text-left relative z-10">Feel Free to <span className="relative text-white before:content-[''] before:absolute before:-top-1 before:-left-2 before:w-full before:h-full before:bg-[#1ca8cb] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg] before:px-14 before:py-5 sm:before:px-16 sm:before:py-6 sm:before:-top-1 sm:before:-left-3 md:before:px-28 md:before:py-8">Write us</span> Anytime</h2>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-white flex flex-col justify-center space-y-6">
            <div className="rounded-3xl border-black bg-[#16243d]">
              <div className="w-full h-72 rounded-sm  relative">
                <Image
                  src={"/beach.jpg"}
                  fill
                  alt="beach"
                  className="rounded-3xl object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-4 py-6">
                <div className="flex gap-8 border-b border-gray-600 sm:px-20 px-6">
                  <h3 className="w-10 h-10 sm:w-16 sm:h-16 rounded-full flex justify-center items-center text-sm sm:text-xl md:text-xl lg:text-2xl font-bold text-[#ff9d3d] bg-[#2d3a50]"><FaPhoneFlip /></h3>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-[16px]   mb-2">Hot Line</h4>
                    <p className="text-gray-200 text-sm mb-4 sm:text-base md:text-lg lg:text-xl font-semibold">+91 9999999999</p>
                  </div>
                </div>
                <div className="flex gap-8 border-b border-gray-600 sm:px-20 px-6">
                  <h3 className="w-10 h-10 sm:w-16 sm:h-16 rounded-full   flex justify-center items-center text-sm sm:text-xl md:text-xl lg:text-2xl font-bold text-[#ff9d3d] bg-[#2d3a50]"><MdEmail /></h3>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-gray-400 text-xl sm:text-xl md:text-2xl lg:text-[16px]   mb-2">Send Email</h4>
                    <p className="text-gray-200 text-sm mb-4 sm:text-base md:text-lg lg:text-xl font-semibold">support@aerohaven.com</p>
                  </div>
                </div>
                <div className="flex gap-8  sm:px-20 px-6">
                  <h3 className="w-10 h-10 sm:w-16 sm:h-16 rounded-full   flex justify-center items-center text-sm sm:text-xl md:text-xl lg:text-2xl font-bold text-[#ff9d3d] bg-[#2d3a50]"><FaLocationDot /></h3>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-gray-400 text-xl sm:text-xl md:text-2xl lg:text-[16px]   mb-2">Our Address</h4>
                    <p className="text-gray-200 text-sm mb-4 sm:text-base md:text-lg lg:text-xl font-semibold">303 Morgan Street, Los Angeles, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-800 font-semibold mb-2">First Name</label>
                  <input id="firstName" name="firstName" type="text" placeholder="First Name" required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ca8cb] focus:outline-none shadow-sm placeholder:text-gray-400" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-800 font-semibold mb-2">Last Name</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Last Name" required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ca8cb] focus:outline-none shadow-sm placeholder:text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
                <input id="email" name="email" type="email" placeholder="Email Address" required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ca8cb] focus:outline-none shadow-sm placeholder:text-gray-400" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Subject" required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ca8cb] focus:outline-none shadow-sm placeholder:text-gray-400" />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" placeholder="Your message here...." rows={5} required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ca8cb] focus:outline-none shadow-sm placeholder:text-gray-400" />
              </div>

              <button type="submit" className="w-full py-3 bg-[#1ca8cb] hover:bg-[#1980a1] hover:shadow-[#1980a1] hover:shadow-lg text-white font-semibold rounded-lg shadow-md transition-all duration-300 cursor-pointer">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;