
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Student Management',
      description: 'Comprehensive student database with profiles, resumes, skills tracking, and training progress monitoring.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🏢',
      title: 'Employer Relations',
      description: 'Manage employer contacts, job postings, and maintain detailed communication history for better relationships.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🗓️',
      title: 'Interview Scheduling',
      description: 'Calendar-based scheduling with automated reminders, call letter generation, and placement drive management.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Real-time placement statistics, batch performance metrics, and exportable reports for stakeholders.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '📁',
      title: 'Resume Bank',
      description: 'Centralized resume repository with smart matching engine and skill-based filtering for quick candidate selection.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🔄',
      title: 'Communication Hub',
      description: 'Bulk messaging, feedback collection, and automated follow-up systems for seamless coordination.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-sm font-medium mb-8">
            <span className="mr-2">✨</span>
            Powerful Features
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            Everything You Need for
            <span className="block bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Successful Placements
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our comprehensive CRM solution addresses every aspect of the placement process, 
            from student onboarding to final placement tracking with cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon with gradient background */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>
              
              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
