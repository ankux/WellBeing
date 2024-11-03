import React from 'react';

const ServicesCard = ({ Icon, title, description, id }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md mb-4 md:mb-0 w-full h-full">
        {Icon && <Icon className="text-6xl mb-4 text-blue-500" />}
        <div className='w-full mt-2 mb-2'>
            <h3 className="text-3xl text-left text-zinc-700 font-bold mb-2">{title}</h3>
        </div>
        <p className="text-gray-500 text-justify">
            {description}    
        </p>
        <div className='mt-8'>
            <button className=" bg-blue-500 text-white hover:bg-blue-600  px-3 py-3 md:px-6 md:py-3 rounded-md">
                    Book a Session
            </button>
        </div>
    </div>
  )
}

export default ServicesCard;
