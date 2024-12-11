import React from "react";
import { useLocation } from "react-router-dom";

const CheckEmail: React.FC = () => {
  const location = useLocation();
  const email = location.state?.email || "your email address"; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4 text-center">
        Check Your Email
      </h1>
      <p className="text-gray-700 text-center">
        A verification email has been sent to <span className="font-medium text-black">{email}</span>.
      </p>
      <p className="text-gray-600 text-center mb-10">
        Please check your inbox and verify your account to proceed.
      </p>
      <a
        href="/resend-verification"
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
      >
        Resend Email
      </a>
    </div>
  );
};

export default CheckEmail;
