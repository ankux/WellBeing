import React from 'react'
import { GoGoal } from "react-icons/go";
import { HiBeaker } from "react-icons/hi2";
import { RiCommunityFill } from "react-icons/ri";

function About() {
  return (
    <div className='font-poppins p-4 md:p-8'>
        <div className='flex justify-center items-center mt-4'>
            <h1 className='font-bold text-4xl md:text-5xl'>About Us</h1>
        </div>
        
        <hr className="border-t border-2 border-gray-100 my-8" />

        <div className='mt-4'>
            <div className='md:flex'>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <img src="assets/about/ourJourney.svg" alt="" srcset="" className='md:w-[50%] object-cover pointer-events-none'/>
                </div>
                <div className='md:w-1/2 flex flex-col justify-center p-4 md:px-14 text-justify m-1 rounded-md'>
                    <h1 className='font-bold text-4xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient mb-6 inline-flex items-center gap-2'> Our Journey to WellBeing</h1>
                    <p className='text-gray-500'>At WellBeing, we believe in the profound power of holistic health and wellness. Our story began with a simple yet powerful idea: to create a sanctuary where individuals can find balance, healing, and growth in their lives. Founded by a team of dedicated therapists, wellness experts, and holistic practitioners, WellBeing is more than just a service provider – it’s a community built on compassion, support, and transformation.</p>
                </div>
            </div>
            <hr className="border-t border-2 border-gray-100 my-8" />
            <div className='md:flex'>
                <div className='md:w-1/2 bg-gray-100 p-4 my-2 md:mx-2 rounded-md'>
                    <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient mb-4'> <GoGoal className='text-blue-500 mb-2 text-6xl' /> Our Mission</h1>
                    <p className='text-gray-500 text-justify'>Our mission is to empower individuals to achieve their highest potential through comprehensive mental health services, holistic therapies, and wellness practices. We are committed to providing a safe, inclusive, and nurturing environment where everyone can embark on their unique journey towards mental, emotional, and physical well-being.</p>
                </div>
                <div className='md:w-1/2 bg-gray-100 p-4 my-2 md:mx-2 rounded-md'>
                    <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient mb-4'> <HiBeaker className='text-blue-500 mb-2 text-6xl' /> Our Approach</h1>
                    <p className='text-gray-500 text-justify'>Wellness is a personal journey, unique to each individual, and there’s no one-size-fits-all solution. Our approach is customized to meet the specific needs of every client. Our expert team combines traditional therapeutic methods with holistic practices to offer a comprehensive and effective path to well-being. Whether you need support for mental health challenges, want to improve your physical health, or seek to deepen your mindfulness practice, we are here to guide you every step of the way.</p>
                </div>
                <div className='md:w-1/2 bg-gray-100 p-4 my-2 md:mx-2 rounded-md'>
                    <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient mb-4'> <RiCommunityFill className='text-blue-500 mb-2 text-6xl' /> Our Community</h1>
                    <p className='text-gray-500 text-justify'>WellBeing is more than just a place to receive therapy; it’s a vibrant community of individuals dedicated to supporting one another. We host regular events, workshops, and group sessions to foster connections and create a network of support. Our community is open to everyone, and we strive to create an inclusive space where all individuals feel welcome and valued.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About