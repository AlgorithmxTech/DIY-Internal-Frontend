import React from 'react';
import { FaFacebook,FaXTwitter,FaInstagram } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className='text-start'>
            <h3 className="text-lg font-bold text-white">DIY</h3>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Us eget felis quis elit facilisis venenatis.
            </p>
          </div>

          {/* Helpful Links */}
          <div className=''>
            <h3 className="text-lg font-bold text-white">Helpful Links</h3>
            <ul className="mt-4 space-y-2 text-white">
              <li>
                <a href="/faq" className="hover:text-gray-100 text-white">FAQ</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-100 text-white">Contact Us</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-100 text-white">Terms and Service</a>
              </li>
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Menu</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-white hover:text-gray-100">Home</a>
              </li>
              <li>
                <a href="/pricing" className="text-white hover:text-gray-100">Pricing</a>
              </li>
              <li>
                <a href="/how-it-works" className="text-white hover:text-gray-100">How it Works</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} DiY. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-100">
            <FaFacebook className='text-white' size={24}/>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-100">
             <FaXTwitter className='text-white' size={24}/>
            </a>
            <a href="https://linkedin.com"  className="hover:text-gray-100">
             <FaInstagram size={24} className='text-white'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
