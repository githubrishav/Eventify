
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Eventify
        </div>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/login" className="text-white hover:text-gray-200">
            Account
          </Link>
          <Link to="/events" className="text-white hover:text-gray-200">
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
