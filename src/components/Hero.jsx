
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Hero = () => {
  const { currentUser } = useAuth();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Floating orbs with enhanced animations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-slide-in-from-top">
              <span className="mr-2">🚀</span>
              AI-Powered Placement Management
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none">
              <span className="block text-white mb-4 animate-slide-in-from-left">Transform Your</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-in-from-right">
                Placement Process
              </span>
            </h1>
            
            <p className="max-w-4xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed font-light animate-fade-in animation-delay-500">
              Revolutionize student management and employer connections with our next-generation AI-powered CRM. 
              <span className="block mt-2 text-cyan-300 font-medium">Built for the future of education.</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in animation-delay-1000">
            {currentUser ? (
              <Link 
                to="/dashboard" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">Go to Dashboard</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="relative z-10">Get Started Free</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white/90 hover:text-white transition-all duration-300 rounded-2xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/10">
                  <span className="mr-2">▶</span>
                  Watch Demo
                </button>
              </>
            )}
          </div>
          
          <div className="pt-16 animate-fade-in animation-delay-1500">
            <p className="text-sm text-gray-400 mb-8 font-medium tracking-wide uppercase">
              Trusted by leading training institutes worldwide
            </p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="h-12 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <span className="text-white/60 font-semibold">Institute</span>
              </div>
              <div className="h-12 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <span className="text-white/60 font-semibold">Academy</span>
              </div>
              <div className="h-12 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <span className="text-white/60 font-semibold">College</span>
              </div>
              <div className="h-12 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <span className="text-white/60 font-semibold">University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
