import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { checkAuth } from '../../../CheckAuth';
import { getGreeting } from './GetGreeting';

function HeroSection() {
  const userName = localStorage.getItem('userName');
  const greet = getGreeting();
  return (
    <div className="flex font-poppins flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100">
      <div className="md:w-2/3 text-center md:text-left p-6">
        {
          checkAuth()
          ?
          <h1 className="md:text-7xl sm:text-blue-600  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient text-4xl font-bold mb-4"> <span className='max-sm:text-lg  font-normal'> {greet}, </span> <br /> <span className='bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-gradient'> {userName} </span> </h1>
          :
          <h1 className="md:text-7xl sm:text-blue-600  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient text-4xl font-bold mb-4"> <span className='max-sm:text-lg  font-normal'> We care about your </span> <br />  Mental Health </h1>
        }
        <p className="text-lg text-gray-600 max-w-[75%] max-sm:hidden mb-6">
          Discover a range of wellness services designed to help you achieve your health goals. Join our community today and start your journey towards better well-being.
        </p>
        <div className="flex text-sm font-semibold justify-center md:justify-start space-x-4 mt-5">
            <Link to="/experts" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-800 text-white px-3 py-3 md:px-6 md:py-3 rounded-md">
                Book a Session
            </Link>
            <button className="border border-gray-300 hover:bg-gray-200 text-gray-700 px-3 py-3 md:px-6 md:py-3 rounded-md flex items-center">
                <FaPhoneAlt className="mr-2" />
                Get a Call
            </button>
       </div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img className="w-full h-auto md:max-w-md pointer-events-none" src="/assets/heroBanner.svg" alt="Wellness" />
      </div>
    </div>
  )
}

export default HeroSection;