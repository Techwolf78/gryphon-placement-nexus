
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Hero = () => {
  const { currentUser } = useAuth();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-gray-900">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Placement Process
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Streamline student management, employer connections, and placement tracking with our AI-powered CRM designed specifically for training institutes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {currentUser ? (
              <Link 
                to="/dashboard" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Go to Dashboard
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
                <button className="px-8 py-4 text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Watch Demo
                </button>
              </>
            )}
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading training institutes</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
