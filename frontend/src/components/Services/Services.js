import React from 'react';
import ServicesCard from './ServicesCard';
import servicesData from './ServicesData';

function Services() {
  
  return (
    <div className='font-poppins flex justify-center items-center p-4'>
        <div className=''>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl md:text-5xl font-bold mt-8'>Our services</h1>
            </div>
            <hr className="border-t border-2 border-gray-100 my-8" />  
            <div className='md:flex'>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <img src="assets/services/ourServices.svg" alt="Our Services" className='md:w-[50%] object-cover pointer-events-none'/>
                </div>
                <div className='md:w-1/2 flex flex-col justify-center p-4 md:px-14 text-justify m-1 rounded-md'>
                    <h1 className='font-bold text-4xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient mb-6 inline-flex items-center gap-2'>What we offer</h1>
                    <p className='text-gray-500'>
                        At WellBeing, we believe in the profound power of holistic health and wellness. Our services are designed to help individuals find balance, healing, and growth. WellBeing is more than just a service provider – it’s a community built on compassion, support, and transformation.
                    </p>
                </div>
            </div>

            <hr className="border-t border-2 border-gray-100 my-8" />  

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:px-20'>
                {servicesData.map((service, index) => (
                  <ServicesCard 
                    key={service?.id} 
                    Icon={service?.Icon} 
                    title={service?.title} 
                    description={service?.description} 
                    id={service?.id} 
                  />
                ))}
            </div>
        </div>
    </div>
  );
}

export default Services;
