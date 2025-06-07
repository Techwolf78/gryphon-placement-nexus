
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="xl:col-span-2" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-4 mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Gryphon Academy CRM
              </span>
            </motion.div>
            
            <p className="text-slate-300 mb-10 max-w-lg font-light leading-relaxed text-xl">
              Transforming placement processes for educational institutions worldwide with intelligent AI-powered CRM solutions that deliver measurable results.
            </p>
            
            <div className="flex space-x-6">
              {[
                { icon: '💼', href: '#', label: 'LinkedIn' },
                { icon: '🐦', href: '#', label: 'Twitter' },
                { icon: '📘', href: '#', label: 'Facebook' },
                { icon: '📧', href: '#', label: 'Email' }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white transition-all duration-300 shadow-xl"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    borderColor: "rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-6 text-slate-300">
              {[
                { icon: '📧', text: 'hello@gryphonacademy.com', color: 'text-cyan-400' },
                { icon: '📞', text: '+91 98765 43210', color: 'text-violet-400' },
                { icon: '📍', text: 'Mumbai, Maharashtra, India', color: 'text-pink-400' }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 group cursor-pointer"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className={`${contact.color} text-xl`}>{contact.icon}</span>
                  <span className="font-light text-lg group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'API Documentation', 'Support Center', 'Security', 'Status Page'].map((link, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="block text-slate-300 hover:text-white transition-all duration-300 font-light text-lg group"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {link}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-white/10 pt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <p className="text-slate-400 font-light text-lg">
              &copy; 2024 Gryphon Academy CRM. All rights reserved.
            </p>
            <div className="flex items-center space-x-3 text-slate-400 font-light text-lg">
              <span>Built with</span>
              <motion.span 
                className="text-red-400 text-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                ❤️
              </motion.span>
              <span>using cutting-edge AI technology</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
