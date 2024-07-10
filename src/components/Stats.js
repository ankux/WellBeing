import React from 'react';

function Stats() {
  const statsData = [
    { value: '1300+', description: 'Happy Clients' },
    { value: '5100+', description: 'Therapy Sessions' },
    { value: '290+', description: 'Workshops Conducted' },
    { value: '70+', description: 'Qualified Therapists' },
  ];

  return (
    <div className="py-12 bg-gray-100 font-poppins">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Why <i className='font-normal'> WellBeing </i> For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-12 gap-2">
          {statsData.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-900 text-gradient">{stat.value}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
