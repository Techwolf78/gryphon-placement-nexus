
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Gryphon Academy CRM
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md font-light leading-relaxed text-lg">
              Transforming placement processes for training institutes across India with intelligent CRM solutions powered by cutting-edge AI technology.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <span className="text-lg">💼</span>
              </a>
              <a href="#" className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <span className="text-lg">📘</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                <span className="text-cyan-400">📧</span>
                <span className="font-light">info@gryphonacademy.com</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                <span className="text-purple-400">📞</span>
                <span className="font-light">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                <span className="text-pink-400">📍</span>
                <span className="font-light">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Support', 'Documentation'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-all duration-300 font-light hover:translate-x-2 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-light">
              &copy; 2024 Gryphon Academy CRM. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400 font-light">
              <span>Built with</span>
              <span className="text-red-400">❤️</span>
              <span>using cutting-edge technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
