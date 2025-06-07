
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
    <div className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our CRM solution
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className={`text-blue-600 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
