
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToTopics = () => {
    document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background image - updated to be more student-finance specific */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
          alt="International student using laptop for finances" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/90"></div>
      </div>
      
      {/* Floating finance icons for visual interest */}
      <motion.div 
        className="absolute top-1/4 right-[15%] glass h-16 w-16 flex items-center justify-center"
        animate={{ y: ["0%", "-10%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-3xl">💳</span>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-[20%] glass h-12 w-12 flex items-center justify-center"
        animate={{ y: ["0%", "-15%", "0%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="text-2xl">🏦</span>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 left-[15%] glass h-14 w-14 flex items-center justify-center"
        animate={{ y: ["0%", "-12%", "0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="text-2xl">💰</span>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.div 
          className="inline-block mb-3 px-3 py-1 bg-blue-100/80 backdrop-blur-2xs rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-800 text-sm font-medium">
            Finance Guide for International Students
          </p>
        </motion.div>
        
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Master Your Finances as an International Student
        </motion.h1>
        
        <motion.p 
          className="text-base md:text-lg text-slate-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Set up your bank account, understand SSN benefits, and find the best credit cards—all in one place.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            onClick={scrollToTopics}
            size="lg" 
            className="relative group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
