import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Footer = () => {
  return (
    <div>
  <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          {/* About Link */}
          <Link
            to="/"
            className="hover:text-white text-sm font-medium"
          >
            About
          </Link>
       
          {/* Privacy Link */}
          <Link
            to="/"
            className="hover:text-white text-sm font-medium"
          >
            Privacy Policy
          </Link>
          {/* Contact Link */}
          <Link
            to="/"
            className="hover:text-white text-sm font-medium"
          >
            Contact
          </Link>
        </div>
        {/* Copyright Section */}
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GK WORLD . All rights reserved.</p>
        </div>
      </div>
    </footer>    </div>
  )
}

export default Footer
