
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-100 mb-6">
              <span className="text-3xl">🏦</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Chase Student Checking</h3>
            <p className="text-slate-700 mb-6">
              Sign up for a Chase Student Checking Account and earn $100 when you set up direct deposit within 90 days.
            </p>
            <Button className="w-full group">
              Open an Account
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-indigo-100 mb-6">
              <span className="text-3xl">💳</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Discover It Student Card</h3>
            <p className="text-slate-700 mb-6">
              Apply for the Discover It Student Card with no SSN required and enjoy 5% cashback on rotating categories.
            </p>
            <Button className="w-full group">
              Apply Now
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
