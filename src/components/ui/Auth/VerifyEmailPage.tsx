import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import api from "../../../utils/Api";

const PasswordReset: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"loading" | "verified" | "failed">("loading");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = async () => {
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await api.post("/reset-password/", {
        token,
        new_password: newPassword,
        confirm_password: confirmPassword,
      });

      if (response.status === 200) {
        setMessage(response.data.message + " You will be redirected to SignIn page");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Password reset failed.");
      setStatus("failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Reset Your Password</h2>
        {message && (
          <div
            className={`p-3 mb-4 text-start rounded-md ${
              status === "failed" ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"
            }`}
          >
            {message}
          </div>
        )}
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm text-start font-bold mb-2" htmlFor="new_password">
            New Password
          </label>
          <input
            type={showNewPassword ? "text" : "password"}
            id="new_password"
            name="new_password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your new password"
          />
          <span
            className="absolute right-3 top-10 cursor-pointer"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </span>
        </div>
        <div className="mb-4 relative">
          <label className="block text-start text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm_password"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm your password"
          />
          <span
            className="absolute right-3 top-10 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </span>
        </div>
        <button
          onClick={handleReset}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default PasswordReset;
