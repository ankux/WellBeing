import React from 'react'

const ExpertCard = ({ name, experience, specialities, rate, viewProfileLink, bookSessionLink, image }) => {
  return (
    <div className='font-poppins rounded-md p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
      <div className='w-full flex justify-around items-center max-sm:flex-col'>
        <div className='sm:min-w-[33%] sm:max-w-[33%] max-sm:w-1/2 max-sm:mb-2'>
          <img className='rounded-full' src={image} alt={`${name}'s profile`} />
        </div>
        <div className='w-full sm:ml-8'>
          <div className='text-3xl sm:text-4xl font-semibold'>{name}</div>
          <a href={viewProfileLink}>
            <button className='border-2 mt-2 p-1 px-4 rounded-lg text-blue-500 border-blue-500'>
              View Profile
            </button>
          </a>
          <span className='text-zinc-600 ml-2'>{experience}+ Yrs Experience</span>
          <div className='mt-4 flex gap-2 flex-wrap justify-start items-center'>
            {specialities.map((speciality, index) => (
              <span key={index} className='bg-zinc-200 text-sm text-zinc-800 p-1 rounded-md'>
                {speciality}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-around items-center mt-5 max-sm:flex-col'>
        <div className='flex justify-center items-center font-semibold text-xl sm:min-w-[38%] sm:max-w-[38%] max-sm:w-1/2'>
          <p>₹{rate} <span className='text-zinc-600 text-sm font-normal'> / session </span></p>
        </div>
        <a className='w-full' href={bookSessionLink}>
          <button className='w-full py-2 px-4 rounded-lg border-blue-500 bg-blue-500 text-white hover:text-blue-500 hover:bg-transparent hover:border-2 hover:border-blue-500 max-sm:mt-2'>
            Book a Session
          </button>
        </a>
      </div>
    </div>
  )
}

export default ExpertCard
