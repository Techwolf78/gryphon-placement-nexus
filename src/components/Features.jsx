
import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Student Management',
      description: 'Comprehensive student database with AI-powered skill matching, progress tracking, and intelligent career path recommendations.',
      gradient: 'from-blue-600 to-cyan-500',
      delay: 0
    },
    {
      icon: '🏢',
      title: 'Employer Relations',
      description: 'Advanced CRM for employer engagement with automated outreach, requirement matching, and relationship intelligence.',
      gradient: 'from-purple-600 to-pink-500',
      delay: 0.1
    },
    {
      icon: '🗓️',
      title: 'Smart Scheduling',
      description: 'AI-powered interview scheduling with conflict resolution, automated reminders, and seamless calendar integration.',
      gradient: 'from-green-600 to-teal-500',
      delay: 0.2
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Real-time insights with predictive analytics, custom reporting, and actionable intelligence for better outcomes.',
      gradient: 'from-orange-600 to-red-500',
      delay: 0.3
    },
    {
      icon: '📁',
      title: 'Intelligent Resume Bank',
      description: 'AI-powered resume parsing, skill extraction, and smart candidate matching with advanced filtering capabilities.',
      gradient: 'from-indigo-600 to-purple-500',
      delay: 0.4
    },
    {
      icon: '🔄',
      title: 'Automation Hub',
      description: 'Workflow automation with smart triggers, bulk operations, and seamless third-party integrations.',
      gradient: 'from-pink-600 to-rose-500',
      delay: 0.5
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <div className="py-32 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
      
      {/* Floating gradient elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-violet-200/40 to-purple-200/40 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 border-2 border-violet-200/50 text-violet-700 text-sm font-bold mb-12 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-3 text-lg">✨</span>
            Powerful AI-Driven Features
          </motion.div>
          
          <motion.h2 
            className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent mb-4">
              Everything You Need
            </span>
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              For Perfect Placements
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our comprehensive AI-powered platform addresses every aspect of the placement process, 
            from intelligent student matching to automated workflow management.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ animationDelay: `${feature.delay}s` }}
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl`}></div>
              
              {/* Icon container */}
              <motion.div 
                className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-8 shadow-xl`}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {feature.icon}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20 blur-lg`}></div>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed font-light text-lg mb-8">
                {feature.description}
              </p>
              
              {/* Hover arrow with enhanced styling */}
              <motion.div 
                className={`absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.div>
              
              {/* Card border glow effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action section */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center px-12 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 text-white shadow-2xl hover:shadow-3xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Explore All Features
            <motion.span 
              className="ml-3 text-2xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
