import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Typography, Box, Container, Grid, Chip } from '@mui/material';

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
    <Box className="py-32 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
      
      {/* Floating gradient elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-violet-200/40 to-purple-200/40 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full filter blur-3xl"></div>
      
      <Container maxWidth="xl" className="relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Chip 
            icon={<span className="text-lg">✨</span>}
            label="Powerful AI-Driven Features"
            variant="outlined"
            className="mb-12 bg-gradient-to-r from-violet-100 to-cyan-100 border-violet-200 text-violet-700"
          />
          
          <Typography variant="h1" component="h2" className="mb-8">
            <span className="block bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent mb-4">
              Everything You Need
            </span>
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              For Perfect Placements
            </span>
          </Typography>
          
          <Typography variant="h6" className="text-slate-600 max-w-5xl mx-auto font-light">
            Our comprehensive AI-powered platform addresses every aspect of the placement process, 
            from intelligent student matching to automated workflow management.
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-xl border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <CardHeader>
                    <motion.div 
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <Typography variant="h5" component="h3" className="font-bold text-slate-900 mb-4">
                      {feature.title}
                    </Typography>
                  </CardHeader>
                  
                  <CardContent>
                    <Typography variant="body1" className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        {/* Call to action section */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 text-white hover:shadow-2xl"
          >
            Explore All Features
            <motion.span 
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Features;
