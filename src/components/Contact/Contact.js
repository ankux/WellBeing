import React from 'react';

const Contact = () => {
  return (
    <div className="flex font-poppins flex-col md:flex-row gap-10 items-center justify-evenly min-h-auto p-4 py-8 md:px-52">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-left">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 w-full py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2 p-4">
        <img
          src="/assets/contact.svg"
          alt="Contact Us"
          className="w-full h-auto rounded-lg pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Contact;


