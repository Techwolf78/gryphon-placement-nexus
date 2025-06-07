
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Student Management',
      description: 'Comprehensive student database with profiles, resumes, skills tracking, and training progress monitoring.'
    },
    {
      icon: '🏢',
      title: 'Employer Relations',
      description: 'Manage employer contacts, job postings, and maintain detailed communication history for better relationships.'
    },
    {
      icon: '🗓️',
      title: 'Interview Scheduling',
      description: 'Calendar-based scheduling with automated reminders, call letter generation, and placement drive management.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Real-time placement statistics, batch performance metrics, and exportable reports for stakeholders.'
    },
    {
      icon: '📁',
      title: 'Resume Bank',
      description: 'Centralized resume repository with smart matching engine and skill-based filtering for quick candidate selection.'
    },
    {
      icon: '🔄',
      title: 'Communication Hub',
      description: 'Bulk messaging, feedback collection, and automated follow-up systems for seamless coordination.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Successful Placements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive CRM solution addresses every aspect of the placement process, from student onboarding to final placement tracking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
