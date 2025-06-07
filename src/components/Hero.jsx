
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { currentUser } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      {/* Floating gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/30 to-rose-500/30 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10 py-32">
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 text-sm font-medium shadow-2xl"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="mr-3 text-lg">🚀</span>
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Next-Gen AI-Powered CRM Platform
              </span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.9]"
                variants={itemVariants}
              >
                <motion.span 
                  className="block text-white mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Revolutionize
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Student Success
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="max-w-5xl mx-auto text-xl sm:text-2xl lg:text-3xl text-slate-300 leading-relaxed font-light"
                variants={itemVariants}
              >
                Transform placement processes with our intelligent CRM platform. 
                <span className="block mt-4 text-2xl sm:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  AI-powered insights. Seamless workflows. Unprecedented results.
                </span>
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12"
            variants={itemVariants}
          >
            {currentUser ? (
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/dashboard" 
                  className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 text-white shadow-2xl shadow-violet-500/25 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Access Dashboard
                    <motion.span 
                      className="ml-3 text-2xl"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to="/login" 
                    className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 text-white shadow-2xl shadow-violet-500/25 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Free Trial
                      <motion.span 
                        className="ml-3 text-2xl"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
                
                <motion.button 
                  className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-semibold text-white/90 hover:text-white transition-all duration-300 rounded-2xl border-2 border-white/20 hover:border-white/40 backdrop-blur-xl hover:bg-white/5"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-3 text-2xl">▶</span>
                  Watch Demo
                </motion.button>
              </>
            )}
          </motion.div>
          
          <motion.div 
            className="pt-20"
            variants={itemVariants}
          >
            <p className="text-sm text-slate-400 mb-12 font-semibold tracking-widest uppercase">
              Trusted by 500+ Educational Institutions Worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {['TechCorp Institute', 'Future Academy', 'Innovation College', 'Global University'].map((name, index) => (
                <motion.div 
                  key={index}
                  className="h-16 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-center shadow-xl"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-white/70 font-semibold text-sm">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-xl bg-white/5">
          <motion.div 
            className="w-1.5 h-4 bg-gradient-to-b from-violet-400 to-cyan-400 rounded-full mt-3"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
