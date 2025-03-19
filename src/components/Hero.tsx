
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Gift, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToTopics = () => {
    document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
          alt="International student using laptop" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/90"></div>
      </div>
      
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
          className="text-base md:text-lg text-slate-700 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Set up your bank account, understand SSN benefits, and find the best credit cards—all in one place.
        </motion.p>
        
        <motion.div 
          className="bg-blue-50/80 backdrop-blur-2xs p-4 rounded-lg mb-8 border border-blue-100 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2 text-indigo-600">
            <Gift size={18} className="text-blue-600" />
            <span className="font-medium">Exclusive Benefits</span>
          </div>
          <p className="text-sm text-slate-700">
            Access our <span className="font-semibold">exclusive bank offers and referrals</span> that you won't find elsewhere. 
            We've spent months researching and negotiating special deals so you get better bonuses and benefits than standard applications!
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white/70 p-2 rounded flex items-center">
              <Star size={14} className="text-amber-500 mr-1.5" />
              <span>Higher sign-up bonuses</span>
            </div>
            <div className="bg-white/70 p-2 rounded flex items-center">
              <Star size={14} className="text-amber-500 mr-1.5" />
              <span>Special student rates</span>
            </div>
            <div className="bg-white/70 p-2 rounded flex items-center">
              <Star size={14} className="text-amber-500 mr-1.5" />
              <span>Fee waivers for students</span>
            </div>
            <div className="bg-white/70 p-2 rounded flex items-center">
              <Star size={14} className="text-amber-500 mr-1.5" />
              <span>Easier approval paths</span>
            </div>
          </div>
        </motion.div>
        
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
