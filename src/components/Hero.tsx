
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToTopics = () => {
    document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white/80"></div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <div className="inline-block mb-3 px-3 py-1 bg-blue-100/80 backdrop-blur-2xs rounded-full">
          <p className="text-blue-800 text-sm font-medium">
            Finance Guide for International Students
          </p>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800 animate-fade-in">
          Master Your Finances as an International Student
        </h1>
        
        <p className="text-base md:text-lg text-slate-700 mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-200">
          Set up your bank account, understand SSN benefits, and find the best credit cards—all in one place.
        </p>
        
        <Button 
          onClick={scrollToTopics}
          size="lg" 
          className="relative group animate-fade-in animate-delay-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
        >
          Get Started
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
