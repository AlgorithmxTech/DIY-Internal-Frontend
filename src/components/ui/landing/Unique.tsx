import React from 'react';
import { FaRocket, FaLock } from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';

const Unique: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
       
        <h2 className="text-3xl font-extrabold text-gray-900">
          Discover What Makes Us Unique
        </h2>
        <p className="mt-4 text-gray-600">
          Everything you need to start achieving, right at your fingertips.
        </p>
        <div className="mt-2  flex justify-center">
          <div className="h-1 w-1/4 bg-blue-500 rounded-full"></div>
        </div>

       
        <div className="mt-12 grid grid-cols-1 text-start md:grid-cols-3 gap-8">
         
          <div className="bg-blue-500 text-white text-start rounded-lg shadow-lg p-6 flex flex-col items-start">
            <div className='p-3 rounded-full bg-white'>
            <FaRocket className="text-4xl text-blueDark" />
            </div>
         
            <h3 className="text-lg font-bold text-start mt-4">LOREM IPSUM DOLOR</h3>
            <p className="mt-2 text-start text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.
            </p>
          </div>


          <div className="bg-gray-300 text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-start">
          <div className='p-3 rounded-full bg-blueLight'>
          <BiTargetLock className="text-4xl text-white" />
          </div>
          
            <h3 className="text-lg font-bold mt-4">LOREM IPSUM DOLOR</h3>
            <p className="mt-2 text-start text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-start">
          <div className='p-3 rounded-full bg-white'>

            <FaLock className="text-4xl text-blueDark" />
          </div>
            <h3 className="text-lg font-bold mt-4">LOREM IPSUM DOLOR</h3>
            <p className="mt-2 text-start text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
