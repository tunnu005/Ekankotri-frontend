import '../../css/mainpage.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../login/authcontextprovider';
import Cookies from 'js-cookie';
import React, { useContext, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSignout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    navigate('/signin'); // Redirect to login or another page after sign out if needed
  };

  return (
    <nav className="bg-gradient-to-bl from-violet-300 to-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer">
            <span className="text-3xl font-bold brand-text">
              <span className="text-5xl font-extralight italic">E</span>cards
            </span>
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-6">
            <div className="cursor-pointer px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" onClick={() => navigate('/')}>Home</div>
            <div className="cursor-pointer px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" onClick={() => navigate('/about')}>About</div>
            <div className="cursor-pointer px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" onClick={() => navigate('/admin')}>Admin</div>
          </div>
          {/* Additional Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* <div className="cursor-pointer text-gray-500 hover:text-gray-700" onClick={() => navigate('/more')}>Upload</div> */}
            <div className="cursor-pointer text-gray-500 hover:text-gray-700" onClick={handleSignout}>Sign Out</div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="space-y-2 mt-4">
              <div className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700" onClick={() => { setIsOpen(false); navigate('/'); }}>Home</div>
              <div className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700" onClick={() => { setIsOpen(false); navigate('/about'); }}>About</div>
              <div className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700" onClick={() => { setIsOpen(false); navigate('/admin'); }}>Admin</div>
              <div className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700" onClick={() => { setIsOpen(false); navigate('/more'); }}>Upload</div>
              <div className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700" onClick={() => { setIsOpen(false); handleSignout(); }}>Sign Out</div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
