
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the CRM help improve placement rates?',
      answer: 'Our CRM provides comprehensive tracking of student skills, employer requirements, and placement history. This data-driven approach helps identify the best matches and track what works, leading to higher placement success rates.'
    },
    {
      question: 'Can multiple users access the system simultaneously?',
      answer: 'Yes, our system supports multi-user access with role-based permissions. Admins, trainers, students, and recruiters can all have appropriate access levels to the information they need.'
    },
    {
      question: 'How secure is our student and employer data?',
      answer: 'We use Firebase security with industry-standard encryption and access controls. All data is stored securely in the cloud with regular backups and strict privacy compliance.'
    },
    {
      question: 'Does the system integrate with existing tools?',
      answer: 'Yes, our CRM can export data to Excel, PDF formats, and can be integrated with email systems for automated communications. We also provide APIs for custom integrations.'
    },
    {
      question: 'What kind of reporting features are available?',
      answer: 'Comprehensive reporting including placement rates by batch, company-wise statistics, student performance metrics, and customizable reports that can be exported for presentations to stakeholders.'
    },
    {
      question: 'Is training provided for using the system?',
      answer: 'Yes, we provide complete onboarding and training for your team, along with ongoing support and documentation to ensure smooth adoption of the system.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-gradient-to-br from-purple-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-purple-100 border border-cyan-200 text-purple-700 text-sm font-medium mb-8">
            <span className="mr-2">❓</span>
            FAQ
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Get answers to common questions about our CRM solution
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-cyan-50/50 transition-all duration-300 group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 text-lg group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-purple-200 to-cyan-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
