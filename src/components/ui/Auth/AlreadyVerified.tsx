import React from 'react';

const AlreadyVerified: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-md p-8 text-center">
        <h1 className="text-2xl font-semibold text-blue-600 mb-4">Already Verified</h1>
        <p className="text-gray-700">
          Your account is already verified. You can now use all features of our platform.
        </p>
      </div>
    </div>
  );
};

export default AlreadyVerified;
