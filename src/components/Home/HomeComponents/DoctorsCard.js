import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const doctors = [
  {
    name: "Kirti Cherian",
    designation: "Yoga Instructor",
    image: "/assets/specialists/kirti.jpg",
  },
  {
    name: "Dr. Jamshed Bath",
    designation: "Therapist",
    image: "/assets/specialists/jamshed.jpg",
  },
  {
    name: "Dr. Yamini Gulzar",
    designation: "Psychiatrist",
    image: "/assets/specialists/yamini.jpg",
  },
  {
    name: "Dr. Ehsaan Ramesh",
    designation: "Therapist",
    image: "/assets/specialists/ehsaan.jpg",
  },
  {
    name: "Dr. Nishtha Hetan",
    designation: "Psychiatrist",
    image: "/assets/specialists/nishtha.jpg",
  },
];

const DoctorsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === doctors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentDoctor = doctors[currentIndex];

  return (
    <div className="flex flex-col font-poppins sm:flex-row items-center justify-evenly p-4 py-16">
      <div className='relative w-full max-w-xl'>
        <h2 className=' sm:text-left text-4xl md:text-6xl font-bold mb-6 md:mb-8 max-md:text-center'>  Meet our Specialists </h2>
        <p className='sm:text-left sm:text-lg text-gray-500 max-md:hidden'>Our team of specialists is dedicated to providing the highest level of care. Each member brings extensive experience and a commitment to improving patient outcomes. Get to know our experts and their areas of specialization.</p>
      </div>
      <div className="relative w-full md:h-96 max-sm:py-16 max-w-sm p-4 flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
        <img
          src={currentDoctor.image}
          alt={currentDoctor.name}
          className="w-40 h-40 md:w-52 md:h-52 mx-auto mb-4 rounded-full"
        />
        <h2 className="mt-4 text-xl font-semibold text-center">{currentDoctor.name}</h2>
        <p className="text-center text-gray-500">{currentDoctor.designation}</p>
        <div className="p-3 absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={handlePrev}
            className="p-3 text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="p-3 absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={handleNext}
            className="p-3 text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
