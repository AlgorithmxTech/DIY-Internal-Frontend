import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Pricing</h2>
        <p className="mt-4 text-center text-gray-600">
          Everything you need to start achieving, right at your fingertips.
        </p>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
        </div>

        {/* Toggle Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-6 py-2 font-semibold rounded-lg ${
              isMonthly
                ? 'bg-blueDark text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-purple-200'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-6 py-2 font-semibold rounded-lg ${
              !isMonthly
                ? 'bg-blueDark text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-purple-200'
            }`}
          >
            Annually
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Free Plan */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 text-center flex flex-col">
            <h3 className="text-xl font-bold text-gray-900">LOREM IPSUM DOLOR</h3>
            <p className="mt-4 text-gray-700 text-lg font-bold">Free</p>
            <ul className="mt-6 space-y-2 flex-grow">
              {Array(5)
                .fill('Lorem ipsum dolor sit ame')
                .map((item, index) => (
                  <li key={index} className="flex items-center justify-start space-x-2 text-gray-600">
                    <FaTimesCircle className="text-gray-500" />
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-blueDark text-white font-semibold rounded-lg hover:bg-purple-600">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-blueDark rounded-lg shadow-lg p-6 text-center text-white flex flex-col flex-grow">
            <h3 className="text-xl font-bold">LOREM IPSUM DOLOR</h3>
            <p className="mt-4 text-3xl font-bold">XX USD</p>
            <ul className="mt-6 space-y-2 flex-grow">
              {Array(7)
                .fill('Lorem ipsum dolor sit ame')
                .map((item, index) => (
                  <li key={index} className="flex items-center justify-start space-x-2">
                    <FaCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-white text-blueDark font-semibold rounded-lg hover:bg-gray-200">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 text-center flex flex-col">
            <h3 className="text-xl font-bold text-gray-900">LOREM IPSUM DOLOR</h3>
            <p className="mt-4 text-gray-700 text-lg font-bold">XX USD</p>
            <ul className="mt-6 space-y-2 flex-grow">
              {Array(6)
                .fill('Lorem ipsum dolor sit ame')
                .map((item, index) => (
                  <li key={index} className="flex items-center justify-start space-x-2 text-gray-600">
                    <FaCheckCircle className="text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-blueDark text-white font-semibold rounded-lg hover:bg-purple-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
