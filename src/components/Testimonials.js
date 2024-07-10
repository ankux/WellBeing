import React from 'react';

const testimonials = [
  {
    name: "Urvashi Sarin",
    image: "/assets/testimonials/urvashi.jpg",
    review: "WellBeing has transformed my health! The team is so supportive and knowledgeable.",
  },
  {
    name: "Amrit Vala",
    image: "/assets/testimonials/amrit.jpg",
    review: "I feel like a new person thanks to the comprehensive care at WellBeing.",
  },
  {
    name: "Vaishali Jain",
    image: "/assets/testimonials/vaishali.jpg",
    review: "Highly recommend WellBeing! They truly care about their patients.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center font-poppins min-h-screen bg-gray-100 p-4 md:py-14">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Customer Said about <i className='font-normal'> <br className='max-md:hidden' /> WellBeing </i></h1>
      <div className="space-y-3 max-w-2xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold text-left">{testimonial.name}</h2>
              <p className="text-gray-600 text-left max-sm:text-xs">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
