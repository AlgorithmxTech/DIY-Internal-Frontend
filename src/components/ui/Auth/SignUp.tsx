import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGooglePlus, FaXTwitter, FaLock, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa6';
import { IoMdMail } from "react-icons/io";
import api from '../../../utils/Api';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setEmailError("");
        setUsernameError("");

        try {
            const formData = {
                email,
                username,
                password,
                password_confirm: password,
            };

            const response = await api.post('/register/', formData);
            if (response.data.email_status === "sent") {
                navigate("/check-email", { state: { email },replace:true });
            }
        } catch (err: any) {
            if (err.response && err.response.status === 400) {
                const errorData = err.response.data;
                setEmailError(errorData.email ? errorData.email[0] : "");
                setUsernameError(errorData.username ? errorData.username[0] : "");
            } else {
                setError("Something went wrong. Please try again later.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            className="min-h-screen flex flex-col lg:flex-row items-center md:justify-center bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Left Section */}
            <div className="w-full lg:w-[40%] flex flex-col items-center justify-center bg-blue-600 text-white p-6 lg:p-12 h-full lg:h-screen">
                <h1 className="font-bold text-2xl lg:text-3xl mb-4">Welcome Back!</h1>
                <p className="text-center w-full lg:w-2/3 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis.
                </p>
                <a href="/signin" className="px-6 py-3 rounded-full bg-white text-blue-600 font-medium text-lg hover:bg-gray-100">
                    Sign In
                </a>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[60%] text-black h-auto lg:h-screen p-4 lg:p-12">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold mb-6 text-xl lg:text-3xl">Create Account</h1>
                    <div className="flex justify-center items-center gap-4 lg:gap-5 mb-6">
                        <a href='/google'>
                            <FaGooglePlus size={28} className='text-black' />
                        </a>
                        <a href='/facebook'>
                            <FaFacebook size={28} className='text-black' />
                        </a>
                        <a href='/twitter'>
                            <FaXTwitter size={28} className='text-black' />
                        </a>
                    </div>
                    <h3 className="my-4 lg:my-10 text-sm lg:text-base font-medium">or use your email for registration</h3>
                    <form onSubmit={handleSignUp} className="w-full max-w-md bg-white p-6 rounded shadow-md">
                        {/* Username Input */}
                        <div className='relative mb-4'>
                            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                                <FaUser className='text-gray-500' size={20} />
                            </div>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Username"
                                disabled={isLoading}
                                required
                                className="w-full pl-10 p-3 bg-gray-100 text-black placeholder-gray-500 rounded-lg"
                            />
                            {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
                        </div>

                        {/* Email Input */}
                        <div className='relative mb-4'>
                            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                                <IoMdMail className='text-gray-500' size={20} />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                disabled={isLoading}
                                required
                                className="w-full pl-10 p-3 bg-gray-100 text-black placeholder-gray-500 rounded-lg"
                            />
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>

                        {/* Password Input */}
                        <div className='relative mb-4'>
                            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                                <FaLock className='text-gray-500' size={20} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                                required
                                className="w-full pl-10 p-3 bg-gray-100 text-black placeholder-gray-500 rounded-lg"
                            />
                            <div onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'>
                                {showPassword ? (<FaEyeSlash size={20} className='text-gray-500' />) : (<FaEye size={20} className='text-gray-500' />)}
                            </div>
                        </div>

                        {/* General Error */}
                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white text-base py-2 rounded`}
                        >
                            {isLoading ? "Creating Account..." : "Sign Up"}
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default SignUp;
