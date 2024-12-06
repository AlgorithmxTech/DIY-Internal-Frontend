import React, { useState, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu when switching to desktop mode
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsMenuOpen(false); // Close the menu when switching to desktop mode
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="bg-white w-full shadow-md relative">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="text-xl font-bold text-gray-800">Logo</a>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="/pricing" className="text-gray-800 hover:text-gray-600">Pricing</a>
                        <a href="/contact" className="text-gray-800 hover:text-gray-600">Contact</a>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <a href="/signin" className="text-gray-800 hover:text-gray-600">Login</a>
                        <a href="/signup" className="py-3 px-5 rounded-xl bg-blueDark text-white hover:text-gray-600">
                            Sign Up
                        </a>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 bg-white text-white hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        >
                            <BiMenu size={24} className='text-black'/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } w-64 z-50`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <a href="/" className="text-xl font-bold text-gray-800">Logo</a>
                    <button
                        onClick={toggleMenu}
                        className="bg-gray-500 text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    >
                        <svg className="h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="mt-4 space-y-4">
                    <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
                    <a href="/pricing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pricing</a>
                    <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
                    <a href="/signin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</a>
                    <a href="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
