
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white/5 backdrop-blur-2xl border-b border-white/10 z-50 shadow-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-4 group">
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="text-white font-bold text-xl">G</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-violet-900 bg-clip-text text-transparent group-hover:from-violet-600 group-hover:to-cyan-600 transition-all duration-300">
                Gryphon Academy CRM
              </span>
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-6">
            {currentUser ? (
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/dashboard" 
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Dashboard</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/login" 
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
