import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';

const VerificationSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Navigate to the signin page and replace history
    navigate('/signin', { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
            <FaCheck size={24} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Verification Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Congratulations! Your account has been verified. You can now access all the features of our platform.
        </p>
        <button
          onClick={handleRedirect}
          className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default VerificationSuccess;
