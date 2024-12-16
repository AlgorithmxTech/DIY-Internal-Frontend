import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGooglePlus, FaXTwitter, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa6';
import { IoMdMail } from "react-icons/io";
import api, { setAuthToken } from '../../../utils/Api';

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await api.post("/login/", { email, password });
            const token = response.data.access;
            const refresh = response.data.refresh;
            if (token) {
                setAuthToken(token, refresh);
                navigate("/dashboard",{ replace: true }); 
            }
        } catch (err) {
            console.log(err);
            setError("Invalid credentials");
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
            <div className="w-full md:w-[60%] text-black h-1/2 lg:h-screen p-4 flex items-center justify-center">
                <div className="flex flex-col items-center w-full max-w-md lg:max-w-none">
                    <h1 className="font-bold mb-6 text-xl lg:text-3xl">Sign In To DiY</h1>
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
                    <h3 className="my-4 lg:my-10 text-sm lg:text-base font-medium">or use your email account</h3>
                    <form onSubmit={handleSignIn} className="md:w-1/2 w-full p-4 bg-white rounded shadow-md">
                        <div className='relative w-full mb-4'>
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
                        </div>
                        <div className='relative w-full mb-4'>
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
                            <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2'>
                                {showPassword ? (<FaEyeSlash size={20} className='text-gray-500' />) : (<FaEye size={20} className='text-gray-500' />)}
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <a href='/forget-password' className='my-2 text-sm text-blue-500 hover:underline'>Forgot Your Password?</a>
                        <button
                            type="submit"
                            className={`w-full mt-4 ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white text-base py-2 rounded`}
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Sign in"}
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full h-1/2 lg:w-[40%] flex flex-col items-center justify-center bg-blue-600 text-white p-6 lg:p-0 lg:h-screen">
                <h1 className="font-bold text-2xl lg:text-3xl mb-4">Hello Friend!</h1>
                <p className="text-center w-full lg:w-2/3 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis.
                </p>
                <a href='/signup' className='px-6 py-3 rounded-full bg-white text-blue-600 font-medium text-lg hover:bg-gray-100'>
                    Sign Up
                </a>
            </div>
        </motion.div>
    );
};

export default SignIn;
