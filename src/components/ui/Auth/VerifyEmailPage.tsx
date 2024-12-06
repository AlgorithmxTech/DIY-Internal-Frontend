import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../utils/Api";

const VerifyEmailPage: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<"loading" | "verified" | "failed">("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await api.post("/auth/verify-email", { token });
        if (response.status === 200) {
          setStatus("verified");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setStatus("failed");
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setStatus("failed");
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {status === "loading" && (
        <p className="text-lg font-medium text-gray-700">Verifying your email...</p>
      )}
      {status === "verified" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-600">Email Verified!</h1>
          <p className="text-gray-700 mt-2">
            Thank you for verifying your email. You can now log in.
          </p>
          <a
            href="/signin"
            className="mt-4 px-4 py-2 bg-blueDark text-white rounded hover:bg-blue-700"
          >
            Go to Login
          </a>
        </div>
      )}
      {status === "failed" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Verification Failed</h1>
          <p className="text-gray-700 mt-2">
            The token is invalid or has expired. Please try again.
          </p>
          <a
            href="/resend-verification"
            className="mt-4 px-4 py-2 bg-yellow-600 text-black rounded hover:bg-yellow-700"
          >
            Resend Verification Email
          </a>
        </div>
      )}
    </div>
  );
};

export default VerifyEmailPage;
