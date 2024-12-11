import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import api from '../../../utils/Api';

const ForgetPage: React.FC = () => {
  const [email, setemail] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/forgot-password/", { email });
      const data = response.data.message;
      console.log(data);
      setSuccessMessage("Password reset link has been sent to your email.");
    } catch (error) {
      console.error("Error sending reset password email:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {successMessage ? (
        <h1 className="text-xl lg:text-2xl text-green-600 font-bold text-center">
          {successMessage}
        </h1>
      ) : (
        <>
          <h1 className="text-2xl lg:text-3xl text-black font-bold mb-2 text-center">
            Forgot Password?
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            No worries, we'll send you reset instructions.
          </p>
          <form
            onSubmit={handleResetPassword}
            className="w-full max-w-md flex flex-col items-center space-y-4"
          >
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="text-gray-500" />
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-10 py-2 border border-gray-300 rounded bg-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
            >
              Reset Password
            </button>
          </form>
          <a
            href="/signin"
            className="mt-4 text-blue-600 font-semibold underline hover:text-blue-700"
          >
            Back to login
          </a>
        </>
      )}
    </div>
  );
};

export default ForgetPage;
