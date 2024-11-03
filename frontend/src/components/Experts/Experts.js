import React, { useState, useEffect } from 'react'
import ExpertCard from './ExpertCard'



const Experts = () => {

  const [experts, setExperts] = useState([]);
  
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await fetch('http://localhost:8080/experts');
        const data = await response.json();
        setExperts(data);
      } catch (error) {
        console.error('Error fetching experts data:', error);
      }
    };

    fetchExperts();
  }, []);
  

  return (
    <div className='mt-10 mb-10 px-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 justify-items-center'>
      {experts.map((expert, index) => (
        <ExpertCard
          key={index}
          name={expert.name}
          experience={expert.experience}
          specialities={expert.specialities}
          rate={expert.rate}
          viewProfileLink={`/profile/${expert._id}`}
          bookSessionLink={`/booksession/${expert._id}`}
          image={expert.image}
        />
      ))}
    </div>
  )
}

export default Experts