import React from 'react';

const VerificationError: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-md p-8 text-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">Verification Failed</h1>
        <p className="text-gray-700">
          We could not verify your account. Please try again or contact support if the issue persists.
        </p>
      </div>
    </div>
  );
};

export default VerificationError;
