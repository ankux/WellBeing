import React from 'react';
import { FaUser, FaUsers, FaLaptop } from 'react-icons/fa'; 
import { FaArrowRightLong } from "react-icons/fa6";

function ServicesSection() {
  return (
    <div className="p-6 md:p-20 font-poppins">
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8">
        <div className="md:w-1/3 mb-8 md:mb-0 md:self-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
            Let Us Solve Your Problem
          </h2>
          <p className="text-gray-500 text-center md:text-left max-md:hidden">
            From personal to group and online therapy, we provide comprehensive support tailored to your needs. Start your wellness journey with us today.
          </p>
          <a href="/services" className='max-md:hidden mt-4 text-blue-500'>
              <p className='mt-3 text-blue-500 inline-flex items-center gap-2 font-semibold'> Know more <FaArrowRightLong /> </p>
            </a>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between md:w-2/3 md:space-x-4">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3 h-full">
            <FaUser className="text-6xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Personal Therapy</h3>
            <p className="text-gray-500">
              Experience one-on-one sessions with our expert therapists to address your needs and challenges.
            </p>
          </div>
          <div className="flex flex-col min-h-fit items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3 h-full">
            <FaUsers className="text-6xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Group Therapy</h3>
            <p className="text-gray-500">
              Join group therapy sessions to share experiences and gain support from others with similar challenges.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/3 h-full">
            <FaLaptop className="text-6xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Online Therapy</h3>
            <p className="text-gray-500">
              Access therapy from the comfort of your home through our secure and convenient online sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
