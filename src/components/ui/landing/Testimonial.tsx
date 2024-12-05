import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.',
      name: 'John Doe',
      image: 'https://via.placeholder.com/50', 
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.',
      name: 'John Doe',
      image: 'https://via.placeholder.com/50',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.',
      name: 'John Doe',
      image: 'https://via.placeholder.com/50', 
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
        <p className="mt-4 text-gray-600">
          Everything you need to start achieving, right at your fingertips.
        </p>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-1/4 bg-blue-500 rounded-full"></div>
        </div>

     
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-lg p-6 flex flex-col items-start text-center bg-[#D9D9D9]"
            >
          
              <FaQuoteLeft className="text-4xl text-gray-400" />
            
              <p className="mt-4 text-gray-800 font-medium">
                {testimonial.text}
              </p>
          
              <div className="mt-6 flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
