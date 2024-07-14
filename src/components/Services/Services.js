import React from 'react'
import { FaUser, FaUsers, FaLaptop } from 'react-icons/fa'; 
import { TbYoga } from "react-icons/tb";
import { IoMaleFemale } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";


function Services() {
  return (
    <div className='font-poppins flex justify-center items-center p-4'>
        <div className=''>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl md:text-5xl font-bold mt-8'>Our services</h1>
            </div>
            <hr className="border-t border-2 border-gray-100 my-8" />  
            <div className=''> 
                <div className='md:flex'>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <img src="assets/services/ourServices.svg" alt="" srcset="" className='md:w-[50%] object-cover pointer-events-none'/>
                    </div>
                    <div className='md:w-1/2 flex flex-col justify-center p-4 md:px-14 text-justify m-1 rounded-md'>
                        <h1 className='font-bold text-4xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient mb-6 inline-flex items-center gap-2'> What we offer</h1>
                        <p className='text-gray-500'>At WellBeing, we believe in the profound power of holistic health and wellness. Our services are designed to help individuals find balance, healing, and growth in their lives. We offer a wide range of services, provided by a team of dedicated therapists, wellness experts, and holistic practitioners. WellBeing is more than just a service provider – it’s a community built on compassion, support, and transformation.</p>
                    </div>
                </div>
                <hr className="border-t border-2 border-gray-100 my-8" />  
                <div className='flex flex-col md:flex-row items-start justify-between md:w-full md:space-x-4 md:px-20 md:mb-4'>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3 h-full">
                        <FaUser className="text-6xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Personal Therapy</h3>
                        <p className="text-gray-500 text-justify">
                            Experience one-on-one sessions with our expert therapists to address your needs and challenges.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3 h-full">
                        <FaUsers className="text-6xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Group Therapy</h3>
                        <p className="text-gray-500 text-justify">
                            Join group therapy sessions to share experiences and gain support from others with similar challenges.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3 h-full">
                        <FaLaptop className="text-6xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Online Therapy</h3>
                        <p className="text-gray-500 text-justify">
                            Access therapy from the comfort of your home through our secure and convenient online sessions.
                        </p>
                    </div>
                    
                </div>
                <div className='flex flex-col md:flex-row items-start justify-between md:w-full md:space-x-4 md:px-20 md:mt-4'>
                     <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3 h-full">
                        <TbYoga className="text-6xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Yoga Classes</h3>
                        <p className="text-gray-500 text-justify">
                            Engage in our guided yoga sessions to improve flexibility, strength, and overall well-being at the ease of your home. Our expert instructors cater to all levels, from beginners to advanced practitioners.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3 h-full">
                        <IoMaleFemale className="text-6xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Couples Therapy</h3>
                        <p className="text-gray-500 text-justify">
                            Enhance your relationship with professional guidance. Our couples therapy sessions help partners navigate challenges, improve communication, and build a stronger connection.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/3 h-full">
                        <FaHandsHoldingChild className="text-6xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Child and Adolescent Therapy</h3>
                        <p className="text-gray-500 text-justify">
                            Provide your children and teenagers with the support they need. Our specialized therapy sessions address emotional, behavioral, and developmental issues in a safe and nurturing environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services