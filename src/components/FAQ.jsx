
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does AI improve placement success rates?',
      answer: 'Our AI analyzes student profiles, employer requirements, and historical placement data to create optimal matches. Machine learning algorithms continuously improve recommendations, resulting in 40% higher placement rates compared to traditional methods.'
    },
    {
      question: 'Can the platform scale with our growing institution?',
      answer: 'Absolutely. Our cloud-native architecture supports unlimited users with role-based access controls. From 100 to 100,000 students, the platform scales seamlessly while maintaining peak performance and security standards.'
    },
    {
      question: 'What security measures protect our sensitive data?',
      answer: 'We implement enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. All data is stored in secure cloud infrastructure with automated backups and disaster recovery protocols.'
    },
    {
      question: 'How does the integration ecosystem work?',
      answer: 'Our platform offers 50+ pre-built integrations including email systems, calendar applications, and HR tools. RESTful APIs enable custom integrations, while webhooks provide real-time data synchronization with your existing systems.'
    },
    {
      question: 'What analytics and reporting capabilities are included?',
      answer: 'Comprehensive dashboards provide real-time insights on placement rates, employer engagement, student progress, and ROI metrics. Custom report builders, automated insights, and predictive analytics help optimize your placement strategy.'
    },
    {
      question: 'What level of support and training is provided?',
      answer: 'We provide white-glove onboarding with dedicated success managers, comprehensive training programs, 24/7 technical support, and an extensive knowledge base. Regular webinars and user community forums ensure ongoing success.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    hidden: { opacity: 0, y: 30 },
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
    <div className="py-32 bg-gradient-to-br from-indigo-50/30 via-white to-violet-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      
      {/* Floating gradient elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-purple-200/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-violet-200/30 to-pink-200/30 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-100 to-violet-100 border-2 border-cyan-200/50 text-violet-700 text-sm font-bold mb-12 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-3 text-lg">❓</span>
            Frequently Asked Questions
          </motion.div>
          
          <motion.h2 
            className="text-6xl sm:text-7xl font-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent mb-4">
              Got Questions?
            </span>
            <span className="block bg-gradient-to-r from-cyan-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-slate-600 font-light max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to know about our AI-powered CRM platform
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <motion.button
                className="w-full px-10 py-8 text-left flex justify-between items-center group"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-bold text-slate-900 text-xl lg:text-2xl group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 pr-8">
                  {faq.question}
                </span>
                <motion.div 
                  className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white shadow-lg`}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-8">
                      <div className="h-px bg-gradient-to-r from-violet-200 via-cyan-200 to-violet-200 mb-6"></div>
                      <motion.p 
                        className="text-slate-600 leading-relaxed font-light text-lg"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Contact CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl text-slate-600 mb-8 font-light">
            Still have questions? Our team is here to help.
          </p>
          <motion.button
            className="inline-flex items-center px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Contact Our Experts
            <span className="ml-3 text-xl">💬</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
