import React from 'react';

const HowItWork: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
        <h2 className="text-3xl font-extrabold text-center text-gray-900">How it Works?</h2>

    
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
    
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blueDark text-white rounded-full flex items-center justify-center text-lg font-bold">
              1
            </div>
            
            <h3 className="text-lg font-bold mt-6 text-gray-900">LOREM IPSUM DOLOR</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.
            </p>
          </div>
          <div className="hidden md:block mx-5 w-1/2 border-dotted border-t-2 border-black mt-6"></div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blueDark text-white rounded-full flex items-center justify-center text-lg font-bold">
              2
            </div>
           
            <h3 className="text-lg font-bold mt-6 text-gray-900">LOREM IPSUM DOLOR</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.
            </p>
          </div>
          <div className="hidden md:block mx-5 w-1/2 border-dotted border-t-2 border-black mt-6"></div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blueDark text-white rounded-full flex items-center justify-center text-lg font-bold">
              3
            </div>
            <h3 className="text-lg font-bold mt-6 text-gray-900">LOREM IPSUM DOLOR</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.
            </p>
          </div>
        </div>

   
      </div>
    </section>
  );
};

export default HowItWork;
