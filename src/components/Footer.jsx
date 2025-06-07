
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">Gryphon Academy CRM</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming placement processes for training institutes across India with intelligent CRM solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Facebook
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@gryphonacademy.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Mumbai, Maharashtra, India</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Support</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Documentation</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Gryphon Academy CRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
