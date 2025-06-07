
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-white/20 z-50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">G</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-purple-600 transition-all duration-300">
              Gryphon Academy CRM
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <Link 
                to="/dashboard" 
                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Dashboard</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
