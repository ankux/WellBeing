import React, { useState } from 'react';

const faqs = [
  {
    question: "What is WellBeing?",
    answer: "WellBeing is a holistic health and wellness service provider offering personal therapy, group therapy, online therapy, yoga classes, meditation sessions, and mindfulness workshops."
  },
  {
    question: "How can I book a session?",
    answer: "You can book a session through our website by navigating to the 'Book a Session' page and selecting the service you need."
  },
  {
    question: "Do you offer online services?",
    answer: "Yes, we offer online therapy sessions that you can access from the comfort of your home through our secure and convenient online platform."
  },
  {
    question: "What types of therapy do you provide?",
    answer: "We provide personal therapy, group therapy, and online therapy to address various mental health challenges and promote overall well-being."
  },
  {
    question: "Are your services covered by insurance?",
    answer: "Coverage depends on your insurance provider and policy. We recommend contacting your insurance provider to verify if our services are covered."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2">
            <button
              className="w-full text-left p-4 bg-white rounded-lg shadow-md focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
            </button>
            {activeIndex === index && (
              <div className="mt-1 p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
