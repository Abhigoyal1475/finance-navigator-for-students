
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ExternalLink, Gift } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full mb-4">
            <Gift size={16} />
            <span className="text-sm font-medium">Exclusive Referral Bonuses</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get $50-$100 Bonuses with Our Referral Links</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Use our exclusive referral links when you sign up for these recommended financial products to receive special welcome bonuses.
          </p>
        </motion.div>
        
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
            <p className="text-slate-700 mb-4">
              Sign up for a Chase Student Checking Account and earn $100 when you set up direct deposit within 90 days.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg mb-6">
              <p className="text-sm font-medium text-blue-800 flex items-center gap-2">
                <Gift size={16} />
                <span>Referral Bonus: $100 after first direct deposit</span>
              </p>
            </div>
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
            <p className="text-slate-700 mb-4">
              Apply for the Discover It Student Card with no SSN required and enjoy 5% cashback on rotating categories.
            </p>
            <div className="bg-indigo-50 p-3 rounded-lg mb-6">
              <p className="text-sm font-medium text-indigo-800 flex items-center gap-2">
                <Gift size={16} />
                <span>Referral Bonus: $50 statement credit + cashback match in first year</span>
              </p>
            </div>
            <Button className="w-full group">
              Apply Now
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 max-w-3xl mx-auto"
          >
            <h3 className="text-lg font-bold mb-2">More Bank & Credit Card Referrals</h3>
            <p className="text-slate-700 mb-4">
              We have additional referral links for Bank of America, Citibank, Wells Fargo, and Capital One products. 
              Contact us to get specific referral links for these institutions.
            </p>
            <Button variant="outline" className="group">
              View All Referrals
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
