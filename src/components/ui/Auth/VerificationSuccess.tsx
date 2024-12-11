import React from 'react';

const VerificationSuccess: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-md p-8 text-center">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">Verification Successful</h1>
        <p className="text-gray-700">
          Your account has been successfully verified. You can now enjoy all the features of our platform.
        </p>
      </div>
    </div>
  );
};

export default VerificationSuccess;
